<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Jambo Light Studio | Professional Studio Services</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- Header -->
  <header class="navbar">
    <div class="container navbar-container">
      <h1 class="brand">Jambo Light Studio</h1>
      <nav class="navigation">
        <ul class="nav-links">
          <!-- Dark mode toggle -->
          <li>
            <label class="dark-toggle">
              <input type="checkbox" id="darkModeToggle" />
              <span class="slider"></span>
            </label>
          </li>
          <li><a href="#">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#video-highlights">Video Highlights</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero" id="home">
    <div class="container">
      <h2>Lighting Your Moments</h2>
      <p>Professional photography, videography, and studio rentals tailored to your needs in Nairobi.</p>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="services">
    <div class="container">
      <h2>Our Services</h2>
      <div class="card-grid">
        <div class="card">
          <img src="photography.jpg" alt="Photography" />
          <h3>Photography</h3>
          <p>Portraits, events, commercial shoots — captured with precision and creativity.</p>
        </div>
        <div class="card">
          <img src="videography.jpg" alt="Videography" />
          <h3>Videography</h3>
          <p>High-quality videos for weddings, promos, and more using top-tier equipment.</p>
        </div>
        <div class="card">
          <img src="studio.jpg" alt="Studio Rental" />
          <h3>Studio Rental</h3>
          <p>Rent our professional space with controlled lighting and backdrops.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio Section -->
  <section id="portfolio" class="portfolio">
    <div class="container">
      <h2>Portfolio</h2>
      <p>Take a look at some of our recent work across various studio sessions.</p>
      <div class="gallery" id="imageGallery">
        <!-- Gallery images will be loaded by JavaScript -->
      </div>
    </div>
  </section>

  <!-- Video Highlights Section -->
  <section id="video-highlights" class="video-gallery">
    <div class="container">
      <h2>Our Video Highlights</h2>
      <div class="video-grid">
        <div class="video-card">
          <video controls>
            <source src="video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Behind the Scenes – Photo Shoot</p>
        </div>
        <div class="video-card">
          <video controls>
            <source src="video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Studio Equipment Showcase</p>
        </div>
        <div class="video-card">
          <video controls>
            <source src="video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Client Session Highlights</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <p>Email: contact@jambolightstudio.com</p>
      <p>Phone: +254720600917</p>
      <p>Location: Nairobi, Kenya</p>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <p>&copy; 2025 Jambo Light Studio. All rights reserved.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="script.js"></script>
</body>
</html>
