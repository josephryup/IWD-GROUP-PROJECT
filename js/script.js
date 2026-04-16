/* 
    ICU Zambia Website - Interactivity & Logic
    Primary Responsibility: Interaction Engineer
    Features: Scroll Observers, Counter Animations, Form Handling, UI States
*/

// 1. THIRD-PARTY INITIALIZATION
// Initialize AOS (Animate On Scroll) library with standard duration
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// 2. LOADING STATE MANAGEMENT
// Hide initial loading screen after the page elements are loaded
window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 1000);
        }
    }, 1500); // 1.5s delay for visual impact of the book animation
});

// 3. SCROLL-BASED UI EFFECTS
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    const backToTop = document.getElementById('backToTop');
    
    // Toggle Navbar 'scrolled' class for dark background on scroll
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        // Only remove if it's the home page (other pages might keep it fixed)
        if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
            nav.classList.remove('scrolled');
        }
    }

    // Toggle Visibility of the Back to Top button
    if (window.scrollY > 500) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

// Scroll to top execution function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 4. NAVIGATION & ANCHOR HANDLING
// Smooth scrolling for internal hash links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 5. STATS COUNTER ANIMATION
/**
 * Animates a number from 0 to target
 * @param {string} elementId - ID of the target element
 * @param {number} target - The final number to reach
 * @param {string} suffix - Character to append (e.g. '+', '%')
 */
function animateCounter(elementId, target, suffix = '') {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let current = 0;
    const increment = target / 50; // Reach target in approx 50 frames
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 30);
}

// Intersection Observer to trigger counter animation when section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter('stat-year', 15, '+');
            animateCounter('stat-programs', 25, '+');
            animateCounter('stat-students', 2000, '+');
            animateCounter('stat-grad', 95, '%');
            statsObserver.unobserve(entry.target); // Only animate once
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// 6. FORM & INTERACTIVE COMPONENT HANDLERS
/**
 * Simulated Form Submission
 */
function handleSubmit(event) {
    event.preventDefault();
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // UI Feedback: Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    setTimeout(() => {
        alert('✅ Thank you for your message! Our admissions team will contact you soon.');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        event.target.reset();
    }, 1500);
}

// Add hover effects to cards for touch compatibility
document.querySelectorAll('.program-card, .course-card, .faculty-card').forEach(card => {
    card.addEventListener('mouseenter', () => card.style.zIndex = '10');
    card.addEventListener('mouseleave', () => card.style.zIndex = '1');
});

// 7. CONSOLE LOGGING (Developer Info)
console.log('%c🎓 Welcome to ICU Zambia Website', 'font-size: 20px; color: #003366; font-weight: bold;');
console.log('%cRole-Based Collaboration System Initialized.', 'color: #FF6600;');
