import ticketai from '../assets/images/ticketai.png';

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Hi, I'm <span>Alexis Ramos</span></h1>
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
            link="https://github.com/Jrayoskie/CS446-Final-Project"
          />
          <ProjectCard
            title="Pore Decisions"
            desc="A skincare product recommendation web app with Firebase Authentication and a clean React frontend."
            tags={["React", "Firebase", "CSS"]}
            link="https://github.com/samanthagsand/PoreDecisions"
          />
          <ProjectCard
            title="TicketAI"
            desc="An AI-powered support call ticketing system using Ollama + LLaMA 3.1 to auto-generate issue descriptions and resolutions from call transcripts."
            tags={["Python", "FastAPI", "Ollama", "Docker"]}
            image={ticketai}
          />
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Feel free to reach out — always open to collaborating on something cool.</p>
        <div className="contact-links">
          <a href="https://github.com/aramos468" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:aramos468@example.com">Email</a>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ title, desc, tags, link, image }) {
  return (
    <div className="project-card">
      {image && (
        <img src={image} alt={title} style={{width:'100%', borderRadius:'6px', marginBottom:'1rem', maxHeight:'160px', objectFit:'cover'}} />
      )}
      <h3>{title}</h3>
      <p>{desc}</p>
      <div>{tags && tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="project-link">View on GitHub →</a>
      )}
    </div>
  );
}

export default Home;