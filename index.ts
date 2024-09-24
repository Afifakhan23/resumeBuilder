// Define the types for the resume data
interface ResumeData {
  name: string;
  designation1:string;
  designation2:string;
  designation3:string;
  email: string;
  phone: string;
  linkedin:string;
  description:string;
  degree: string;
  institution: string;
  year1: string;
  year2: string;
  jobTitle: string;
  company: string;
  duration: string;
  skills: string[];
  imageUrl: string;
}

function generateResume(): void {
  // Get the form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
  const description = (document.getElementById('description') as HTMLInputElement).value;
  const degree = (document.getElementById('degree') as HTMLInputElement).value;
  const institution = (document.getElementById('institution') as HTMLInputElement).value;
  const year1 = (document.getElementById('year1') as HTMLSelectElement).value;
  const designation1 = (document.getElementById('designation1') as HTMLInputElement).value;
  const designation2 = (document.getElementById('designation2') as HTMLInputElement).value;
  const designation3 = (document.getElementById('designation3') as HTMLInputElement).value;
  const year2 = (document.getElementById('year2') as HTMLSelectElement).value;
  const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
  const company = (document.getElementById('company') as HTMLInputElement).value;
  const duration = (document.getElementById('duration') as HTMLSelectElement).value;
  const skill1 = (document.getElementById('skill1') as HTMLInputElement).value;
  const skill2 = (document.getElementById('skill2') as HTMLInputElement).value;
  const skill3 = (document.getElementById('skill3') as HTMLInputElement).value;

  const imageInput = document.getElementById('usrimg') as HTMLInputElement;
  let imageUrl = '';
  if (imageInput.files && imageInput.files[0]) {
    imageUrl = URL.createObjectURL(imageInput.files[0]); // Create a URL for the uploaded image
  }
  // Collect the resume data
  const resumeData: ResumeData = {
      name,
      designation1,
      designation2,
      designation3,
      email,
      phone,
      linkedin,
      description,
      degree,
      institution,
      year1,
      year2,
      jobTitle,
      company,
      duration,
      skills: [skill1, skill2, skill3],
      imageUrl,
  };

  // Display the resume
  displayResume(resumeData);

  // Hide the form
  const container = document.querySelector('.container') as HTMLElement;
  if (container) {
    container.style.display = 'none';  // Hide the entire container
  }

  // Show the resume display
  const resumeDisplay = document.getElementById('resume-display') as HTMLElement;
  resumeDisplay.style.display = 'block';
}

function displayResume(data: ResumeData): void {
  const resumeDisplay = document.getElementById('resume-display') as HTMLElement;

  resumeDisplay.innerHTML = `
  
      <div class="container2">
        <header>
            <div class="info">
                <h1 id="name-field">${data.name}</h1>
                <h2>${data.designation1} | ${data.designation2} | ${data.designation3}</h2>
            </div>
            <div class="image">
              <img src="${data.imageUrl}" alt="User Image">
            </div>
        </header>

        <section class="profile">
          <h3>Profile</h3>
          <p>${data.description}</p>
        </section>

        <section class="skills">
          <h3>Skills</h3>
          <ul>
            <li>${data.skills[0]}</li>
            <li>${data.skills[1]}</li>
            <li>${data.skills[2]}</li>
          </ul>
        </section>

        
        <section class="institution">
          <h3>Education</h3>
          <div class="experience-item">
            <h4>${data.institution}</h4>
            <p>${data.degree} - ${data.year1} - ${data.year2}</p>
          </div>
        </section>


        <section class="experience">
          <h3>Work Experience</h3>
          <div class="experience-item">
            <h4>${data.jobTitle}</h4>
            <p>${data.company} - ${data.duration}</p>
          </div>
        </section>

        <section class="contact">
          <h3>Contact</h3>
          <ul>
            <li>Email: ${data.email}</li>
            <li>Phone: ${data.phone}</li>
            <li>LinkedIn: <a href="${data.linkedin}" target="_blank">${data.linkedin}</a></li>
          </ul>
        </section>
        <div class="btns">
          <button type="submit" class="btn" onclick="event.preventDefault(); editResume()">Edit Resume</button>
        <button type="submit" class="btn" onclick="event.preventDefault(); downloadResume()">Download as Pdf</button>
        </div>
  </div>
  `;

}

// write a function for Editable Resume
function editResume(){
  const container = document.querySelector('.container') as HTMLElement;
  if (container) {
    container.style.display = 'block';  // show the entire container
  }

  // hide the resume display
  const resumeDisplay = document.getElementById('resume-display') as HTMLElement;
  resumeDisplay.style.display = 'none';

}
//Download as pdf function
function downloadResume(){
  window.print()
}