import React, { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { person } from '../content';
import useInView from '../hooks/useInView';
import './Contact.css';

function copyText(text) {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
  return new Promise((resolve, reject) => {
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(field);
    ok ? resolve() : reject(new Error('copy failed'));
  });
}

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [copyState, setCopyState] = useState('idle'); // idle | copied | failed
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const onCopy = () => {
    copyText(person.email)
      .then(() => setCopyState('copied'))
      .catch(() => setCopyState('failed'));
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyState('idle'), 2400);
  };

  return (
    <section className="section contact wrap" id="contact" aria-labelledby="contact-title" ref={ref} data-inview={inView}>
      <h2 className="contact__signoff" id="contact-title">
        <span>Let’s build</span> <span>something that</span> <span className="contact__accent">stays up.</span>
      </h2>

      <div className="contact__email">
        <a className="contact__address" href={`mailto:${person.email}`}>
          {person.email}
        </a>
        <button type="button" className="btn btn--ghost contact__copy" onClick={onCopy} data-state={copyState}>
          {copyState === 'copied' ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
          {copyState === 'copied' ? 'Copied' : 'Copy email'}
        </button>
        <p className="visually-hidden" role="status" aria-live="polite">
          {copyState === 'copied' && 'Email address copied to clipboard.'}
          {copyState === 'failed' && 'Copy failed. Select the address to copy it manually.'}
        </p>
        {copyState === 'failed' && (
          <p className="label contact__error">Couldn’t copy. Select the address above instead.</p>
        )}
      </div>

      <ul className="contact__links">
        <li>
          <a href={person.github} target="_blank" rel="noopener noreferrer">
            <FiGithub aria-hidden="true" />
            <span>GitHub</span>
            <span className="label">shubhkaran30546</span>
            <FiArrowUpRight className="contact__arrow" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
            <FiLinkedin aria-hidden="true" />
            <span>LinkedIn</span>
            <span className="label">shubhkaran-dhillon</span>
            <FiArrowUpRight className="contact__arrow" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href={person.resume} download={person.resumeFileName}>
            <FiDownload aria-hidden="true" />
            <span>Résumé</span>
            <span className="label">PDF, 1 page</span>
            <FiDownload className="contact__arrow" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </section>
  );
}
