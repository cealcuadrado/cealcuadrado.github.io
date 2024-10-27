var date = new Date();
var currentYearEl = document.getElementById('currentYear');
currentYearEl.innerHTML = date.getFullYear();
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));