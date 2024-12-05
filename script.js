// Add smooth reveal on scroll
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

// Add this JavaScript for active state handling
document.addEventListener('DOMContentLoaded', () => {
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Add click handler for smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const signupForm = document.querySelector('.signup-form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your signup logic here
        console.log('Form submitted');
        
        // Optional: Close modal after submission
        const modal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
        modal.hide();
    });
});

/* Modern Footer Styles */
.footer {
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    padding: 4rem 0 1rem 0;
    margin-top: 4rem;
    color: white;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
}

.footer-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.footer-section h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(45deg, #66ccff, #0080ff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.footer-section p {
    color: #888;
    line-height: 1.6;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-icon:hover {
    background: linear-gradient(45deg, #66ccff, #0080ff);
    transform: translateY(-3px);
}

.footer-links {
    list-style: none;
    padding: 0;
}

.footer-links li {
    margin-bottom: 0.8rem;
}

.footer-links a {
    color: #888;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: #66ccff;
}

.contact-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    background: linear-gradient(45deg, #66ccff, #0080ff);
    border-radius: 25px;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    width: fit-content;
}

.contact-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 204, 255, 0.3);
}

.footer-bottom {
    margin-top: 3rem;
    padding-top: 1.5rem;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
    color: #666;
    font-size: 0.9rem;
}

/* Animation for social icons */
@keyframes socialBounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
}

.social-icon:hover i {
    animation: socialBounce 0.5s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .social-links {
        justify-content: center;
    }

    .contact-btn {
        margin: 0 auto;
    }
}
