"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// EmailJS configuration
// You'll need to replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_z9qb89f"; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = "template_x5a0kfi"; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = "wmjT9OdhXhCY5jR3F"; // Replace with your public key

// Initialize EmailJS
(function () {
  emailjs.init(EMAILJS_PUBLIC_KEY);
})();

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Contact form submission handler
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(form);
  const fullname = formData.get("fullname");
  const email = formData.get("email");
  const message = formData.get("message");

  // Show loading state
  const originalBtnText = formBtn.innerHTML;
  formBtn.innerHTML =
    '<ion-icon name="hourglass"></ion-icon><span>Sending...</span>';
  formBtn.disabled = true;

  // Hide any previous messages
  hideMessages();

  // Prepare email template parameters
  const templateParams = {
    from_name: fullname,
    from_email: email,
    message: message,
    to_email: "mjariwala98@gmail.com",
  };

  // Send email using EmailJS
  emailjs
    .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        showSuccessMessage();
        form.reset();
        formBtn.setAttribute("disabled", "");
      },
      function (error) {
        console.log("FAILED...", error);
        showErrorMessage();
      }
    )
    .finally(function () {
      // Reset button state
      formBtn.innerHTML = originalBtnText;
      formBtn.disabled = false;
    });
});

// Message display functions
function showSuccessMessage() {
  const messagesDiv = document.getElementById("form-messages");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  messagesDiv.style.display = "block";
  successMessage.style.display = "block";
  errorMessage.style.display = "none";

  // Auto-hide after 5 seconds
  setTimeout(hideMessages, 5000);
}

function showErrorMessage() {
  const messagesDiv = document.getElementById("form-messages");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  messagesDiv.style.display = "block";
  successMessage.style.display = "none";
  errorMessage.style.display = "block";

  // Auto-hide after 8 seconds
  setTimeout(hideMessages, 8000);
}

function hideMessages() {
  const messagesDiv = document.getElementById("form-messages");
  if (messagesDiv) {
    messagesDiv.style.display = "none";
  }
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Animated typewriter effect for title
const animatedTitle = document.querySelector("#animated-title");

if (animatedTitle) {
  const roles = [
    "Frontend Developer",
    "Full Stack Engineer",
    "UI/UX Designer",
    "Problem Solver",
    "AI Engineer",
    "DevOps Specialist",
    "Open Source Contributor",
    "Tech Lead",
    "Backend Developer",
    "Frontend Architect",
    "Product Engineer",
    "Mentor & Speaker",
  ];

  let currentRoleIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typeSpeed = 150;
  let deleteSpeed = 100;
  let pauseDelay = 2000;

  function typeWriter() {
    const currentRole = roles[currentRoleIndex];

    if (isDeleting) {
      // Remove characters
      animatedTitle.textContent = currentRole.substring(
        0,
        currentCharIndex - 1
      );
      currentCharIndex--;

      if (currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        setTimeout(typeWriter, 500);
        return;
      }

      setTimeout(typeWriter, deleteSpeed);
    } else {
      // Add characters
      animatedTitle.textContent = currentRole.substring(
        0,
        currentCharIndex + 1
      );
      currentCharIndex++;

      if (currentCharIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeWriter, pauseDelay);
        return;
      }

      setTimeout(typeWriter, typeSpeed);
    }
  }

  // Start the typewriter effect
  setTimeout(typeWriter, 1000);
}

// Testimonials Slider Functionality - Enhanced Version
class TestimonialsSlider {
  constructor() {
    this.slider = document.getElementById("testimonials-slider");
    this.slides = document.querySelectorAll(".testimonials-slide");
    this.dots = document.querySelectorAll(".dot");
    this.prevBtn = document.getElementById("prev-btn");
    this.nextBtn = document.getElementById("next-btn");

    // Add null checks
    if (!this.slider || this.slides.length === 0) {
      console.warn("Testimonials slider elements not found");
      return;
    }

    this.currentSlide = 0;
    this.totalSlides = this.slides.length; // Now 6 slides
    this.slidesToShow = this.getSlidesToShow();
    this.maxSlides = Math.max(0, this.totalSlides - this.slidesToShow);
    this.isTransitioning = false;
    this.autoSlideInterval = null;
    this.touchStartX = 0;
    this.touchEndX = 0;

    this.init();
  }

  getSlidesToShow() {
    // Always show 1 slide at a time regardless of screen size
    return 1;
  }

  init() {
    if (!this.slider || this.totalSlides === 0) return;

    this.setupSlider();
    this.attachEventListeners();
    this.startAutoSlide();
    this.updateDots();
  }

  setupSlider() {
    // Set initial slide widths - each slide takes full width
    this.slidesToShow = 1; // Always 1 slide
    this.maxSlides = Math.max(0, this.totalSlides - 1); // Max index is totalSlides - 1

    this.slides.forEach((slide) => {
      slide.style.minWidth = "100%"; // Each slide takes full width
    });

    // Set initial position
    this.updateSliderPosition(false);
  }

  updateSliderPosition(animate = true) {
    if (!this.slider) return;

    // Move by full slide width (100%) for each slide
    const translateX = -(this.currentSlide * 100);

    if (animate) {
      this.slider.style.transition =
        "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    } else {
      this.slider.style.transition = "none";
    }

    this.slider.style.transform = `translateX(${translateX}%)`;

    // Reset transition after animation
    if (animate) {
      setTimeout(() => {
        if (this.slider) {
          this.slider.style.transition = "";
        }
      }, 500);
    }
  }

  updateDots() {
    // Update dots to show current slide (simple 1:1 mapping)
    this.dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentSlide);
      // Show only the dots we need (up to totalSlides)
      dot.style.display = index < this.totalSlides ? "block" : "none";
    });
  }

  nextSlide() {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    // Move to next slide, wrap around to first slide after last one
    this.currentSlide =
      this.currentSlide >= this.maxSlides ? 0 : this.currentSlide + 1;
    this.updateSliderPosition();
    this.updateDots();

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  prevSlide() {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    // Move to previous slide, wrap around to last slide from first one
    this.currentSlide =
      this.currentSlide <= 0 ? this.maxSlides : this.currentSlide - 1;
    this.updateSliderPosition();
    this.updateDots();

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  goToSlide(slideIndex) {
    if (this.isTransitioning || slideIndex < 0 || slideIndex > this.maxSlides)
      return;

    this.isTransitioning = true;
    this.currentSlide = slideIndex;
    this.updateSliderPosition();
    this.updateDots();
    this.resetAutoSlide();

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 2000); // Change slide every 4 seconds
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  handleResize() {
    // Since we always show 1 slide, no need to recalculate on resize
    // Just ensure slides maintain 100% width
    this.slides.forEach((slide) => {
      slide.style.minWidth = "100%";
    });

    this.updateSliderPosition(false);
    this.updateDots();
  }

  attachEventListeners() {
    // Navigation buttons - add null checks
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => {
        this.prevSlide();
        this.resetAutoSlide();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => {
        this.nextSlide();
        this.resetAutoSlide();
      });
    }

    // Dot navigation - add null checks
    if (this.dots.length > 0) {
      this.dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          this.goToSlide(index);
        });
      });
    }

    // Auto-slide pause/resume
    if (this.slider) {
      this.slider.addEventListener("mouseenter", () => this.stopAutoSlide());
      this.slider.addEventListener("mouseleave", () => this.startAutoSlide());

      // Touch events for mobile
      this.slider.addEventListener(
        "touchstart",
        (e) => {
          this.stopAutoSlide();
          this.handleTouch(e);
        },
        { passive: true }
      );

      this.slider.addEventListener(
        "touchend",
        (e) => {
          this.handleTouch(e);
          this.resetAutoSlide();
        },
        { passive: true }
      );
    }

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      // Only handle keyboard events when slider is visible
      const sliderVisible = this.slider && this.slider.offsetParent !== null;
      if (sliderVisible) {
        this.handleKeyboard(e);
      }
    });

    // Window resize
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.handleResize();
      }, 250);
    });

    // Visibility change (pause when tab is not active)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.stopAutoSlide();
      } else {
        this.startAutoSlide();
      }
    });
  }

  handleTouch(e) {
    switch (e.type) {
      case "touchstart":
        this.touchStartX = e.touches[0].clientX;
        break;
      case "touchend":
        this.touchEndX = e.changedTouches[0].clientX;
        this.handleTouchEnd();
        break;
    }
  }

  handleTouchEnd() {
    const touchDiff = this.touchStartX - this.touchEndX;
    const minSwipeDistance = 50;

    if (Math.abs(touchDiff) > minSwipeDistance) {
      if (touchDiff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  handleKeyboard(e) {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        this.prevSlide();
        break;
      case "ArrowRight":
        e.preventDefault();
        this.nextSlide();
        break;
      case "Home":
        e.preventDefault();
        this.goToSlide(0);
        break;
      case "End":
        e.preventDefault();
        this.goToSlide(this.maxSlides);
        break;
    }
  }

  destroy() {
    this.stopAutoSlide();
    // Remove event listeners if needed
  }
}

// Initialize the enhanced testimonials slider
let testimonialsSliderInstance = null;

// Blog functionality
class BlogManager {
  constructor() {
    this.allBlogPosts = [...blogPosts, ...additionalBlogPosts];
    this.blogModal = document.querySelector("[data-blog-modal]");
    this.blogModalOverlay = document.querySelector("[data-blog-modal-overlay]");
    this.blogModalCloseBtn = document.querySelector("[data-blog-modal-close]");
    this.blogPostsList = document.getElementById("blog-posts-list");

    this.init();
  }

  init() {
    this.renderBlogPosts();
    this.attachEventListeners();
  }

  renderBlogPosts() {
    if (!this.blogPostsList) return;

    this.blogPostsList.innerHTML = this.allBlogPosts
      .map(
        (post) => `
      <li class="blog-post-item" data-blog-id="${post.id}">
        <a href="#" class="blog-post-link">
          <figure class="blog-banner-box">
            <img
              src="${post.image}"
              alt="${post.title}"
              loading="lazy"
            />
          </figure>

          <div class="blog-content">
            <div class="blog-meta">
              <p class="blog-category">${post.category}</p>
              <span class="dot"></span>
              <time datetime="${post.date}">${this.formatDate(post.date)}</time>
            </div>

            <h3 class="h3 blog-item-title">
              ${post.title}
            </h3>

            <p class="blog-text">
              ${post.excerpt}
            </p>
          </div>
        </a>
      </li>
    `
      )
      .join("");
  }

  attachEventListeners() {
    // Blog post click handlers
    if (this.blogPostsList) {
      this.blogPostsList.addEventListener("click", (e) => {
        e.preventDefault();
        const blogItem = e.target.closest("[data-blog-id]");
        if (blogItem) {
          const blogId = parseInt(blogItem.dataset.blogId);
          this.openBlogModal(blogId);
        }
      });
    }

    // Modal close handlers
    if (this.blogModalCloseBtn) {
      this.blogModalCloseBtn.addEventListener("click", () => {
        this.closeBlogModal();
      });
    }

    if (this.blogModalOverlay) {
      this.blogModalOverlay.addEventListener("click", () => {
        this.closeBlogModal();
      });
    }

    // ESC key handler
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        this.blogModal &&
        this.blogModal.classList.contains("active")
      ) {
        this.closeBlogModal();
      }
    });
  }

  openBlogModal(blogId) {
    const post = this.allBlogPosts.find((p) => p.id === blogId);
    if (!post || !this.blogModal) return;

    // Populate modal content
    const categoryEl = this.blogModal.querySelector(
      "[data-blog-modal-category]"
    );
    const dateEl = this.blogModal.querySelector("[data-blog-modal-date]");
    const titleEl = this.blogModal.querySelector("[data-blog-modal-title]");
    const imageEl = this.blogModal.querySelector("[data-blog-modal-image] img");
    const contentEl = this.blogModal.querySelector("[data-blog-modal-content]");

    if (categoryEl) categoryEl.textContent = post.category;
    if (dateEl) {
      dateEl.textContent = this.formatDate(post.date);
      dateEl.setAttribute("datetime", post.date);
    }
    if (titleEl) titleEl.textContent = post.title;
    if (imageEl) {
      imageEl.src = post.image;
      imageEl.alt = post.title;
    }
    if (contentEl) contentEl.innerHTML = post.content;

    // Show modal
    this.blogModal.classList.add("active");
    this.blogModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  closeBlogModal() {
    if (this.blogModal) {
      this.blogModal.classList.remove("active");
      this.blogModalOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
}

// Project functionality
class ProjectManager {
  constructor() {
    this.projectModal = document.querySelector("[data-project-modal]");
    this.projectModalOverlay = document.querySelector(
      "[data-project-modal-overlay]"
    );
    this.projectModalCloseBtn = document.querySelector(
      "[data-project-modal-close]"
    );
    this.projectItems = document.querySelectorAll(".project-item");

    this.init();
  }

  init() {
    this.attachEventListeners();
  }

  attachEventListeners() {
    // Project item click handlers
    this.projectItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const projectTitle = item.querySelector(".project-title").textContent;
        this.openProjectModal(projectTitle);
      });
    });

    // Modal close handlers
    if (this.projectModalCloseBtn) {
      this.projectModalCloseBtn.addEventListener("click", () => {
        this.closeProjectModal();
      });
    }

    if (this.projectModalOverlay) {
      this.projectModalOverlay.addEventListener("click", () => {
        this.closeProjectModal();
      });
    }

    // ESC key handler
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        this.projectModal &&
        this.projectModal.classList.contains("active")
      ) {
        this.closeProjectModal();
      }
    });
  }

  openProjectModal(projectTitle) {
    const project = projectDetails.find((p) => p.title === projectTitle);
    if (!project || !this.projectModal) return;

    // Populate modal content
    const imageEl = this.projectModal.querySelector(
      "[data-project-modal-image] img"
    );
    const titleEl = this.projectModal.querySelector(
      "[data-project-modal-title]"
    );
    const descriptionEl = this.projectModal.querySelector(
      "[data-project-modal-description]"
    );
    const roleEl = this.projectModal.querySelector("[data-project-modal-role]");
    const teamEl = this.projectModal.querySelector("[data-project-modal-team]");
    const durationEl = this.projectModal.querySelector(
      "[data-project-modal-duration]"
    );
    const categoryEl = this.projectModal.querySelector(
      "[data-project-modal-category]"
    );
    const techSkillsEl = this.projectModal.querySelector(
      "[data-project-modal-tech-skills]"
    );
    const involvementEl = this.projectModal.querySelector(
      "[data-project-modal-involvement]"
    );
    const featuresEl = this.projectModal.querySelector(
      "[data-project-modal-features]"
    );
    const challengesEl = this.projectModal.querySelector(
      "[data-project-modal-challenges]"
    );
    const resultsEl = this.projectModal.querySelector(
      "[data-project-modal-results]"
    );

    if (imageEl) {
      imageEl.src = project.image;
      imageEl.alt = project.title;
    }
    if (titleEl) titleEl.textContent = project.title;
    if (descriptionEl) descriptionEl.textContent = project.description;
    if (roleEl) roleEl.textContent = project.role;
    if (teamEl) teamEl.textContent = project.teamSize;
    if (durationEl) durationEl.textContent = project.projectDuration;
    if (categoryEl) categoryEl.textContent = project.category;
    if (involvementEl) involvementEl.textContent = project.involvement;

    // Populate tech skills
    if (techSkillsEl) {
      techSkillsEl.innerHTML = project.techSkills
        .map((skill) => `<span class="tech-skill-tag">${skill}</span>`)
        .join("");
    }

    // Populate features list
    if (featuresEl) {
      featuresEl.innerHTML = project.features
        .map((feature) => `<li>${feature}</li>`)
        .join("");
    }

    // Populate challenges list
    if (challengesEl) {
      challengesEl.innerHTML = project.challenges
        .map((challenge) => `<li>${challenge}</li>`)
        .join("");
    }

    // Populate results list
    if (resultsEl) {
      resultsEl.innerHTML = project.results
        .map((result) => `<li>${result}</li>`)
        .join("");
    }

    // Show modal
    this.projectModal.classList.add("active");
    this.projectModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  closeProjectModal() {
    if (this.projectModal) {
      this.projectModal.classList.remove("active");
      this.projectModalOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
}

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  testimonialsSliderInstance = new TestimonialsSlider();

  // Initialize blog manager
  if (
    typeof blogPosts !== "undefined" &&
    typeof additionalBlogPosts !== "undefined"
  ) {
    new BlogManager();
  }

  // Initialize project manager
  if (typeof projectDetails !== "undefined") {
    new ProjectManager();
  }
});
