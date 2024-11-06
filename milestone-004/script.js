document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form and resume display elements
    var form = document.getElementById('resume-form');
    var resumeDisplay = document.getElementById('resume-display');
    var profilePicInput = document.getElementById('user-pic');
    var toggleButton = document.getElementById('toggle-skills');
    var skills = document.getElementById('skills');
    toggleButton.addEventListener('click', function () {
        if (skills.style.display === 'none') {
            skills.style.display = 'block';
        }
        else {
            skills.style.display = 'none';
        }
    });
    // Form submission handler
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from refreshing the page
        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var linkedIn = document.getElementById('linkedIn').value;
        var objective = document.getElementById('objective').value;
        var certification = document.getElementById('certification').value;
        var degree = document.getElementById('degree').value;
        var intermediate = document.getElementById('intermediate').value;
        var matriculation = document.getElementById('matriculation').value;
        var company = document.getElementById('company').value;
        var role = document.getElementById('role').value;
        var skills = document.getElementById('skills').value;
        // Handle profile picture upload
        var profilePic = profilePicInput.files ? profilePicInput.files[0] : null;
        var profilePicURL = profilePic ? URL.createObjectURL(profilePic) : '/default-profile.jpg'; // Default image if no file uploaded
        // Generate the resume content dynamically
        var resumeHTML = "\n        <div class=\"left-section\">\n            <img src=\"".concat(profilePicURL, "\" alt=\"profile picture\" class=\"profilePicture\">\n            <section id=\"objective\">\n                <h3 class=\"l\">OBJECTIVE</h3>\n                <p>").concat(objective, "</p>\n            </section>\n            <section id=\"certification\">\n                <h3 class=\"l\">Certifications</h3>\n                <p><strong>").concat(certification, "</strong></p>\n            </section>\n        </div>\n        <div class=\"right-section\">\n            <section id=\"personal-info\">\n                <h3 class=\"h\">Personal Information</h3>\n                <p><strong>Name:</strong> ").concat(name, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <p><strong>Email:</strong><a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n                <p><strong>LinkedIn:</strong><a href=\"").concat(linkedIn, "\" target=\"_blank\">").concat(linkedIn, "</a></p>\n            </section>\n            <section id=\"eduaction\">\n                <h3 class=\"h\">Education</h3>\n                <p><b>Degree:</b> ").concat(degree, "</p>\n                <p><b>Intermediate:</b> ").concat(intermediate, "</p>\n                <p><b>Matriculation:</b> ").concat(matriculation, "</p>\n            </section>\n            <section id=\"skills\">\n                <h3 class=\"h\">Skills</h3>\n                <ul>").concat(skills.split('\n').map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n            </section>\n            <section id=\"work-experience\">\n                <h3 class=\"h\">Work Experience</h3>\n                <p><b>Company:</b> ").concat(company, "</p>\n                <p><b>Job Role:</b> ").concat(role, "</p>\n            </section>\n        </div>\n        ");
        // Insert the generated resume into the display area
        resumeDisplay.innerHTML = resumeHTML;
    });
});
