document.addEventListener("DOMContentLoaded", function () {
  // Function to update the active menu link
  function updateActiveNavLink() {
    // Get current page URL path
    const path = window.location.pathname;
    // console.log("path", path + "/");

    // Query all nav links
    const navLinks = document.querySelectorAll(".navbar-links a");

    // Remove active class from all links first
    navLinks.forEach((link) => {
      link.classList.remove("active-menu");
    });

    // Add the active class to the link that matches the current URL path
    navLinks.forEach((link) => {
      console.log("this is the link", link.getAttribute("href") + "/");
      console.log("this is the path", path);
      // Check if link href matches current path
      if (
        link.getAttribute("href") === path ||
        link.getAttribute("href") + "/" === path
      ) {
        console.log("this is the link", link.getAttribute("href"), path);
        link.classList.add("active-menu");
      }
    });
  }

  // Call the function to update the active nav link
  updateActiveNavLink();
});

/* jQuery for the navigation animation */

var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
});

/* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
  var $html = $("html");
  var $container = $(".container");
  var $SidebarLi = $(".side-nav ul li");
  let getSidebar = document.querySelector(".navbar-menu");
  let getSidebarUL = document.querySelector(".side-nav ul");
  let getSidebarLinks = document.querySelectorAll(".side-nav a");
  let getSidebarVisibility = document.querySelector(".side-nav");

  if (toggleNavStatus === false) {
    $SidebarLi.addClass("open");
  } else if (toggleNavStatus === true) {
    $SidebarLi.removeClass("open");
  }

  if (toggleNavStatus === false) {
    getSidebarVisibility.style.visibility = "visible";

    getSidebarLinks.forEach(function (item, index) {
      item.style.opacity = "1";
      item.style.visibility = "visible";
    });

    getSidebar.style.width = "60%";
    $html.addClass("clicked");
    $container.addClass("clicked");
    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebarLinks.forEach(function (item, index) {
      item.style.opacity = "0";
      item.style.transitionDelay = "0s";
      item.style.visibility = "hidden";
    });
    getSidebar.style.width = "0";
    $html.removeClass("clicked");
    $container.removeClass("clicked");
    toggleNavStatus = false;
  }
};
