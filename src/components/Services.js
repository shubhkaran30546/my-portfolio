import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { featuredProject as featured, projects } from '../content';
import useInView from '../hooks/useInView';
import Metrics from './Metrics';
import './Services.css';

export default function Services() {
  const [featuredRef, featuredIn] = useInView({ threshold: 0.15 });
  const [indexRef, indexIn] = useInView({ threshold: 0.15 });

  return (
    <section className="section wrap" id="projects" aria-labelledby="projects-title">
      <div className="section-head">
        <h2 id="projects-title">Services</h2>
        <p className="label">Projects. Every repository is public on GitHub</p>
      </div>

      <div className="services">
        <article className="featured" aria-labelledby="featured-title" ref={featuredRef} data-inview={featuredIn}>
          <div className="featured__main">
            <h3 className="featured__title" id="featured-title">
              <img src={featured.mark} alt="" width="48" height="66" className="featured__mark" />
              {featured.title}
            </h3>
            <p className="featured__purpose">{featured.purpose}</p>
            <p className="featured__context label">
              <span className="dot" aria-hidden="true" /> <Metrics>{featured.status}</Metrics>
            </p>
            <ul className="tags" aria-label="Stack">
              {featured.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <a className="btn btn--ghost featured__link" href={featured.link} target="_blank" rel="noopener noreferrer">
              View source on GitHub <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>

        </article>

        <ol className="index" ref={indexRef} data-inview={indexIn}>
          {projects.map((p) => (
            <li className="index__row" key={p.title}>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="index__link">
                <span className="index__thumb">
                  <img src={p.image} alt="" loading="lazy" decoding="async" width="720" height="480" />
                </span>
                <span className="index__title">{p.title}</span>
                <span className="index__purpose">{p.purpose}</span>
                <span className="index__tags label">{p.stack.join(' · ')}</span>
                <span className="index__state label">
                  <span className="dot" aria-hidden="true" /> {p.kind}
                </span>
                <FiArrowUpRight className="index__arrow" aria-hidden="true" />
                <span className="visually-hidden"> (opens GitHub in a new tab)</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
