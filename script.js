// ==========================================
// THEME MODE SYSTEM
// ==========================================

let currentTheme = 'default'; // default, rainy, sunny
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('weatherTheme') || 'default';
    setTheme(savedTheme);
}

// Set theme
function setTheme(theme) {
    body.classList.remove('rainy-mode', 'sunny-mode');
    
    if (theme === 'rainy') {
        body.classList.add('rainy-mode');
        currentTheme = 'rainy';
        stopSunnyMode();
        startRainyMode();
    } else if (theme === 'sunny') {
        body.classList.add('sunny-mode');
        currentTheme = 'sunny';
        stopRainyMode();
        startSunnyMode();
    } else {
        currentTheme = 'default';
        stopRainyMode();
        stopSunnyMode();
    }
    
    localStorage.setItem('weatherTheme', currentTheme);
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    if (currentTheme === 'default') {
        setTheme('sunny');
    } else if (currentTheme === 'sunny') {
        setTheme('rainy');
    } else {
        setTheme('default');
    }
});

// ==========================================
// CLOUDS SYSTEM
// ==========================================

const cloudsContainer = document.getElementById('clouds-container');
let cloudAnimations = [];

function createCloud(x, y, size, speed) {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.left = x + 'px';
    cloud.style.top = y + 'px';
    cloud.style.width = size + 'px';
    cloud.style.height = size * 0.6 + 'px';
    cloudsContainer.appendChild(cloud);
    
    return { element: cloud, x, speed };
}

function initClouds() {
    // Create 5-7 clouds
    const numClouds = 5 + Math.floor(Math.random() * 3);
    for (let i = 0; i < numClouds; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * 200;
        const size = 80 + Math.random() * 60;
        const speed = 0.1 + Math.random() * 0.3;
        cloudAnimations.push(createCloud(x, y, size, speed));
    }
}

function animateClouds() {
    if (currentTheme === 'sunny') {
        cloudAnimations.forEach(cloud => {
            cloud.x += cloud.speed;
            if (cloud.x > window.innerWidth + 150) {
                cloud.x = -150;
            }
            cloud.element.style.left = cloud.x + 'px';
        });
        requestAnimationFrame(animateClouds);
    }
}

// ==========================================
// RAIN SYSTEM
// ==========================================

const rainContainer = document.getElementById('rain-container');
let rainInterval;

function createRaindrop() {
    const drop = document.createElement('div');
    drop.className = 'raindrop';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.animationDuration = (0.5 + Math.random() * 0.5) + 's';
    drop.style.animationDelay = Math.random() * 0.5 + 's';
    rainContainer.appendChild(drop);
    
    setTimeout(() => {
        drop.remove();
    }, 1500);
}

function startRain() {
    // Create initial batch
    for (let i = 0; i < 50; i++) {
        setTimeout(() => createRaindrop(), i * 20);
    }
    
    // Continue creating raindrops
    rainInterval = setInterval(() => {
        for (let i = 0; i < 3; i++) {
            createRaindrop();
        }
    }, 100);
}

function stopRain() {
    if (rainInterval) {
        clearInterval(rainInterval);
        rainInterval = null;
    }
}

// ==========================================
// NATURE FOOTER (SUNNY MODE)
// ==========================================

const natureFooter = document.getElementById('nature-footer');
let butterflies = [];
let bunnies = [];

function createFlowers() {
    const flowersContainer = document.querySelector('.flowers-container');
    flowersContainer.innerHTML = '';
    
    const numFlowers = Math.floor(window.innerWidth / 80);
    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = (i * 80 + Math.random() * 60 + 10) + 'px';
        
        // Random flower colors
        const colors = ['#ff69b4', '#ff1493', '#ffa500', '#ff6347', '#9370db', '#ff69b4'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Create 5 petals
        for (let j = 0; j < 5; j++) {
            const petal = document.createElement('div');
            petal.className = 'flower-petal';
            petal.style.setProperty('--petal-color', color);
            petal.style.setProperty('--rotation', (j * 72) + 'deg');
            flower.appendChild(petal);
        }
        
        flowersContainer.appendChild(flower);
    }
}

function createBunny(x) {
    const bunniesContainer = document.querySelector('.bunnies-container');
    const bunny = document.createElement('div');
    bunny.className = 'bunny';
    bunny.style.left = x + 'px';
    
    // Add random animation delay for variety
    bunny.style.animationDelay = (Math.random() * 3) + 's';
    
    bunny.innerHTML = `
        <div class="bunny-body">
            <div class="bunny-ear left"></div>
            <div class="bunny-ear right"></div>
            <div class="bunny-eye left"></div>
            <div class="bunny-eye right"></div>
            <div class="bunny-nose"></div>
            <div class="bunny-tail"></div>
        </div>
    `;
    
    bunniesContainer.appendChild(bunny);
    
    return {
        element: bunny,
        x: x,
        targetX: x,
        speed: 2
    };
}

function createButterfly(x, y) {
    const butterfliesContainer = document.querySelector('.butterflies-container');
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.style.left = x + 'px';
    butterfly.style.bottom = y + 'px';
    
    butterfly.innerHTML = `
        <div class="butterfly-wing left"></div>
        <div class="butterfly-wing right"></div>
        <div class="butterfly-body"></div>
    `;
    
    butterfliesContainer.appendChild(butterfly);
    
    return {
        element: butterfly,
        x: x,
        y: y,
        targetX: x,
        targetY: y
    };
}

function createAmbientButterfly(x, y) {
    const butterfliesContainer = document.querySelector('.butterflies-container');
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly ambient-butterfly';
    butterfly.style.left = x + 'px';
    butterfly.style.bottom = y + 'px';
    butterfly.style.animationDelay = (Math.random() * 4) + 's';
    
    // Random colors for variety
    const colors = [
        'linear-gradient(45deg, #FF6B6B 0%, #FFD93D 100%)',
        'linear-gradient(45deg, #4ECDC4 0%, #44A08D 100%)',
        'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(45deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    butterfly.innerHTML = `
        <div class="butterfly-wing left" style="background: ${color}"></div>
        <div class="butterfly-wing right" style="background: ${color}"></div>
        <div class="butterfly-body"></div>
    `;
    
    butterfliesContainer.appendChild(butterfly);
}

function initNatureFooter() {
    createFlowers();
    
    // Create 4-5 bunnies
    const numBunnies = 4 + Math.floor(Math.random() * 2);
    for (let i = 0; i < numBunnies; i++) {
        const x = (i + 1) * (window.innerWidth / (numBunnies + 1)) + (Math.random() * 40 - 20);
        bunnies.push(createBunny(x));
    }
    
    // Create 2-3 cursor-following butterflies
    const numFollowButterflies = 2 + Math.floor(Math.random() * 2);
    for (let i = 0; i < numFollowButterflies; i++) {
        const x = Math.random() * window.innerWidth;
        const y = 50 + Math.random() * 100;
        butterflies.push(createButterfly(x, y));
    }
    
    // Create 4-6 ambient butterflies that float around
    const numAmbientButterflies = 4 + Math.floor(Math.random() * 3);
    for (let i = 0; i < numAmbientButterflies; i++) {
        const x = Math.random() * window.innerWidth;
        const y = 15 + Math.random() * 20;
        createAmbientButterfly(x, y);
    }
}

function animateNatureElements() {
    if (currentTheme !== 'sunny') return;
    
    // Animate butterflies to follow cursor
    butterflies.forEach(butterfly => {
        const dx = butterfly.targetX - butterfly.x;
        const dy = butterfly.targetY - butterfly.y;
        
        butterfly.x += dx * 0.02;
        butterfly.y += dy * 0.02;
        
        butterfly.element.style.left = butterfly.x + 'px';
        butterfly.element.style.bottom = butterfly.y + 'px';
    });
    
    // Animate bunnies
    bunnies.forEach(bunny => {
        const dx = bunny.targetX - bunny.x;
        bunny.x += dx * 0.05;
        bunny.element.style.left = bunny.x + 'px';
        
        // Flip bunny based on direction
        if (dx < -0.5) {
            bunny.element.style.transform = 'scaleX(-1)';
        } else if (dx > 0.5) {
            bunny.element.style.transform = 'scaleX(1)';
        }
    });
    
    requestAnimationFrame(animateNatureElements);
}

// ==========================================
// CURSOR EFFECTS
// ==========================================

let mouseX = 0;
let mouseY = 0;
let cursorTrailTimeout;
let lastCursorTime = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update cursor position for custom cursor
    body.style.setProperty('--cursor-x', mouseX + 'px');
    body.style.setProperty('--cursor-y', mouseY + 'px');
    
    // Water drop trail for rainy mode
    if (currentTheme === 'rainy') {
        const now = Date.now();
        if (now - lastCursorTime > 50) {
            createCursorDrop(mouseX, mouseY);
            lastCursorTime = now;
        }
    }
    
    // Update butterfly targets in sunny mode
    if (currentTheme === 'sunny') {
        butterflies.forEach(butterfly => {
            butterfly.targetX = mouseX;
            butterfly.targetY = window.innerHeight - mouseY - 40;
        });
        
        // Make bunnies run away from cursor
        const cursorBottom = window.innerHeight - mouseY;
        if (cursorBottom < 100) {
            bunnies.forEach(bunny => {
                const distance = Math.abs(bunny.x - mouseX);
                if (distance < 150) {
                    const direction = bunny.x < mouseX ? -1 : 1;
                    bunny.targetX = bunny.x + direction * 200;
                    bunny.targetX = Math.max(50, Math.min(window.innerWidth - 50, bunny.targetX));
                    
                    // Make bunny hop
                    bunny.element.classList.add('hopping');
                    setTimeout(() => {
                        bunny.element.classList.remove('hopping');
                    }, 500);
                }
            });
        }
    }
});

function createCursorDrop(x, y) {
    const drop = document.createElement('div');
    drop.className = 'cursor-drop';
    drop.style.left = x + 'px';
    drop.style.top = y + 'px';
    document.getElementById('cursor-trail').appendChild(drop);
    
    setTimeout(() => {
        drop.remove();
    }, 1000);
}

// ==========================================
// MODE STARTERS/STOPPERS
// ==========================================

function startRainyMode() {
    initClouds();
    startRain();
}

function stopRainyMode() {
    stopRain();
    cloudsContainer.innerHTML = '';
    cloudAnimations = [];
}

function startSunnyMode() {
    initClouds();
    animateClouds();
    initNatureFooter();
    animateNatureElements();
}

function stopSunnyMode() {
    cloudsContainer.innerHTML = '';
    cloudAnimations = [];
    butterflies = [];
    bunnies = [];
    document.querySelector('.flowers-container').innerHTML = '';
    document.querySelector('.bunnies-container').innerHTML = '';
    document.querySelector('.butterflies-container').innerHTML = '';
}

// ==========================================
// NAVIGATION FUNCTIONALITY
// ==========================================

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Add scrolled class to navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// ANIMATED COUNTERS FOR STATS
// ==========================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-count'));
            animateCounter(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// ==========================================
// PUBLICATIONS FILTER
// ==========================================

const filterButtons = document.querySelectorAll('.filter-btn');
const publicationItems = document.querySelectorAll('.publication-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        publicationItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'grid';
                item.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

const animateOnScroll = document.querySelectorAll('.research-card, .publication-item, .hobby-card');
animateOnScroll.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    scrollObserver.observe(element);
});

// ==========================================
// FORM SUBMISSION
// ==========================================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submission functionality needs to be implemented. Please use the email link to contact directly.');
    });
}

// ==========================================
// PARALLAX EFFECT FOR HERO BACKGROUND
// ==========================================

window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.scrollY;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ==========================================
// LAST UPDATED DATE
// ==========================================

const lastUpdatedElement = document.getElementById('last-updated');
if (lastUpdatedElement) {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastUpdatedElement.textContent = today.toLocaleDateString('en-US', options);
}

// ==========================================
// LAZY LOADING IMAGES
// ==========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// COPY EMAIL TO CLIPBOARD
// ==========================================

function setupCopyEmail() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            const email = link.getAttribute('href').replace('mailto:', '');
            
            navigator.clipboard.writeText(email).then(() => {
                const tooltip = document.createElement('div');
                tooltip.textContent = 'Email copied!';
                tooltip.style.cssText = `
                    position: fixed;
                    top: ${e.clientY - 40}px;
                    left: ${e.clientX}px;
                    background: var(--primary-color);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 5px;
                    font-size: 0.9rem;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease-out;
                `;
                
                document.body.appendChild(tooltip);
                
                setTimeout(() => {
                    tooltip.style.animation = 'fadeOut 0.3s ease-out';
                    setTimeout(() => tooltip.remove(), 300);
                }, 2000);
            });
        });
    });
}

setupCopyEmail();

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log('%c👋 Welcome to my research portfolio!', 'color: #1a5490; font-size: 16px; font-weight: bold;');
console.log('%cInterested in collaboration? Feel free to reach out!', 'color: #4a4a4a; font-size: 12px;');

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedScroll = debounce(() => {
    // Any expensive scroll operations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 100;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
});

document.querySelectorAll('.research-card, .hobby-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const link = card.querySelector('a');
            if (link) link.click();
        }
    });
});

// ==========================================
// WINDOW RESIZE HANDLER
// ==========================================

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (currentTheme === 'sunny') {
            // Reinitialize nature footer for new window size
            stopSunnyMode();
            startSunnyMode();
        }
    }, 250);
});

// ==========================================
// INITIALIZE ON LOAD
// ==========================================

window.addEventListener('load', () => {
    initTheme();
});
