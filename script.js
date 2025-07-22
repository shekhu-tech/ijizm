// Function to inject header
function injectHeader() {
  const headerContainer = document.getElementById('header-container');
  
  headerContainer.innerHTML = `
    <header id="main-header">
      <div class="logo">
        <a href="index.html">
          <img src="sti.png" alt="LivFit Logo">
        </a>
      </div>
      <nav>
      <div class="nav-item">
          <a href="Privacy.html">Privacy Policy</a>
        </div>
        <div class="nav-item">
          <a href="team.html">Our team</a>
        </div>
        <div class="nav-item">
          <a href="Contact.html">Contact</a>
        </div>
    <div class="nav-item">
          <a href="brotchoure.html">Brotchoure</a>
        </div>
      </nav>
      <div class="menu-toggle" onclick="toggleSidebar()">
        <i class="fas fa-bars"></i>
      </div>

      <!-- Sidebar -->
      <div class="sidebar" id="sidebar">
        <div class="close-btn" onclick="toggleSidebar()">
          <i class="fas fa-times"></i>
        </div>
        <div class="sidebar-logo">
          <a href="index.html">
            <img src="sti.png" alt="LivFit Logo">
          </a>
        </div>
        <ul>
  <li>
    <a class="sidebar-button" href="privacy.html">
      <span><i class="fas fa-user-shield"></i> Privacy</span>
    </a>
  </li>
  <li>
    <a class="sidebar-button" href="team.html">
      <span><i class="fas fa-users"></i> Our-Team</span>
    </a>
  </li>
  <li>
    <a class="sidebar-button" href="contact.html">
      <span><i class="fas fa-envelope"></i> Contact</span>
    </a>
  </li>
  <li>
    <a class="sidebar-button" href="brotchoure.html">
      <span><i class="fas fa-briefcase"></i>Brotchoure</span>
    </a>
  </li>
</ul>
      </div>
    </header>
  `;
}

// Function to inject footer
function injectFooter() {
  const footerContainer = document.getElementById('footer-container');
  
  footerContainer.innerHTML = `
    <footer id="site-footer">
      <div class="footer-container">
        <div class="footer-logo">InshaJiZhatkamachine</div>
        <p class="footer-description">
          We Deal in multy range of electric Facing Services at right price in right cost, we understand your problem already, we deal in Residential, industrial, Commercial , and Agriculture sector. any thing you want to know about us is here please yourself and give us a chance. Thanks regards Mr. Shubham Insha</p>
        <div class="footer-buttons">
          <a href="privacy.html" class="footer-btn">Privacy</a>
          <a href="team.html" class="footer-btn">Our-Team</a>
          <a href="contact.html" class="footer-btn">Contact</a>
          <a href="brotchoure.html" class="footer-btn">Brotchoure</a>
        </div>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} LivFit.pro. All rights reserved.
        </div>
      </div>
      <!-- Scroll to Top Button -->
      <div class="scroll-to-top" id="scrollToTop">
        <i class="fas fa-arrow-up"></i>
      </div>
    </footer>
  `;
}

// Initialize all site functionality
function initializeSite() {
  // Header scroll effect
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Mobile menu functionality
  window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('active');
    }
  };

  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close sidebar if open
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('active')) {
          toggleSidebar();
        }
      }
    });
  });
}

// Inject components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
  initializeSite();
});

// Slider Functionality
    const images = document.querySelectorAll('.slider-background img');
    const totalImages = images.length;
    let currentIndex = 0;
    let autoSlideInterval;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.remove('active');
      });
      images[index].classList.add('active');
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(nextImage, 5000);
    }

    // Initialize slider
    showImage(currentIndex);
    startAutoSlide();


   // 1. Font Awesome की स्टाइल शीट को पेज में जोड़ें
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(fontAwesomeLink);

    // 2. बटन्स के लिए स्टाइल बनाएं
    const style = document.createElement('style');
    style.textContent = `
      .floating-contact-container {
        position: fixed;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 8px; /* बटन्स के बीच में गैप */
      }

      .contact-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;  /* चौड़ाई */
        height: 45px; /* ऊंचाई */
        color: white;
        text-decoration: none;
        border-radius: 0 15px 15px 0; /* गोल किनारे */
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        font-size: 24px; /* आइकॉन का साइज़ */
      }

      .contact-button:hover {
        transform: translateX(5px); /* होवर पर थोड़ा बाहर आएगा */
        box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.3);
      }
      
      /* WhatsApp बटन का रंग */
      .whatsapp-btn {
        background-color: #25D366;
      }
      .whatsapp-btn:hover {
        background-color: #1DA851;
      }

      /* Call बटन का रंग */
      .call-btn {
        background-color: #007BFF;
      }
      .call-btn:hover {
        background-color: #0056b3;
      }
    `;
    document.head.appendChild(style);

    // 3. बटन्स का कंटेनर बनाएं
    const container = document.createElement('div');
    container.className = 'floating-contact-container';

    // -- अपना फ़ोन नंबर यहाँ डालें (बिना +91 के) --
    const phoneNumber = 'YOUR_PHONE_NUMBER'; 

    // 4. WhatsApp बटन बनाएं
    const whatsappButton = document.createElement('a');
    whatsappButton.href = `https://wa.me/91${8057151677}`;
    whatsappButton.className = 'contact-button whatsapp-btn';
    whatsappButton.target = '_blank'; // नए टैब में खोलने के लिए
    whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>'; // WhatsApp आइकॉन

    // 5. Call बटन बनाएं
    const callButton = document.createElement('a');
    callButton.href = `tel:+91${8057151677}`;
    callButton.className = 'contact-button call-btn';
    callButton.innerHTML = '<i class="fas fa-phone"></i>'; // Call आइकॉन

    // 6. बटन्स को कंटेनर में और फिर पेज में जोड़ें
    container.appendChild(whatsappButton);
    container.appendChild(callButton);
    document.body.appendChild(container);
