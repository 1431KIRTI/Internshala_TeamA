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