document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        document.querySelector('.navbar-toggler').click();
                    }
                }
            }
        });
    });
    
    // Form submission with mailto fallback
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const company = document.getElementById('company').value;
            const message = document.getElementById('message').value;
            
            // Create email content
            const subject = `Novo contato do site - ${name}`;
            const body = `Novo contato recebido pelo site da Calibratech:

Nome: ${name}
Email: ${email}
Telefone: ${phone || 'Não informado'}
Empresa: ${company || 'Não informado'}

Mensagem:
${message}`;
            
            // Create mailto link
            const mailtoLink = `mailto:calibratechce@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message and reset form
            alert('Seu cliente de email será aberto para enviar a mensagem.');
            contactForm.reset();
        });
    }
});