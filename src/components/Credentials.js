import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { FiArrowUpRight } from 'react-icons/fi';
import { credentials, education, person } from '../content';
import useInView from '../hooks/useInView';
import './Credentials.css';

// Dusk ground to sodium amber, in five steps.
const calendarTheme = {
  dark: ['#2a2839', '#4a3a3a', '#8a5a33', '#d48a3e', '#f7bf6e'],
};

export default function Credentials() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section className="section wrap" id="credentials" aria-labelledby="credentials-title">
      <div className="section-head">
        <h2 id="credentials-title">Credentials</h2>
        <p className="label">Badges verified on Credly</p>
      </div>

      <div className="creds" ref={ref} data-inview={inView}>
        <ul className="badges">
          {credentials.map((c) => (
            <li key={c.name}>
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="badge">
                <img src={c.image} alt="" width="96" height="96" loading="lazy" decoding="async" />
                <span className="badge__text">
                  <span className="badge__name">{c.short}</span>
                  <span className="label badge__issuer">
                    {c.issuer} <FiArrowUpRight aria-hidden="true" />
                  </span>
                </span>
                <span className="visually-hidden">: {c.name}, verify on Credly (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="edu">
          <img src={education.logo} alt="" width="40" height="40" loading="lazy" />
          <span>
            <strong>{education.degree}</strong>, {education.school}
            <span className="edu__focus"> — {education.focus}</span>
          </span>
        </p>

        <div className="commits">
          <div className="commits__head">
            <h3>Commit history</h3>
            <a className="label" href={person.github} target="_blank" rel="noopener noreferrer">
              github.com/shubhkaran30546 <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="commits__calendar">
            <GitHubCalendar
              username="shubhkaran30546"
              colorScheme="dark"
              theme={calendarTheme}
              blockSize={11}
              blockMargin={3}
              blockRadius={2}
              fontSize={12}
              errorMessage="GitHub's contribution data isn't reachable right now. The full history is on GitHub."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
