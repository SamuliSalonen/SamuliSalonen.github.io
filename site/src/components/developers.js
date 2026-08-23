import React from "react";
import me from "../Assets/me.png";
import { FaGithub, FaLinkedin, FaXTwitter, FaTwitch } from "react-icons/fa6";
const developers = [
    {
        id: 1,
        name: "Samuli Salonen",
        role: "Lead Game Developer",
        avatar: me,
        bio: "Architect of gameplay systems and various other things",
        socials: {
            twitch: "https://www.twitch.tv/clayman_dev",
            twitter: "https://x.com/Ssaldev"
        },
    },
    {
        id: 2,
        name: "Marcus Rose",
        role: "Designer",
        avatar: "https://placehold.co/150x150?text=MR",
        bio: "Designs immersive worlds,  and player progression.",
        socials: {
            twitch: "https://www.twitch.tv/blackmageuk",

        },
    }
];

export default function DevelopersSection() {
    return (
        <section className="developers-section">
            <style></style>
            <div className="container">
                <h2>Meet the Developers</h2>
                <p className="subtitle">

                </p>

                <div className="developers-grid">
                    {developers.map((dev) => (
                        <div key={dev.id} className="developer-card">
                            <img
                                src={dev.avatar}
                                alt={dev.name}
                                className="developer-avatar"
                            />
                            <h3>{dev.name}</h3>
                            <span className="role">{dev.role}</span>
                            <p>{dev.bio}</p>
                            <div className="social-links">
                                <div className="social-links">
                                    {dev.socials?.github && (
                                        <a
                                            href={dev.socials.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-button"
                                        >
                                            <FaGithub />
                                            GitHub
                                        </a>
                                    )}

                                    {dev.socials?.twitter && (
                                        <a
                                            href={dev.socials.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-button"
                                        >
                                            <FaXTwitter />
                                            X
                                        </a>
                                    )}

                                    {dev.socials?.linkedin && (
                                        <a
                                            href={dev.socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-button"
                                        >
                                            <FaLinkedin />
                                            LinkedIn
                                        </a>
                                    )}

                                    {dev.socials?.twitch && (
                                        <a
                                            href={dev.socials.twitch}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-button"
                                        >
                                            <FaTwitch />
                                            Twitch
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .developers-section {
          padding: 4rem 2rem;
    
          color: white;
        }

      
        .developers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .developer-card {
          background: var(--color-bg);
          border-radius: 16px;
          padding: 1.5rem;
          transition: transform 0.2s ease;
        }

        .developer-card:hover {
          transform: translateY(-5px);
        }

        .developer-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 1rem;
        }

        .role {
          display: block;
            color: var(--color-text-muted);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        p {
          color: #d1d5db;
          line-height: 1.5;
        }
      `}</style>
        </section>
    );
}