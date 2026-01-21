
        // Audio control for contact section
        const contactSection = document.getElementById('contact');
        const audio = document.getElementById('ringSound');

        contactSection.addEventListener('mouseenter', function() {
            audio.play().catch(err => console.log('Audio play failed:', err));
        });

        contactSection.addEventListener('mouseleave', function() {
            audio.pause();
            audio.currentTime = 0;
        });
