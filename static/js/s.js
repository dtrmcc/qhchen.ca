/* Visitor statistics for qhchen.ca - no cookies, no local storage, no third parties.
   Sends: page path, referring page, and clicks on links to other sites. Respects Do Not Track / GPC:
   then only an anonymous "page viewed" tally is sent. Details: /privacy/ */
(function () {
  var n = navigator, d = document;
  if (n.webdriver) return;
  var dnt = n.doNotTrack === "1" || window.doNotTrack === "1" || n.globalPrivacyControl === true;
  function send(o) {
    o.d = dnt ? 1 : 0;
    var b = JSON.stringify(o);
    try {
      if (n.sendBeacon && n.sendBeacon("/a/e", new Blob([b], { type: "text/plain" }))) return;
    } catch (e) {}
    if (window.fetch) fetch("/a/e", { method: "POST", body: b, keepalive: true, credentials: "omit" }).catch(function () {});
  }
  send({ k: "v", p: location.pathname, r: dnt ? "" : d.referrer });
  d.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    var u;
    try { u = new URL(a.href, location.href); } catch (err) { return; }
    if (u.protocol === "mailto:") send({ k: "o", p: location.pathname, t: "mailto" });
    else if (/^https?:$/.test(u.protocol) && u.host !== location.host)
      send({ k: "o", p: location.pathname, t: dnt ? u.hostname : u.origin + u.pathname });
  }, true);
})();
