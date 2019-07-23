"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  // Check if they had the shift key down AND check that they are checking it
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        console.log(lastChecked);
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;


}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));


