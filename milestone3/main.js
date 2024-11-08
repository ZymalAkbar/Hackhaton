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
    var resume = "\n<h2><b>RESUME</b></h2>\n<h3>PERSONAL INFORMATION</h3>\n<p><b>NAME :</b>".concat(name1, "</p>\n<p><b>EMAIL :</b>").concat(email, "</p>\n<p><b>CONTACT :</b>").concat(contact, "</p>\n\n\n<h3>EDUCATION</h3>\n<p><b>O LEVELS :</b>").concat(olevels, "</p>\n<p><b>A LEVELS :</b>").concat(alevels, "</p>\n<p><b>BACHELORS :</b>").concat(bachelors, "</p>\n\n<h3>SKILLS</h3>\n<p><b>SKILLS :</b>").concat(skills, "</p>\n\n<h3>EXPERIENCE</h3>\n<p><b>EXPERIENCE :</b>").concat(experience, "</p>\n");
    if (dynamicResume) {
        dynamicResume.innerHTML = resume;
    }
    else {
        console.error('The resume element is missing');
    }
});
