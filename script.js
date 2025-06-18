document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQ Accordion
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all accordion items
            accordionItems.forEach(accItem => {
                accItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't already open
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Testimonial Slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;
    
    if (totalTestimonials > 1) {
        // Hide all testimonials except the first one
        for (let i = 1; i < totalTestimonials; i++) {
            testimonials[i].style.display = 'none';
        }
        
        // Previous testimonial button
        document.getElementById('prev-testimonial').addEventListener('click', () => {
            testimonials[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
            testimonials[currentTestimonial].style.display = 'block';
        });
        
        // Next testimonial button
        document.getElementById('next-testimonial').addEventListener('click', () => {
            testimonials[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            testimonials[currentTestimonial].style.display = 'block';
        });
    }
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                company: document.getElementById('company').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the data to your backend
            // For now, we'll just show an alert
            alert('Obrigado por entrar em contato! Retornaremos em breve.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Sticky header effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        }
    });
});