"use strict";

const d = document;

const $ham_button = d.querySelector(".ham-btn");
const $ham_icon = d.querySelector(".ham-icon");
const $close_icon = d.querySelector(".close-icon");
const $nav_bar = d.querySelector(".nav-bar");
const $logo_white = d.querySelector(".nav-bar .logo-white");
const $nav_menu = d.querySelector(".nav-bar .nav-menu");
const $buttons_features = d.querySelectorAll(".features-menu .feature-option");
const $line_buttons_features = d.querySelectorAll(".features-menu .line-btn");
const $features_articles = d.querySelectorAll(".features-section .f-article");
const $questions_buttons = d.querySelectorAll(".list-questions .question-btn");
const $arrow_icons = d.querySelectorAll(".list-questions .arrow-icon");
const $email = d.querySelector(".email-section .email-input");
const $contact_button = d.querySelector(".contact-btn");
const $input_box = d.querySelector(".email-section .input-box");
const $error_message = d.querySelector(".email-section .error-msg");
const $error_icon = d.querySelector(".email-section .error-icon");

function validarEmail(email) {
  let pattern =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return pattern.test(email) ? true : false;
}

$ham_button.addEventListener("click", () => {
  $ham_icon.classList.toggle("clicked");
  $close_icon.classList.toggle("clicked");
  $nav_bar.classList.toggle("clicked");
  $logo_white.classList.toggle("clicked");
  $nav_menu.classList.toggle("show");
});

$buttons_features.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    Array.from($buttons_features).map((btn) => btn.classList.remove("clicked"));
    Array.from($line_buttons_features).map((line) =>
      line.classList.remove("clicked")
    );
    button.classList.add("clicked");
    $line_buttons_features[index].classList.add("clicked");
    Array.from($features_articles).map((article) => {
      article.classList.remove("show");
    });
    $features_articles[index].classList.add("show");
  });
});

$questions_buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    $arrow_icons[index].classList.toggle("rotate");

    let height = 0;
    let marginBottom = 0;
    let answer = button.nextElementSibling;

    if (answer.clientHeight === 0) {
      height = answer.scrollHeight;
      marginBottom = "16px";
    }
    answer.style.height = height + "px";
    answer.style.marginBottom = marginBottom;
  });
});

$contact_button.addEventListener("click", (e) => {
  console.log("valor de email: ", $email.value);
  console.log(validarEmail($email.value));
  if (!validarEmail($email.value)) {
    $input_box.classList.add("show");
    $error_message.classList.add("show");
    $error_icon.classList.add("show");
  } else {
    $input_box.classList.remove("show");
    $error_message.classList.remove("show");
    $error_icon.classList.remove("show");
  }
  e.preventDefault();
});

$buttons_features[0].classList.add("clicked");
$line_buttons_features[0].classList.add("clicked");
$features_articles[0].classList.add("show");
