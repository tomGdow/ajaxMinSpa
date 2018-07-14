
// Modified from Mozilla Developer Tools (MDN)
//See: https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started

var httpRequest;

function makeRequest(url) {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = insertContents;
  httpRequest.open('GET', url);
  httpRequest.send();
}

function insertContents() {
  document.getElementById('htmlDiv').innerHTML = httpRequest.responseText;
}

document.getElementById("ajaxOne").addEventListener('click', function() {
  makeRequest('./ajaxOne.html');
});

document.getElementById("ajaxTwo").addEventListener('click', function() {
  makeRequest('./ajaxTwo.html');
});

document.addEventListener('DOMContentLoaded', function() {
  makeRequest('./ajaxOne.html');
}, false);




