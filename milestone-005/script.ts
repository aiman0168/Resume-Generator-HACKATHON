document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
    const profilePicInput = document.getElementById('user-pic') as HTMLInputElement;
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsTextArea = document.getElementById('skills') as HTMLElement;
    const urlDisplay = document.getElementById('share-url') as HTMLDivElement;
    const addWorkExperienceButton = document.getElementById('add-work-experience') as HTMLButtonElement;
    const workExperienceContainer = document.getElementById('work-experience-container') as HTMLDivElement;

    // Toggle Skills
    toggleButton.addEventListener('click', () => {
        if (skillsTextArea.style.display === 'none') {
            skillsTextArea.style.display = 'block';
        } else {
            skillsTextArea.style.display = 'none';
        }
    });

    // Add new work experience
    addWorkExperienceButton.addEventListener('click', () => {
        const newWorkExperienceEntry = document.createElement('div');
        newWorkExperienceEntry.classList.add('work-experience-entry');
        
        newWorkExperienceEntry.innerHTML = `
            <label for="company">Company:</label>
            <input type="text" class="company" placeholder="Enter your company name" required>

            <label for="role">Job Role:</label>
            <input type="text" class="role" placeholder="Enter your job role" required>
        `;
        
        workExperienceContainer.appendChild(newWorkExperienceEntry);
    });

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const linkedIn = (document.getElementById('linkedIn') as HTMLInputElement).value;
        const objective = (document.getElementById('objective') as HTMLInputElement).value;
        const certification = (document.getElementById('certification') as HTMLInputElement).value;
        const degree = (document.getElementById('degree') as HTMLInputElement).value;
        const intermediate = (document.getElementById('intermediate') as HTMLInputElement).value;
        const matriculation = (document.getElementById('matriculation') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
        const username = (document.getElementById('name') as HTMLInputElement).value;

        const profilePic = profilePicInput.files ? profilePicInput.files[0] : null;
        const profilePicURL = profilePic ? URL.createObjectURL(profilePic) : '/default-profile.jpg';

        // Get work experience entries
        const workExperienceEntries: string[] = [];
        const workExperienceElements = document.querySelectorAll('.work-experience-entry');
        
        workExperienceElements.forEach(entry => {
            const company = (entry.querySelector('.company') as HTMLInputElement).value;
            const role = (entry.querySelector('.role') as HTMLInputElement).value;
            workExperienceEntries.push(`<p><b>Company:</b> ${company}</p><p><b>Job Role:</b> ${role}</p>`);
        });

        // Generate the resume content dynamically
        const resumeHTML = `
        <div class="left-section">
            <img src="${profilePicURL}" alt="profile picture" class="profilePicture">
            <section id="objective">
                <h3 class="l" onclick="editSection('objective')">OBJECTIVE</h3>
                <p id="objective-content">${objective}</p>
            </section>
            <section id="certification">
                <h3 class="l" onclick="editSection('certification')">CERTIFICATIONS</h3>
                <p id="certification-content">${certification}</p>
            </section>
        </div>
        <div class="right-section">
            <section id="personal-info">
                <h3 class="h" onclick="editSection('personal-info')">PERSONAL INFORMATION</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong><a href="mailto:${email}">${email}</a></p>
                <p><strong>LinkedIn:</strong><a href="${linkedIn}" target="_blank">${linkedIn}</a></p>
            </section>
            <section id="education">
                <h3 class="h" onclick="editSection('education')">EDUCATION</h3>
                <p id="education-content"><b>Degree:</b> ${degree}</p>
                <p id="education-content"><b>Intermediate:</b> ${intermediate}</p>
                <p id="education-content"><b>Matriculation:</b> ${matriculation}</p>
            </section>
            <section id="skills">
                <h3 class="h" onclick="editSection('skills')">SKILLS</h3>
                <ul>${skills.split('\n').map(skill => `<li>${skill}</li>`).join('')}</ul>
            </section>
            <section id="work-experience">
                <h3 class="h" onclick="editSection('work-experience')">WORK EXPERIENCE</h3>
                ${workExperienceEntries.join('')}
            </section>
        </div>
        `;

        resumeDisplay.innerHTML = resumeHTML;

        // Create a unique URL with the username as a query parameter
        const resumeURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

        // Display the URL to the user
        urlDisplay.innerHTML = ` 
            <p>Your resume is ready! Share it with others using this link:</p>
            <input type="text" value="${resumeURL}" id="resume-url" readonly>
            <button onclick="copyToClipboard()">Copy URL</button>
        `;
    });
});

// Copy URL to clipboard
function copyToClipboard() {
    const urlInput = document.getElementById('resume-url') as HTMLInputElement;
    urlInput.select();
    urlInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('URL copied to clipboard!');
};

let downloadPDF = document.getElementById("Download-btn");

downloadPDF?.addEventListener("click", () => {
    const allOtherElements = document.body.querySelectorAll(':not(#resume-form)');
    allOtherElements.forEach((el) => {
        (el as HTMLElement).style.visibility = 'visible';
    });

    window.print();

    allOtherElements.forEach((el) => {
        (el as HTMLElement).style.visibility = 'visible';
    });
});