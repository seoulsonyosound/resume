import './App.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        className="photo"
        src="./src/images/tjpic.png"
        alt="Theeanna Jether Alejos profile pic"
      />
      <div className="name">Theeanna Jether Alejos</div>

      <h4 className="section-title">Contact</h4>
      <p><strong>Address</strong><br />Pescadores Candaba, Pampanga</p>
      <p><strong>Phone</strong><br />+63 929 666 0384</p>
      <p><strong>Email</strong><br />tjdalejos.student@ua.edu.ph</p>
      <p><strong>WWW</strong><br /><a href="https://www.linkedin.com/in/tjdalejos">LinkedIn Profile</a></p>

      <h4 className="section-title">Skills</h4>
      <div className="skills">
        <ul>
          <li>Extensive experience in graphic design, specializing in branding, logo creation, and print collateral.</li>
          <li>Proficient in UI/UX design, including user research, wireframing, and creating interactive prototypes.</li>
          <li>Extensive experience in frontend development, with expertise in HTML, CSS, and modern JavaScript frameworks.</li>
          <li>Proven ability to collaborate with cross-functional teams to translate design concepts into functional and visually appealing digital solutions.</li>
        </ul>
      </div>
    </aside>
  );
}

function Summary() {
  return (
    <p className="summary">
      A versatile and passionate Graphic Designer and UI/UX / Frontend
      Developer with a proven track record of creating intuitive,
      user-centered digital experiences. Dedicated to crafting engaging
      interfaces that not only look great but also provide a seamless and
      effortless user experience. Expertise spans the entire project
      lifecycle, from initial concept and wireframing to pixel-perfect
      design and clean, responsive code.
    </p>
  );
}

function Education() {
  return (
    <>
      <hr className="section-divider" />
      <h2 className="section">Education</h2>
      <hr className="section-divider" />

      <div className="edu-list">
        <div className="edu-item">
          <div className="edu-year"></div>
          <div className="edu-content">
            <h4>Summa Cum Laude - BS Information Technology</h4>
            <div className="school">University of the Assumption</div>
          </div>
        </div>

        <div className="edu-item">
          <div className="edu-year"></div>
          <div className="edu-content">
            <h4>With High Honors - Senior High School</h4>
            <div className="school">University of the Assumption</div>
          </div>
        </div>

        <div className="edu-item">
          <div className="edu-year"></div>
          <div className="edu-content">
            <h4>Class Valedictorian - Junior High School, Grade School</h4>
            <div className="school">St. Andrew's Archdiocesan School of Candaba Inc.</div><br />
          </div>
        </div>
      </div>
    </>
  );
}

function Job({ date, title, company, responsibilities }) {
  return (
    <div className="job">
      <div className="job-date">{date}</div>
      <div className="job-content">
        <h4>{title}</h4>
        <div className="company">{company}</div>
        <ul>
          {responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  const jobs = [
    {
      date: "2034 - Current",
      title: "UI/UX Developer",
      company: "Digital Innovations Inc.",
      responsibilities: [
        "Lead the design and development of responsive web interfaces, from low-fidelity wireframes to high-fidelity mockups, ensuring a cohesive user experience.",
        "Developed pixel-perfect UIs using HTML, CSS, and modern JavaScript frameworks, resulting in a 15% increase in site speed.",
        "Conducted user research and A/B testing to inform design decisions, which improved key user metrics and reduced bounce rates by 10%."
      ]
    },
    {
      date: "2029 - 2034",
      title: "Senior Frontend Engineer",
      company: "Creative Solutions Co.",
      responsibilities: [
        "Rebuilt the company's marketing website, implementing a new design system that streamlined development and ensured brand consistency.",
        "Optimized website performance and accessibility, achieving a 90+ score on Google Lighthouse and improving user experience for all devices.",
        "Translated complex design files from tools like Figma and Sketch into clean, scalable, and maintainable code."
      ]
    },
    {
      date: "2027 - 2029",
      title: "Graphic Designer",
      company: "Visionary Studio",
      responsibilities: [
        "Designed and developed branding materials, including logos, social media graphics, and print collateral, maintaining a consistent visual identity.",
        "Managed the full project lifecycle from initial concept to final production, ensuring all designs met client specifications and brand guidelines.",
        "Collaborated with clients to understand their needs and vision, translating their ideas into compelling"
      ]
    }
  ];

  return (
    <>
      <hr className="section-divider" />
      <h2 className="section">Experience</h2>
      <hr className="section-divider" />

      <div className="experience-list">
        {jobs.map((job, i) => (
          <Job
            key={i}
            date={job.date}
            title={job.title}
            company={job.company}
            responsibilities={job.responsibilities}
          />
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <Sidebar />
      <main className="main">
        <Summary />
        <Education />
        <Experience />
      </main>
    </div>
  );
}

export default App;