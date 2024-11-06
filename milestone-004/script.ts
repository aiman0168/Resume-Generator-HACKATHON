document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
    const profilePicInput = document.getElementById('user-pic') as HTMLInputElement;

    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsTextArea = document.getElementById('skills') as HTMLElement;

    // Toggle Skills
    toggleButton.addEventListener('click', () => {
        if (skillsTextArea.style.display === 'none') {
            skillsTextArea.style.display = 'block';
        } else {
            skillsTextArea.style.display = 'none';
        }
    });

    
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
        const company = (document.getElementById('company') as HTMLInputElement).value;
        const role = (document.getElementById('role') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        
        const profilePic = profilePicInput.files ? profilePicInput.files[0] : null;
        const profilePicURL = profilePic ? URL.createObjectURL(profilePic) : '/default-profile.jpg';

        // Generate the resume content dynamically
        const resumeHTML = `
        <div class="left-section">
            <img src="${profilePicURL}" alt="profile picture" class="profilePicture">
            <section id="objective">
                <h3 class="l" onclick="editSection('objective')">OBJECTIVE</h3>
                <p id="objective-content">${objective}</p>
            </section>
            <section id="certification">
                <h3 class="l" onclick="editSection('certification')">Certifications</h3>
                <p id="certification-content"><strong>${certification}</strong></p>
            </section>
        </div>
        <div class="right-section">
            <section id="personal-info">
                <h3 class="h" onclick="editSection('personal-info')">Personal Information</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong><a href="mailto:${email}">${email}</a></p>
                <p><strong>LinkedIn:</strong><a href="${linkedIn}" target="_blank">${linkedIn}</a></p>
            </section>
            <section id="education">
                <h3 class="h" onclick="editSection('education')">Education</h3>
                <p id="education-content"><b>Degree:</b> ${degree}</p>
                <p id="education-content"><b>Intermediate:</b> ${intermediate}</p>
                <p id="education-content"><b>Matriculation:</b> ${matriculation}</p>
            </section>
            <section id="skills">
                <h3 class="h" onclick="editSection('skills')">Skills</h3>
                <ul>${skills.split('\n').map(skill => `<li>${skill}</li>`).join('')}</ul>
            </section>
            <section id="work-experience">
                <h3 class="h" onclick="editSection('work-experience')">Work Experience</h3>
                <p id="work-experience-content"><b>Company:</b> ${company}</p>
                <p id="work-experience-content"><b>Job Role:</b> ${role}</p>
            </section>
        </div>
        `;

        
        resumeDisplay.innerHTML = resumeHTML;
    });
});


function editSection(sectionId: string): void {
    const sectionContent = document.getElementById(`${sectionId}-content`) as HTMLElement;
    
    if (!sectionContent) return;

    
    sectionContent.contentEditable = 'true';
    sectionContent.classList.add('editable');
    sectionContent.focus();

    sectionContent.addEventListener('blur', () => {
        sectionContent.contentEditable = 'false';
        sectionContent.classList.remove('editable');
    });
};
