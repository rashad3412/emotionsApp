"use strict";

/////// Document Query Selectors ////////

const emotionsBtn = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".hello");
const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const overlay3 = document.querySelector(".overlay3");
const btnCloseModal = document.querySelector(".close-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay2.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < emotionsBtn.length; i++)
  emotionsBtn[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
