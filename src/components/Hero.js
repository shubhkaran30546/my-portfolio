import React, { useEffect, useMemo, useState } from 'react';
import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { person } from '../content';
import { sunsetFor } from '../lib/sun';
import Metrics from './Metrics';
import './Hero.css';

const clockFormat = new Intl.DateTimeFormat('en-CA', {
  timeZone: person.timeZone,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
  timeZoneName: 'short',
});

const hhmm = new Intl.DateTimeFormat('en-CA', {
  timeZone: person.timeZone,
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function StatusStrip() {
  const now = useNow();
  const day = now.toDateString();
  // Recompute only when the day changes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sunset = useMemo(() => sunsetFor(now, person.coords, person.timeZone), [day]);
  const parts = clockFormat.formatToParts(now);
  const time = parts
    .filter((p) => ['hour', 'minute', 'second', 'literal'].includes(p.type))
    .map((p) => p.value)
    .join('')
    .trim();
  const zone = parts.find((p) => p.type === 'timeZoneName')?.value;

  return (
    <ul className="status mono" aria-label="Status">
      <li className="status__up">
        <span className="dot" aria-hidden="true" /> Operational
      </li>
      <li>{person.location}</li>
      <li>
        <time dateTime={now.toISOString()} aria-label={`Local time in Edmonton ${time} ${zone}`}>
          {time} <span className="status__zone">{zone}</span>
        </time>
      </li>
      {sunset && (
        <li className="status__sun">
          Sunset <time dateTime={sunset.toISOString()}>{hhmm.format(sunset)}</time>
        </li>
      )}
      <li className="status__now">
        Currently: SWE @ {person.company}
      </li>
    </ul>
  );
}

export default function Hero() {
  return (
    <section className="hero wrap" id="top" aria-labelledby="hero-name">
      <StatusStrip />

      <h1 className="hero__name" id="hero-name">
        <span className="hero__line hero__line--1">
          <span>{person.name[0]}</span>
        </span>
        <span className="hero__line hero__line--2">
          <span>{person.name[1]}</span>
        </span>
      </h1>

      <div className="hero__pitch">
        <p className="hero__claim">I build infrastructure that stays up.</p>
        <p className="hero__sub">
          <Metrics>
            Software Engineer at FastTrack Technologies in Edmonton, running the cloud behind an LMS and exam platform for 150K+ users at 99.9% uptime.
          </Metrics>{' '}
          UAlberta Computing Science grad, AWS&nbsp;certified.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={`mailto:${person.email}`}>
            Email me <FiArrowUpRight aria-hidden="true" />
          </a>
          <a className="btn btn--ghost" href={person.resume} download={person.resumeFileName}>
            <FiDownload aria-hidden="true" /> Résumé <span className="label hero__pdf">PDF</span>
          </a>
        </div>
      </div>

      <figure className="hero__plate">
        <div className="hero__frame">
          <img
            src={person.photo.small}
            srcSet={`${person.photo.small} 900w, ${person.photo.large} 1400w`}
            sizes="(min-width: 960px) 34vw, 72vw"
            width="900"
            height="1200"
            alt={person.photo.alt}
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <figcaption className="label">
          <span>Fig. 1</span>
          <span>Golden hour</span>
        </figcaption>
      </figure>
    </section>
  );
}
