var form = document.getElementById('form');
var dynamicResume = document.getElementById('dynamic');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name1 = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var olevels = document.getElementById('olevels').value;
    var alevels = document.getElementById('alevels').value;
    var bachelors = document.getElementById('bachelors').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var resume = "\n<h2><b>RESUME</b></h2>\n<h3>PERSONAL INFORMATION</h3>\n<p><b>NAME : </b><span contenteditable=\"true\">".concat(name1, "</span></p>\n<p><b>EMAIL : </b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>CONTACT : </b><span contenteditable=\"true\">").concat(contact, "</span></p>\n\n<h3>EDUCATION</h3>\n<p><b>O LEVELS : </b><span contenteditable=\"true\">").concat(olevels, "</span></p>\n<p><b>A LEVELS : </b><span contenteditable=\"true\">").concat(alevels, "</span></p>\n<p><b>BACHELORS : </b><span contenteditable=\"true\">").concat(bachelors, "</span></p>\n\n<h3>SKILLS</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n\n<h3>EXPERIENCE</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n");
    if (dynamicResume) {
        dynamicResume.innerHTML = resume;
    }
    else {
        console.error('The resume element is missing');
    }
});
