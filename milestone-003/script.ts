document.addEventListener('DOMContentLoaded', () => {
    // Get references to the form and resume display elements
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
    const profilePicInput = document.getElementById('user-pic') as HTMLInputElement;

    // Form submission handler
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

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

        // Handle profile picture upload
        const profilePic = profilePicInput.files ? profilePicInput.files[0] : null;
        const profilePicURL = profilePic ? URL.createObjectURL(profilePic) : '/default-profile.jpg'; // Default image if no file uploaded

        // Generate the resume content dynamically
        const resumeHTML = `
        <div class="left-section">
            <img src="${profilePicURL}" alt="profile picture" class="profilePicture">
            <section id="objective">
                <h3 class="l">OBJECTIVE</h3>
                <p>${objective}</p>
            </section>
            <section id="certification">
                <h3 class="l">Certifications</h3>
                <p><strong>${certification}</strong></p>
            </section>
        </div>
        <div class="right-section">
            <section id="personal-info">
                <h3 class="h">Personal Information</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong><a href="mailto:${email}">${email}</a></p>
                <p><strong>LinkedIn:</strong><a href="${linkedIn}" target="_blank">${linkedIn}</a></p>
            </section>
            <section id="eduaction">
                <h3 class="h">Education</h3>
                <p><b>Degree:</b> ${degree}</p>
                <p><b>Intermediate:</b> ${intermediate}</p>
                <p><b>Matriculation:</b> ${matriculation}</p>
            </section>
            <section id="skills">
                <h3 class="h">Skills</h3>
                <ul>${skills.split('\n').map(skill => `<li>${skill}</li>`).join('')}</ul>
            </section>
            <section id="work-experience">
                <h3 class="h">Work Experience</h3>
                <p><b>Company:</b> ${company}</p>
                <p><b>Job Role:</b> ${role}</p>
            </section>
        </div>
        `;

        // Insert the generated resume into the display area
        resumeDisplay.innerHTML = resumeHTML;
    });
});