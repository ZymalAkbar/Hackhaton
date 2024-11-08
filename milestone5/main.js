// Get references to the form and display area
var form = document.getElementById('form');
var resumeDisplayElement = document.getElementById('dynamic');
var shareableLinkContainer = document.getElementById('shareable-resume');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var olevels = document.getElementById('olevels').value;
    var alevels = document.getElementById('alevels').value;
    var bachelors = document.getElementById('bachelors').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        olevels: olevels,
        alevels: alevels,
        bachelors: bachelors,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
    var resumeHTML = "\n<h2>Editable Resume</h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Contact:</b> <span contenteditable=\"true\">").concat(contact, "</span></p>\n<h3>Education</h3>\n<p><b>O Levels : </b> <span contenteditable=\"true\">").concat(olevels, "</span></p>\n<p><b>A Levels :</b> <span contenteditable=\"true\">").concat(alevels, "</span></p>\n<p><b>Bachelors :</b> <span contenteditable=\"true\">").concat(bachelors, "</span></p>\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('contact').value = resumeData.contact;
            document.getElementById('olevels').value = resumeData.olevels;
            document.getElementById('alevels').value = resumeData.alevels;
            document.getElementById('bachelors').value = resumeData.bachelors;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
