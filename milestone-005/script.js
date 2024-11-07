document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeDisplay = document.getElementById('resume-display');
    var profilePicInput = document.getElementById('user-pic');
    var toggleButton = document.getElementById('toggle-skills');
    var skillsTextArea = document.getElementById('skills');
    var urlDisplay = document.getElementById('share-url');
    var addWorkExperienceButton = document.getElementById('add-work-experience');
    var workExperienceContainer = document.getElementById('work-experience-container');
    // Toggle Skills
    toggleButton.addEventListener('click', function () {
        if (skillsTextArea.style.display === 'none') {
            skillsTextArea.style.display = 'block';
        }
        else {
            skillsTextArea.style.display = 'none';
        }
    });
    // Add new work experience
    addWorkExperienceButton.addEventListener('click', function () {
        var newWorkExperienceEntry = document.createElement('div');
        newWorkExperienceEntry.classList.add('work-experience-entry');
        newWorkExperienceEntry.innerHTML = "\n            <label for=\"company\">Company:</label>\n            <input type=\"text\" class=\"company\" placeholder=\"Enter your company name\" required>\n\n            <label for=\"role\">Job Role:</label>\n            <input type=\"text\" class=\"role\" placeholder=\"Enter your job role\" required>\n        ";
        workExperienceContainer.appendChild(newWorkExperienceEntry);
    });
    // Handle form submission
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
        var skills = document.getElementById('skills').value;
        var username = document.getElementById('name').value;
        var profilePic = profilePicInput.files ? profilePicInput.files[0] : null;
        var profilePicURL = profilePic ? URL.createObjectURL(profilePic) : '/default-profile.jpg';
        // Get work experience entries
        var workExperienceEntries = [];
        var workExperienceElements = document.querySelectorAll('.work-experience-entry');
        workExperienceElements.forEach(function (entry) {
            var company = entry.querySelector('.company').value;
            var role = entry.querySelector('.role').value;
            workExperienceEntries.push("<p><b>Company:</b> ".concat(company, "</p><p><b>Job Role:</b> ").concat(role, "</p>"));
        });
        // Generate the resume content dynamically
        var resumeHTML = "\n        <div class=\"left-section\">\n            <img src=\"".concat(profilePicURL, "\" alt=\"profile picture\" class=\"profilePicture\">\n            <section id=\"objective\">\n                <h3 class=\"l\" onclick=\"editSection('objective')\">OBJECTIVE</h3>\n                <p id=\"objective-content\">").concat(objective, "</p>\n            </section>\n            <section id=\"certification\">\n                <h3 class=\"l\" onclick=\"editSection('certification')\">CERTIFICATIONS</h3>\n                <p id=\"certification-content\">").concat(certification, "</p>\n            </section>\n        </div>\n        <div class=\"right-section\">\n            <section id=\"personal-info\">\n                <h3 class=\"h\" onclick=\"editSection('personal-info')\">PERSONAL INFORMATION</h3>\n                <p><strong>Name:</strong> ").concat(name, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <p><strong>Email:</strong><a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n                <p><strong>LinkedIn:</strong><a href=\"").concat(linkedIn, "\" target=\"_blank\">").concat(linkedIn, "</a></p>\n            </section>\n            <section id=\"education\">\n                <h3 class=\"h\" onclick=\"editSection('education')\">EDUCATION</h3>\n                <p id=\"education-content\"><b>Degree:</b> ").concat(degree, "</p>\n                <p id=\"education-content\"><b>Intermediate:</b> ").concat(intermediate, "</p>\n                <p id=\"education-content\"><b>Matriculation:</b> ").concat(matriculation, "</p>\n            </section>\n            <section id=\"skills\">\n                <h3 class=\"h\" onclick=\"editSection('skills')\">SKILLS</h3>\n                <ul>").concat(skills.split('\n').map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n            </section>\n            <section id=\"work-experience\">\n                <h3 class=\"h\" onclick=\"editSection('work-experience')\">WORK EXPERIENCE</h3>\n                ").concat(workExperienceEntries.join(''), "\n            </section>\n        </div>\n        ");
        resumeDisplay.innerHTML = resumeHTML;
        // Create a unique URL with the username as a query parameter
        var resumeURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
        // Display the URL to the user
        urlDisplay.innerHTML = " \n            <p>Your resume is ready! Share it with others using this link:</p>\n            <input type=\"text\" value=\"".concat(resumeURL, "\" id=\"resume-url\" readonly>\n            <button onclick=\"copyToClipboard()\">Copy URL</button>\n        ");
    });
});
// Copy URL to clipboard
function copyToClipboard() {
    var urlInput = document.getElementById('resume-url');
    urlInput.select();
    urlInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('URL copied to clipboard!');
}
;
var downloadPDF = document.getElementById("Download-btn");
downloadPDF === null || downloadPDF === void 0 ? void 0 : downloadPDF.addEventListener("click", function () {
    var allOtherElements = document.body.querySelectorAll(':not(#resume-form)');
    allOtherElements.forEach(function (el) {
        el.style.visibility = 'visible';
    });
    window.print();
    allOtherElements.forEach(function (el) {
        el.style.visibility = 'visible';
    });
});
