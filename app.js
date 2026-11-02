        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('nav');
        const navLinks = document.querySelectorAll('.nav-links li');

        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');
            
          
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });

      
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            });
        });


        
        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.slide');
            const content = document.querySelector('.slider-content');
            const punchlines = [
                {
                    h1: "Pure Hygiene, Pure Care",
                    p: "Premium antibacterial soaps for complete protection"
                },
                {
                    h1: "Pure Protection",
                    p: "Advanced antibacterial care for your skin's safety"
                },
                {
                    h1: "Clean Confidence",
                    p: "Feel fresh, safe, and protected all day long"
                },
                {
                    h1: "Safe Touch",
                    p: "Gentle cleansing with powerful germ defense"
                },
                {
                    h1: "True Purity",
                    p: "Natural ingredients for unmatched hygiene"
                },
                {
                    h1: "Guard Your Glow",
                    p: "Keep your skin radiant and germ-free"
                },
                {
                    h1: "Stay Fresh",
                    p: "Daily antibacterial protection that lasts"
                },
                {
                    h1: "Care in Every Drop",
                    p: "Effective cleansing with a tender touch"
                }
            ];
            let currentSlide = 0;
            const directions = ['left', 'right', 'up', 'down'];
            let currentDirection = 0;

            function changeSlide() {
              
                slides[currentSlide].classList.remove('active');
                slides[currentSlide].classList.add(`exit-${directions[currentDirection]}`);
             
                content.classList.remove('active-content');
                
             
                currentSlide = (currentSlide + 1) % slides.length;
                currentDirection = (currentDirection + 1) % directions.length;
                
            
                setTimeout(() => {
                    content.querySelector('h1').textContent = punchlines[currentSlide].h1;
                    content.querySelector('p').textContent = punchlines[currentSlide].p;
                    content.classList.add('active-content');
                }, 500);
                
               
                setTimeout(() => {
                    slides.forEach(slide => {
                        slide.classList.remove('exit-left', 'exit-right', 'exit-up', 'exit-down');
                    });
                    slides[currentSlide].classList.add('active');
                }, 1000);
            }

            
            setInterval(changeSlide, 5000);
        });



        //LOGOS SCROLLING
        document.addEventListener('DOMContentLoaded', function() {
            const logoSlide = document.querySelector('.logos-slide');
            
            logoSlide.addEventListener('mouseenter', function() {
                this.style.animationPlayState = 'paused';
            });
            
            logoSlide.addEventListener('mouseleave', function() {
                this.style.animationPlayState = 'running';
            });

        
            function adjustAnimationSpeed() {
                const screenWidth = window.innerWidth;
                const duration = screenWidth < 768 ? 35 : 25;
                logoSlide.style.animationDuration = `${duration}s`;
            }

        
            adjustAnimationSpeed();
            
          
            window.addEventListener('resize', adjustAnimationSpeed);
        });


        //ABOUT US

         document.addEventListener('DOMContentLoaded', function() {
            const benefitCards = document.querySelectorAll('.benefit-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                    }
                });
            }, { threshold: 0.1 });

            benefitCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease';
                observer.observe(card);
            });

            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach(item => {
                item.addEventListener('mouseenter', () => {
                    item.querySelector('.gallery-overlay').style.transform = 'translateY(0)';
                });
                item.addEventListener('mouseleave', () => {
                    item.querySelector('.gallery-overlay').style.transform = 'translateY(100%)';
                });
            });
        });


        //CONTACT US
        document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.getElementById('contactForm');
            const formMessage = document.getElementById('formMessage');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
            
                formMessage.textContent = "Thank you for your message! We'll get back to you soon.";
                formMessage.classList.remove('error');
                formMessage.classList.add('success');
             
                setTimeout(() => {
                    contactForm.reset();
                    formMessage.classList.remove('success');
                    formMessage.textContent = '';
                }, 5000);
            });
            
        
            const formGroups = document.querySelectorAll('.form-group');
            
            formGroups.forEach((group, index) => {
                group.style.opacity = '0';
                group.style.transform = 'translateY(20px)';
                group.style.transition = `all 0.5s ease ${index * 0.1}s`;
                
                setTimeout(() => {
                    group.style.opacity = '1';
                    group.style.transform = 'translateY(0)';
                }, 100);
            });
        });

        //FOOTER

         document.getElementById('year').textContent = new Date().getFullYear();
        
         document.querySelectorAll('.footer-links a').forEach(anchor => {
             anchor.addEventListener('click', function(e) {
                 e.preventDefault();
                 document.querySelector(this.getAttribute('href')).scrollIntoView({
                     behavior: 'smooth'
                 });
             });
         });



         //OUR BRANDS
        function toggleCategory(button) {
            const category = button.parentElement;
            category.classList.toggle('active');
            
            document.querySelectorAll('.main-category').forEach(item => {
                if (item !== category && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
        }
        
        function showBrands(category, subcategory) {
          
            document.querySelectorAll('.brands-content').forEach(content => {
                content.classList.remove('active');
            });
            
        
            document.querySelector('.empty-state').style.display = 'none';
            
         
            document.querySelectorAll('.subcategory-item').forEach(item => {
                item.classList.remove('active');
            });
            event.target.parentElement.classList.add('active');
       
            const contentId = `${category}-${subcategory}`;
            const content = document.getElementById(contentId);
            if (content) {
                content.classList.add('active');
            }
        }
        
       
        document.addEventListener('DOMContentLoaded', function() {
        
            const firstCategory = document.querySelector('.main-category');
            if (firstCategory) {
                firstCategory.classList.add('active');
            }
            
           
            const firstSubcategory = document.querySelector('.subcategory-item');
            if (firstSubcategory) {
                firstSubcategory.classList.add('active');
                showBrands('antibacterial', 'facial');
            }
        });
