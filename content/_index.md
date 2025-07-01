yaml---
# Leave the homepage title empty to use the site title
title:
date: 2025-01-01
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      username: admin
  - block: collection
    id: research
    content:
      title: Research Interests
      subtitle: ''
      text: |-
        My research focuses on:
        - Language education and poststructuralist approaches to identity
        - Generative AI's impact on language education
        - Postcolonial theory and educational contexts
        - Teacher agency and power relations
        - Foucauldian frameworks in education
      count: 5
      filters:
        folders:
          - research
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    id: publications
    content:
      title: Recent Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '2'
      view: citation
  - block: collection
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    id: teaching
    content:
      title: Teaching
      filters:
        folders:
          - teaching
    design:
      columns: '2'
      view: compact
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      email: me@qhchen.ca
      phone: +852 53867520
      address:
        street: The Education University of Hong Kong
        city: Hong Kong
        region: Hong Kong SAR
        country: China
        country_code: HK
      coordinates:
        latitude: '22.3964'
        longitude: '114.1095'
      contact_links:
        - icon: orcid
          icon_pack: ai
          name: ORCID
          link: 'https://orcid.org/0000-0001-5212-2163'
      autolink: true
    design:
      columns: '2'
---