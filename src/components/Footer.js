import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { person } from '../content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer wrap">
      <p className="label">
        <span className="dot" aria-hidden="true" /> All systems operational
      </p>
      <p className="label">
        © {new Date().getFullYear()} {person.name.join(' ')} · {person.location}
      </p>
      <a className="label" href="#top">
        Back to top <FiArrowUp aria-hidden="true" />
      </a>
    </footer>
  );
}
