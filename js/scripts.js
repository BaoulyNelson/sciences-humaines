
        // Check for dark mode preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
            document.getElementById('mobile-theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        const toggleDarkMode = () => {
            const html = document.documentElement;
            const btn = document.getElementById('mobile-theme-toggle');
      
            html.classList.toggle('dark');
      
            const isDark = html.classList.contains('dark');
            btn.innerHTML = `<i class="fas fa-${isDark ? 'sun' : 'moon'}"></i>`;
          };
      
          document.getElementById('mobile-theme-toggle').addEventListener('click', toggleDarkMode);
        
        document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
        document.getElementById('mobile-theme-toggle').addEventListener('click', toggleDarkMode);
        
        // Listen for dark mode changes at the system level
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (event.matches) {
                document.documentElement.classList.add('dark');
                document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
                document.getElementById('mobile-theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                document.documentElement.classList.remove('dark');
                document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
                document.getElementById('mobile-theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
        
        // Mobile menu toggle
        document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                // Close mobile menu if open
                document.getElementById('mobile-menu').classList.add('hidden');
                
                // Scroll to target
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update active link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelectorAll('.mobile-nav-link').forEach(link => {
                    link.classList.remove('font-bold');
                });
                
                if (this.classList.contains('nav-link')) {
                    this.classList.add('active');
                } else if (this.classList.contains('mobile-nav-link')) {
                    this.classList.add('font-bold');
                }
            });
        });
        
        // Update active link on scroll
        window.addEventListener('scroll', function() {
            let current = '';
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
            
            mobileNavLinks.forEach(link => {
                link.classList.remove('font-bold');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('font-bold');
                }
            });
        });
        
        // Form submissions
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Cette fonctionnalité serait connectée à un backend dans un site réel. Merci de votre intérêt !');
                form.reset();
            });
        });
        
        // Animate elements on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.card, h2, h3, p');
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animate-fade-in');
                }
            });
        };
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);