<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dr. Qinghua Chen - Academic Portfolio</title>
    <meta name="description" content="Postdoctoral Fellow specializing in language education and poststructuralist theory">
    <meta name="author" content="Qinghua Chen">
    
    <!-- Academic CSS -->
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #fff;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background: #f8f9fa;
            border-bottom: 1px solid #dee2e6;
            padding: 1rem 0;
        }
        
        nav ul {
            list-style: none;
            display: flex;
            gap: 2rem;
        }
        
        nav a {
            text-decoration: none;
            color: #495057;
            font-weight: 500;
            transition: color 0.3s;
        }
        
        nav a:hover {
            color: #007bff;
        }
        
        .hero {
            padding: 4rem 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .hero-content {
            display: grid;
            grid-template-columns: 200px 1fr;
            gap: 3rem;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .hero-image {
            display: flex;
            justify-content: center;
        }
        
        .profile-photo {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            border: 4px solid white;
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
            object-fit: cover;
            transition: transform 0.3s ease;
        }
        
        .profile-photo:hover {
            transform: scale(1.05);
        }
        
        .hero-text {
            text-align: left;
        }
        
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 0.5rem;
            font-weight: 300;
        }
        
        .hero .subtitle {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            opacity: 0.9;
            font-weight: 500;
        }
        
        .hero p {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            opacity: 0.85;
            line-height: 1.7;
        }
        
        .hero .btn {
            display: inline-block;
            padding: 12px 24px;
            background: white;
            color: #667eea;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            transition: all 0.3s;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .hero .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }
        
        .section {
            padding: 4rem 0;
        }
        
        .section h2 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            text-align: center;
            color: #2c3e50;
        }
        
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .card {
            background: white;
            border-radius: 8px;
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .card:hover {
            transform: translateY(-4px);
        }
        
        .card h3 {
            color: #2c3e50;
            margin-bottom: 1rem;
        }
        
        .research-interests {
            background: #f8f9fa;
        }
        
        .tag {
            display: inline-block;
            background: #007bff;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            margin: 4px;
        }
        
        .contact {
            background: #2c3e50;
            color: white;
            text-align: center;
        }
        
        .contact a {
            color: #3498db;
            text-decoration: none;
        }
        
        .contact a:hover {
            text-decoration: underline;
        }
        
        footer {
            background: #343a40;
            color: white;
            text-align: center;
            padding: 2rem 0;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .hero-content {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 2rem;
            }
            
            .hero-text {
                text-align: center;
            }
            
            .hero h1 {
                font-size: 2.2rem;
            }
            
            .profile-photo {
                width: 150px;
                height: 150px;
            }
            
            nav ul {
                flex-direction: column;
                gap: 1rem;
            }
        }
        
        @media (max-width: 480px) {
            .hero h1 {
                font-size: 1.8rem;
            }
            
            .hero .subtitle {
                font-size: 1.1rem;
            }
            
            .profile-photo {
                width: 120px;
                height: 120px;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav class="container">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/publication/">Publications</a></li>
                <li><a href="/research/">Research</a></li>
                <li><a href="/teaching/">Teaching</a></li>
                <li><a href="/uploads/cv.pdf">CV</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="hero-content">
                <div class="hero-image">
                    <!-- Replace 'your-photo.jpg' with your actual photo filename -->
                    <img src="/images/profile-photo.jpg" alt="Dr. Qinghua Chen" class="profile-photo">
                </div>
                <div class="hero-text">
                    <h1>Dr. Qinghua Chen</h1>
                    <p class="subtitle">Postdoctoral Fellow</p>
                    <p>Specializing in language education and poststructuralist approaches to identity and power relations in educational contexts. Examining generative AI's impact on language education and teacher agency.</p>
                    <a href="/uploads/cv.pdf" class="btn">Download CV</a>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h2>About</h2>
                <div class="grid">
                    <div class="card">
                        <h3>Current Position</h3>
                        <p>Postdoctoral Fellow at The Education University of Hong Kong, specializing in language education and poststructuralist approaches to identity and power relations in educational contexts.</p>
                    </div>
                    <div class="card">
                        <h3>Research Focus</h3>
                        <p>My research integrates Foucauldian frameworks with critical perspectives on language teaching, examining generative AI's impact on language education and teacher agency.</p>
                    </div>
                    <div class="card">
                        <h3>Academic Background</h3>
                        <p>PhD in Education from Simon Fraser University (2022), with academic experiences spanning Canada and Asia, contributing to theoretical developments in critical approaches to language education.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section research-interests">
            <div class="container">
                <h2>Research Interests</h2>
                <div style="text-align: center; margin-top: 2rem;">
                    <span class="tag">Language Education</span>
                    <span class="tag">Poststructuralist Theory</span>
                    <span class="tag">Generative AI in Education</span>
                    <span class="tag">Teacher Agency</span>
                    <span class="tag">Postcolonial Studies</span>
                    <span class="tag">Foucauldian Frameworks</span>
                    <span class="tag">Narrative Inquiry</span>
                    <span class="tag">Critical Applied Linguistics</span>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h2>Key Projects</h2>
                <div class="grid">
                    <div class="card">
                        <h3>Social Media Analytics Research (SMART)</h3>
                        <p><strong>Team member</strong> | HKD 5,000,000 | The Education University of Hong Kong</p>
                    </div>
                    <div class="card">
                        <h3>Theorizing Plurilingual Assessment</h3>
                        <p><strong>Co-investigator</strong> | HKD 3,000,000 | The Education University of Hong Kong</p>
                    </div>
                    <div class="card">
                        <h3>Critical Media Literacy in Teacher Education</h3>
                        <p><strong>Co-investigator</strong> | CAD 200,000 | Social Sciences and Humanities Research Council of Canada</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section contact">
            <div class="container">
                <h2>Contact</h2>
                <p>Email: <a href="mailto:me@qhchen.ca">me@qhchen.ca</a></p>
                <p>ORCID: <a href="https://orcid.org/0000-0001-5212-2163" target="_blank">0000-0001-5212-2163</a></p>
                <p>Institution: The Education University of Hong Kong</p>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>© 2025 Dr. Qinghua Chen. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>