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
  