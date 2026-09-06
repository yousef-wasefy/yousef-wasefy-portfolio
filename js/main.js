/* main.js — minimal interactivity for the portfolio.
   Mobile navigation menu: open/close via the hamburger button, and close
   on link tap, Escape, an outside click, or a resize up to desktop.
   The open/closed state lives in the button's aria-expanded attribute,
   which CSS uses to show or hide the menu on small screens. */

(function () {
  "use strict";

  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".nav__menu");

  if (!toggle || !menu) {
    return;
  }

  function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
  }

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  // Open / close the menu when the hamburger button is pressed.
  toggle.addEventListener("click", function () {
    setMenu(!isOpen());
  });

  // Close the menu after a navigation link is tapped.
  menu.addEventListener("click", function (event) {
    if (event.target.closest(".nav__link") && isOpen()) {
      setMenu(false);
    }
  });

  // Close the menu when clicking or tapping outside the navbar.
  document.addEventListener("click", function (event) {
    if (isOpen() && !event.target.closest(".nav")) {
      setMenu(false);
    }
  });

  // Close the menu with the Escape key and return focus to the button.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isOpen()) {
      setMenu(false);
      toggle.focus();
    }
  });

  // If the viewport grows to the desktop layout, reset the menu state.
  var desktop = window.matchMedia("(min-width: 769px)");
  desktop.addEventListener("change", function (event) {
    if (event.matches && isOpen()) {
      setMenu(false);
    }
  });
})();
