jQuery(document).ready(function () {
  // Parallax Effect
  function parallax(event) {
      this.querySelectorAll(".layer").forEach((layer) => {
          let speed = layer.getAttribute("data-speed");
          layer.style.transform = `translate(${(event.clientX * speed) / 1000}px, ${(event.clientY * speed) / 1000}px)`;
      });
  }
  document.addEventListener("mousemove", parallax);


  $('.materialboxed').materialbox();
  $('.scrollspy').scrollSpy();
  $('.sidenav').sidenav();

  // GSAP 
  gsap.to(".canvas-text-wrapper h1 span", {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
  });

  gsap.to(".canvas-text-wrapper h1 span", {
      backgroundPosition: "200% 0",
      duration: 3,
      ease: "linear",
      repeat: -1
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.progress-content').forEach(progressContent => {
      const progressBar = progressContent.querySelector('.progress-bar');
      const progressDot = progressContent.querySelector('.progress-dot');
      const progressValue = progressBar.getAttribute('data-progress');

      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: progressContent,
              start: "top 80%",
              toggleActions: "play none none none"
          }
      });

      tl.to(progressBar, {
          width: progressValue + "%",
          duration: 1.5
      }).to(progressDot, {
          left: progressValue + "%",
          duration: 1.5
      }, "<");
  });


  emailjs.init("wrTXEF7P5WOSn9a1Z");

  const validator = new JustValidate('#contact-form');
  
  validator
      .addField('#name', [
          { rule: 'required', errorMessage: 'Name is required' }
      ])
      .addField('#email', [
          { rule: 'required', errorMessage: 'Email is required' },
          { rule: 'email', errorMessage: 'Invalid email format' }
      ])
      .addField('#message', [
          { rule: 'required', errorMessage: 'Message cannot be empty' }
      ])
      .onSuccess(() => {
          const formElement = document.getElementById('contact-form');
          const nameValue = document.getElementById('name').value.trim();
          const emailValue = document.getElementById('email').value.trim();
          const messageValue = document.getElementById('message').value.trim();
  
          
          console.log(" Name:", nameValue);
          console.log("Email:", emailValue);
          console.log(" Message:", messageValue);
  
          if (!nameValue || !emailValue || !messageValue) {
              alert('❌ Please fill in all fields correctly.');
              return;
          }
  
          const messageBox = document.querySelector('.success-message');
          messageBox.innerHTML = '✅ Message sent successfully!';
          messageBox.classList.remove('hidden');

          const formData = new FormData(formElement);
          formData.forEach((value, key) => {
              console.log(`📩 ${key}: ${value}`);
          });
  
          
          emailjs.sendForm('service_41upjwb', 'template_0y43o1s', '#contact-form')
              .then((response) => {
                  console.log("✅ Email успешно отправлен:", response);
                  formElement.reset();
              })
              .catch((error) => {
                  console.error('❌ Ошибка при отправке:', error);
                  alert('❌ Error: ' + error.text);
              });
      });
  
  
  
  

      
  

  // AOS
  AOS.init({
    disable: 'mobile'  
    });

  // Scroll To Top Button
  const scrollToTopButton = document.getElementById("scrollToTop");
  window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
          scrollToTopButton.classList.add("visible");
      } else {
          scrollToTopButton.classList.remove("visible");
      }
  });

  scrollToTopButton.addEventListener("click", () => {
      gsap.to(window, { duration: 1, scrollTo: 0 });
  });
});
