import { useState } from "react";
import me from './../Assets/me.png';
import Skills from './../pages/skills.js';
const DEFAULT_POINTS = [
    { tag: "DevOps", text: "Containers, CI pipelines, automated deploys." },
    { tag: "Frontend", text: "React and SCSS on a token-based design system." },
    { tag: "Backend", text: "APIs, schema design, and the data layer behind them." },

    { tag: "Game dev", text: "Gameplay systems from prototype to shipped build." },
    { tag: "Physics", text: "Collision, movement, and stable simulation." },
];

const DEFAULT_ACTIONS = [
    { label: "Email me", href: "mailto:salonen.samuli1@gmail.com", primary: true },
    { label: "Read more", href: "/#about", primary: true }

]


function initialsOf(name) {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();
}

export default function CVIntro({
    name = "Samuli Salonen",
    role = "Full stack developer",
    meta = ["Finland", "Remote", "12 years"],
    status = "Contracting",
    lede = "",

    points = DEFAULT_POINTS,
    actions = DEFAULT_ACTIONS,
}) {
    const [imageFailed, setImageFailed] = useState(false);
    let showPhoto = true;

    return (
        <section className="section cv-intro">
            <div className="container">
                <div className="cv-intro__grid">
                    <div>
                        <div className="cv-intro__media">
                            {showPhoto ? (
                                <img
                                    src={me}
                                    alt={`Portrait of ${name}`}
                                    onError={() => setImageFailed(true)}
                                />
                            ) : (
                                <span className="cv-intro__initials" aria-hidden="true">
                                    {initialsOf(name)}
                                </span>
                            )}
                        </div>

                        <p className="label cv-intro__caption">
                            {meta.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </p>
                    </div>

                    <div>
                        {status && (
                            <p className="label cv-intro__eyebrow">
                                <span className="cv-intro__available" aria-hidden="true" />
                                {status}
                            </p>
                        )}

                        <h1 className="cv-intro__name">{name}</h1>
                        <p className="cv-intro__lede">
                            {role}. {lede}
                        </p>

                        <ul className="cv-intro__points">
                            {points.map((point) => (
                                <li className="cv-intro__point" key={point.tag}>
                                    <span className="label cv-intro__tag">{point.tag}</span>
                                    <p className="cv-intro__text">{point.text}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="cv-intro__actions">
                            {actions.map((action) => (
                                <a
                                    key={action.label}
                                    href={action.href}
                                    className={action.primary ? "btn-primary" : "btn-ghost"}
                                >
                                    {action.label}
                                </a>
                            ))}
                        </div>
                        
                    </div>
                         <Skills></Skills>

                </div>

            </div>
        </section>
    );
}