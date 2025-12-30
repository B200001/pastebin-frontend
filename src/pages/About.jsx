

export default function About() {
  return (
    <div className="about">
      <div className="aboutCard">
        <h1>About Me</h1>

        <p className="intro">
          My name is <strong>Bhuwan Jain</strong>, a Full Stack Developer with a
          strong foundation in backend systems, modern JavaScript, and scalable
          web applications.
        </p>

        <p>
          I have hands-on experience building end-to-end products using
          <strong> React, Node.js, Express, MongoDB, and TypeScript</strong>.
          I focus on writing clean, maintainable code and designing systems that
          are reliable and easy to extend.
        </p>

        <p>
          I have worked on real-world projects involving API design, database
          modeling, authentication flows, and performance optimization.
          I am particularly interested in backend engineering, system design,
          and developer tooling.
        </p>

        <div className="resumeSection">
          <h2>Resume</h2>

          <iframe
            src="https://docs.google.com/document/d/1Atqe3h4sc65BEEloLP5a2dCRrODgNaM9cixGdpd7DF8/preview"
            title="Bhuwan Jain Resume"
            className="resumeViewer"
          />

          {/* <a href="/resume.pdf" download className="downloadBtn">
            Download Resume (PDF)
          </a> */}
        </div>
      </div>
    </div>
  );
}

