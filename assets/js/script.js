document.addEventListener('DOMContentLoaded', () => {
    // Select all sections (modify the selector to match your classes if needed)
    const sections = document.querySelectorAll('[id]');
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Create an IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);

        if (entry.isIntersecting) {
          // Remove active class from all nav-links
          navLinks.forEach(link => link.classList.remove('active', 'underline'));

          // Add active class to the current section's nav-link
          if (activeLink) {
            activeLink.classList.add('active');
            activeLink.style.textDecoration = 'underline'; // Add underline
          }
        } else {
          if (activeLink) {
            activeLink.classList.remove('active');
            activeLink.style.textDecoration = 'none'; // Remove underline
          }
        }
      });
    }, { threshold: 0.7 }); // Adjust threshold as needed
  
    // Observe each section
    sections.forEach(section => {
      observer.observe(section);
    });
});







document.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar-fixed');
    var headerSection = document.querySelector('.header-section');
    var headerSectionHeight = headerSection.offsetHeight;

    // Show the navbar if scrolled past the header section
    if (window.scrollY > headerSectionHeight) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Get all dropdown items with data-target attribute
    var dropdownItems = document.querySelectorAll('.dropdown-item[data-target]');

    dropdownItems.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            var targetId = this.getAttribute('data-target');
            var subMenu = document.getElementById(targetId);
            if (subMenu) {
                subMenu.style.display = 'block'; // Show the sub-menu
            }
        });

        item.addEventListener('mouseout', function () {
            var targetId = this.getAttribute('data-target');
            var subMenu = document.getElementById(targetId);
            if (subMenu) {
                subMenu.style.display = 'none'; // Hide the sub-menu
            }
        });
    });
});


   // Get all the elements with the class 'lightbox-trigger'
   const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
   const lightbox = document.getElementById('lightbox');
   const lightboxImg = document.getElementById('lightbox-img');

   // Add event listener to each image trigger
   lightboxTriggers.forEach(trigger => {
       trigger.addEventListener('click', function() {
           // Set the src of the lightbox image to the clicked image's src
           lightboxImg.src = this.src;
           // Display the lightbox
           lightbox.style.display = 'flex';
       });
   });

   // Function to close the lightbox
   function closeLightbox() {
       lightbox.style.display = 'none';
       lightboxImg.src = ''; // Clear the image src
   }

   // Close the lightbox when clicking outside of the image
   lightbox.addEventListener('click', function(e) {
       if (e.target === lightbox) {
           closeLightbox();
       }
   });

   function openForm() {
document.getElementById('formContainer').style.display = 'block';
document.getElementById('overlay').style.display = 'block'; // Show the overlay
}

function closeForm() {
document.getElementById('formContainer').style.display = 'none';
document.getElementById('overlay').style.display = 'none'; // Hide the overlay
}
   const yearSelect = document.getElementById('year');
    for (let year = 2009; year <= 2032; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
    function showForm() {
        document.getElementById('newFormContainer').style.display = 'block';
        document.getElementById('newOverlay').style.display = 'block';
    }

    function hideForm() {
        document.getElementById('newFormContainer').style.display = 'none';
        document.getElementById('newOverlay').style.display = 'none';
    }
  
                   for (let year = 2009; year <= 2032; year++) {
                       const option = document.createElement('option');
                       option.value = year;
                       option.textContent = year;
                       yearSelect.appendChild(option);
                   }
   
