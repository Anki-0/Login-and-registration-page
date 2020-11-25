"use strict";

var sign_up_btn = document.getElementById('sign-up-btn');
var sign_in_btn = document.getElementById('sign-in-btn');
var container = document.querySelector('.container');
sign_up_btn.addEventListener('click', function () {
  container.classList.add('sign-up-mode');
});
sign_in_btn.addEventListener('click', function () {
  container.classList.remove('sign-up-mode');
});