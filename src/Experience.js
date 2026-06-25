import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: 'FastTrack Technologies Inc.',
      role: 'Software Engineer',
      location: 'Edmonton, AB',
      period: 'Mar 2026 - Present',
      highlights: [
        'Architected and scaled an LMS and online examination platform to 40K+ users, achieving 99.9% uptime.',
        'Built cloud-native infrastructure on AWS (S3, ECS, RDS, ElastiCache), improving performance by 30% and reducing latency by 25%.',
        'Led infrastructure optimization initiatives, reducing cloud costs by approximately 20% through efficient resource utilization and scaling strategies.',
        'Optimized CI/CD pipelines, cutting deployment time by 40% and improving release reliability.',
        'Implemented Infrastructure as Code using Terraform, reducing manual configuration errors by 90%.',
        'Developed AI-augmented full-stack systems using Node.js, integrating automation workflows, internal tooling, and cloud-native services to improve developer productivity and operational efficiency.'
      ]
    },
    {
      company: 'Cardify',
      role: 'Software Engineer Intern',
      location: 'Remote',
      period: 'Jan 2025 - Aug 2025',
      highlights: [
        'Developed a full-stack platform for creating and sharing secure digital business cards, supporting 1,000+ users during pilot testing.',
        'Designed and implemented an AI agent that analyzed user inputs and generated optimized profile content, reducing onboarding time by 35%.',
        'Integrated Google OAuth2 and JWT auth, improving security and login reliability by 35%.',
        'Set up CI/CD with GitHub Actions, cutting deployment time by 40%.',
        'Optimized PostgreSQL schema and queries, improving database efficiency by 25%.'
      ]
    }
  ];

  return (
    <section className="experience-section anim" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-timeline">
        {experiences.map((experience) => (
          <article className="experience-item" key={experience.company}>
            <div className="experience-marker" aria-hidden="true" />

            <div className="experience-content">
              <div className="experience-heading">
                <div>
                  <h3>{experience.company}</h3>
                  <p className="experience-role">{experience.role}</p>
                </div>

                <div className="experience-meta">
                  <span>{experience.period}</span>
                  <span>{experience.location}</span>
                </div>
              </div>

              <ul className="experience-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
