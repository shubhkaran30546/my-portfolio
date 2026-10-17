import React from 'react';
import { releases } from '../content';
import useInView from '../hooks/useInView';
import Metrics from './Metrics';
import './Changelog.css';

function Release({ release, current }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const end = release.end ?? 'now';

  return (
    <li className="release" ref={ref} data-inview={inView} data-current={current}>
      <div className="release__tag">
        <span className="release__version">{release.version}</span>
        <p className="mono release__dates">
          <time dateTime={release.start}>{release.start}</time>
          <span aria-hidden="true"> → </span>
          <span className="visually-hidden"> to </span>
          {release.end ? <time dateTime={release.end}>{end}</time> : <span>{end}</span>}
        </p>
        {current && (
          <p className="label release__live">
            <span className="dot" aria-hidden="true" /> In production
          </p>
        )}
      </div>

      <div className="release__body">
        <h3 className="release__company">{release.company}</h3>
        <p className="label release__meta">
          {release.role} <span aria-hidden="true">·</span> {release.location}{' '}
          <span aria-hidden="true">·</span> {release.period}
        </p>
        <ul className="release__notes">
          {release.highlights.map((h) => (
            <li key={h}>
              <Metrics>{h}</Metrics>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Changelog() {
  return (
    <section className="section wrap" id="experience" aria-labelledby="experience-title">
      <div className="section-head">
        <h2 id="experience-title">Changelog</h2>
        <p className="label">Experience, newest release first</p>
      </div>

      <ol className="changelog">
        {releases.map((r, i) => (
          <Release key={r.version} release={r} current={i === 0} />
        ))}
      </ol>
    </section>
  );
}
