document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeDisplay = document.getElementById('resume-display');
    var profilePicInput = document.getElementById('user-pic');
    var toggleButton = document.getElementById('toggle-skills');
    var skillsTextArea = document.getElementById('skills');
    // Toggle Skills
    toggleButton.addEventListener('click', function () {
        if (skillsTextArea.style.display === 'none') {
            skillsTextArea.style.display = 'block';
        }
        else {
            skillsTextArea.style.display = 'none';
        }
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
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
        var profilePic = profilePicInput.files ? profilePicInput.files[0] : null;
        var profilePicURL = profilePic ? URL.createObjectURL(profilePic) : '/default-profile.jpg';
        // Generate the resume content dynamically
        var resumeHTML = "\n        <div class=\"left-section\">\n            <img src=\"".concat(profilePicURL, "\" alt=\"profile picture\" class=\"profilePicture\">\n            <section id=\"objective\">\n                <h3 class=\"l\" onclick=\"editSection('objective')\">OBJECTIVE</h3>\n                <p id=\"objective-content\">").concat(objective, "</p>\n            </section>\n            <section id=\"certification\">\n                <h3 class=\"l\" onclick=\"editSection('certification')\">Certifications</h3>\n                <p id=\"certification-content\"><strong>").concat(certification, "</strong></p>\n            </section>\n        </div>\n        <div class=\"right-section\">\n            <section id=\"personal-info\">\n                <h3 class=\"h\" onclick=\"editSection('personal-info')\">Personal Information</h3>\n                <p><strong>Name:</strong> ").concat(name, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <p><strong>Email:</strong><a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n                <p><strong>LinkedIn:</strong><a href=\"").concat(linkedIn, "\" target=\"_blank\">").concat(linkedIn, "</a></p>\n            </section>\n            <section id=\"education\">\n                <h3 class=\"h\" onclick=\"editSection('education')\">Education</h3>\n                <p id=\"education-content\"><b>Degree:</b> ").concat(degree, "</p>\n                <p id=\"education-content\"><b>Intermediate:</b> ").concat(intermediate, "</p>\n                <p id=\"education-content\"><b>Matriculation:</b> ").concat(matriculation, "</p>\n            </section>\n            <section id=\"skills\">\n                <h3 class=\"h\" onclick=\"editSection('skills')\">Skills</h3>\n                <ul>").concat(skills.split('\n').map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n            </section>\n            <section id=\"work-experience\">\n                <h3 class=\"h\" onclick=\"editSection('work-experience')\">Work Experience</h3>\n                <p id=\"work-experience-content\"><b>Company:</b> ").concat(company, "</p>\n                <p id=\"work-experience-content\"><b>Job Role:</b> ").concat(role, "</p>\n            </section>\n        </div>\n        ");
        resumeDisplay.innerHTML = resumeHTML;
    });
});
function editSection(sectionId) {
    var sectionContent = document.getElementById("".concat(sectionId, "-content"));
    if (!sectionContent)
        return;
    sectionContent.contentEditable = 'true';
    sectionContent.classList.add('editable');
    sectionContent.focus();
    sectionContent.addEventListener('blur', function () {
        sectionContent.contentEditable = 'false';
        sectionContent.classList.remove('editable');
    });
};
