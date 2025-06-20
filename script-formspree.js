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
    
    // Form submission using Formspree
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData();
            formData.append('name', document.getElementById('name').value);
            formData.append('email', document.getElementById('email').value);
            formData.append('phone', document.getElementById('phone').value || 'Não informado');
            formData.append('company', document.getElementById('company').value || 'Não informado');
            formData.append('message', document.getElementById('message').value);
            formData.append('_replyto', document.getElementById('email').value);
            formData.append('_subject', `Novo contato do site - ${document.getElementById('name').value}`);
            
            try {
                const response = await fetch('https://formspree.io/f/xpzvgqpb', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    alert('Obrigado por entrar em contato! Retornaremos em breve.');
                    contactForm.reset();
                } else {
                    alert('Erro ao enviar mensagem. Tente novamente.');
                }
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao enviar mensagem. Tente novamente.');
            } finally {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});