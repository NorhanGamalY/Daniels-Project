const navbar = document.getElementById("navbar");
const aboutSection = document.getElementById("about");

window.addEventListener("scroll", () => {
  const aboutTop = aboutSection.getBoundingClientRect().top;

  if (aboutTop <= 0) {
    navbar.style.position = "fixed";
    navbar.classList.add("scrolled");
  } else {
    navbar.style.position = "absolute";
    navbar.classList.remove("scrolled");
  }
});
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section, header');
    const scrollPos = window.scrollY + 150; 

    sections.forEach(section => {
      const id = section.getAttribute('id');
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        document.querySelectorAll('#navbar .nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 700) { // عدلي الرقم حسب بداية السيكشن التاني
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  const counters = document.querySelectorAll('.counter');
    
      const startCounter = (el) => {
        const target = +el.textContent.trim();
        let count = 0;
        const speed = 15;
    
        const increment = () => {
          if (count < target) {
            count += Math.ceil(target / 100);
            if (count > target) count = target;
            el.textContent = count;
            setTimeout(increment, speed);
          } else {
            el.textContent = target;
          }
        };
        increment();
      };
    
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            startCounter(entry.target);
          }
        });
      }, { threshold: 0.5 });
    
      counters.forEach(counter => observer.observe(counter));
      const myObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, {
        threshold: 0.5
      });
    
      document.querySelectorAll('#about .progress-bar').forEach(el => {
        myObserver.observe(el);
      });
      var typed = new Typed('#element', {
        strings: ['larry Daniels','Developer', 'Designer'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true,
       } );
          const lightbox = GLightbox({
            selector: '.glightbox'
          });
