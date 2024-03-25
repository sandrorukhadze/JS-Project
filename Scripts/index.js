// Accardion
"use strict";

import { acceptCookies } from "./cookies";
import { declineCookies } from "./cookies";
import { registration } from "./registration&validation";
import { nextSlide } from "./slider";
import { prevSlide } from "./slider";
import { addTask } from "./todolist";

acceptCookies();
declineCookies();
registration();
nextSlide();
prevSlide();
addTask();

const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    accordionBtns.forEach((item) => {
      if (item !== btn) {
        item.nextElementSibling.classList.remove("active");
      }
    });
  });
});

const filterInput = document.getElementById("filterInput");

filterInput.addEventListener("keyup", () => {
  const filterValue = filterInput.value.toUpperCase();
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const text = item.firstElementChild.textContent.toUpperCase();
    if (text.indexOf(filterValue) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

// Accardion


// axios / async / await

async function getUser() {
  try {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    const users = response.data.data;
    const userListDiv = document.getElementById("userList");
    users.forEach((user) => {
      const firstName = user.first_name;
      const lastName = user.last_name;
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `<p>${firstName} ${lastName}</p>`;
      userListDiv.appendChild(userDiv);
    });
  } catch (error) {
    console.error(error);
  }
}
getUser();

// axios / async / await

// scroll to top

let mybutton = document.getElementById("scrollBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// scroll to top

// Show or hide the scroll to top button based on scroll position
window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
