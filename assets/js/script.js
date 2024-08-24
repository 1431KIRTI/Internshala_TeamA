document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap dropdowns
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
        return new bootstrap.Dropdown(dropdownToggleEl);
    });

    // Mega Menu Hover Functionality
    document.querySelectorAll('.nav-item.dropdown').forEach(function(dropdown) {
        dropdown.addEventListener('mouseover', function() {
            let dropdownMenu = dropdown.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.add('show');
            }
        });
        dropdown.addEventListener('mouseout', function() {
            let dropdownMenu = dropdown.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('show');
            }
        });
    });

    // Modal Initialization
    var loginModal = new bootstrap.Modal(document.getElementById('loginModal'), {
        keyboard: false
    });
});


document.querySelectorAll('.col-3 .dropdown-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
      let target = this.getAttribute('data-target');
      document.querySelectorAll('.col-9 .sub-menu').forEach(menu => {
        menu.style.display = 'none';
      });
      document.getElementById(target).style.display = 'block';
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
  