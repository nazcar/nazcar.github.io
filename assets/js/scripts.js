// Parallax effect for hero background
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroBg = document.querySelector('.hero-bg');
            const navbar = document.getElementById('navbar');
            
            // Parallax effect - zoom out and move up
            const scale = 1 + (scrolled * 0.0005);
            const translateY = scrolled * 0.5;
            heroBg.style.transform = `scale(${scale}) translateY(${translateY}px)`;
            
            // Show/hide navbar
            if (scrolled > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        document.querySelectorAll('.section-title, .skill-card, .project-card').forEach(el => {
            observer.observe(el);
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple form validation
            if (name && email && message) {
                // Simulate form submission
                const submitBtn = this.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = 'Message Sent!';
                    this.reset();
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 2000);
                }, 1500);
            }
        });

        // Add floating animation to skill icons
        const skillIcons = document.querySelectorAll('.skill-icon');
        skillIcons.forEach((icon, index) => {
            setTimeout(() => {
                icon.classList.add('floating');
            }, index * 200);
        });

        // Cursor effect
        document.addEventListener('mousemove', (e) => {
            const cursor = document.createElement('div');
            cursor.style.cssText = `
                position: fixed;
                top: ${e.clientY}px;
                left: ${e.clientX}px;
                width: 10px;
                height: 10px;
                background: rgba(102, 102, 102, 0.3);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                animation: cursorFade 0.5s ease-out forwards;
            `;
            
            document.body.appendChild(cursor);
            
            setTimeout(() => {
                cursor.remove();
            }, 500);
        });

        // Add cursor fade animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes cursorFade {
                0% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0); }
            }
        `;
        document.head.appendChild(style);