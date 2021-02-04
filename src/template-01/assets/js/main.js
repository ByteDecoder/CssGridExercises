/**
 *
 */
function toggleMobileNavigation() {
  var element = document.getElementById("mobile-navigation");

  if (element.classList.contains("mobile-navigation__open")) {
    element.classList.remove("mobile-navigation__open");
  } else {
    element.classList.add("mobile-navigation__open");
  }
}

/**
 *
 */
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed.");

  var closeButton = document.getElementById("close-button");
  var menuButton = document.getElementById("menu-button");

  closeButton.addEventListener("click", function () {
    toggleMobileNavigation();
  });

  menuButton.addEventListener("click", function () {
    toggleMobileNavigation();
  });
});

console.log("We are Legion...");
