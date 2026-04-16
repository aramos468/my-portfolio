function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Hi, I'm Alexis Ramos</h1>
        <p>Software Engineer Student · Cloud & AI/ML Enthusiast · Builder</p>
        <p className="hero-sub">Cal State San Marcos</p>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm a software engineering student at Cal State San Marcos with a focus on cloud computing and machine learning.
          I enjoy building full-stack projects, working with GCP, and exploring how AI can be applied to real-world problems.
          When I'm not coding, I'm at the gym.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            title="CloudVault"
            desc="A GCP-based cloud media storage and sharing platform built for CS446. Uses Cloud Storage, Firestore, and Cloud Functions."
            tags={["GCP", "Node.js", "Firestore"]}
          />
          <ProjectCard
            title="TicketAI"
            desc="An AI-powered support call ticketing system using Ollama + LLaMA 3.1 to auto-generate issue descriptions and resolutions from call transcripts."
            tags={["Python", "FastAPI", "Ollama", "Docker"]}
          />
          <ProjectCard
            title="Skincare Recommender"
            desc="A web app for skincare product recommendations built with a group for CS446. Features Firebase Authentication and a clean React frontend."
            tags={["React", "Firebase", "CSS"]}
          />
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Feel free to reach out, I'm always open to collaborating on something cool.</p>
        <div className="contact-links">
          <a href="https://github.com/aramos468" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:aramos468@example.com">Email</a>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ title, desc, tags }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div>{tags && tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
    </div>
  );
}

export default Home;