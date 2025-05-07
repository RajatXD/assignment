// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close menu when clicking on a menu item
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Add to Cart Animation
const addToCartButtons = document.querySelectorAll('.btn-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the product info
        const productCard = this.closest('.phone-card');
        const productName = productCard.querySelector('h3').textContent;
        
        // Show alert for simplicity (could be improved with a cart dropdown)
        alert(`${productName} added to cart!`);
        
        // Button animation
        this.textContent = 'Added!';
        this.style.backgroundColor = '#28a745';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.style.backgroundColor = '';
        }, 2000);
    });
});

// Header Shadow on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Add animation for phone icons on hover
document.addEventListener('DOMContentLoaded', function() {
    const phoneIcons = document.querySelectorAll('.phone-icon');
    
    phoneIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            const iconElement = icon.querySelector('i');
            iconElement.classList.add('fa-beat');
            
            setTimeout(() => {
                iconElement.classList.remove('fa-beat');
            }, 1000);
        });
    });
    
    // Add animation to phone cards when they come into view
    const phoneCards = document.querySelectorAll('.phone-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    phoneCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}); 