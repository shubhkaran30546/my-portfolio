import React, { useEffect, useRef, useState } from 'react';
import { sections } from '../content';
import './Nav.css';

const navItems = sections.filter((s) => s.id !== 'signal');

export default function Nav({ active, progress }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const sheetRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const toggle = toggleRef.current;
    const sheet = sheetRef.current;
    document.body.style.overflow = 'hidden';
    sheet?.querySelector('a')?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggle?.focus();
        return;
      }
      if (e.key !== 'Tab' || !sheet) return;
      const focusables = [toggle, ...sheet.querySelectorAll('a')];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 60rem)');
    const close = () => mql.matches && setOpen(false);
    mql.addEventListener('change', close);
    return () => mql.removeEventListener('change', close);
  }, []);

  return (
    <>
      <div
        className="uptime-line"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <header className="nav" data-open={open}>
        <a className="nav__home" href="#top" aria-label="Shubhkaran Dhillon, back to top">
          SD<span className="nav__home-dot" aria-hidden="true" />
        </a>

        <nav className="nav__inline" aria-label="Sections">
          <ul>
            {navItems.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} aria-current={active === s.id ? 'location' : undefined}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-sheet"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__toggle-label">{open ? 'Close' : 'Menu'}</span>
          <span className="nav__toggle-icon" aria-hidden="true" />
        </button>
      </header>

      <div
        id="nav-sheet"
        ref={sheetRef}
        className="nav-sheet"
        data-open={open}
        hidden={!open}
      >
        <nav aria-label="Sections">
          <ol>
            {navItems.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={active === s.id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <p className="nav-sheet__foot label">
          <span className="dot" aria-hidden="true" /> All systems operational
        </p>
      </div>
    </>
  );
}
