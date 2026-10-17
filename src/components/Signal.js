import React, { useEffect, useState } from 'react';
import { signal } from '../content';
import useInView from '../hooks/useInView';
import useReducedMotion from '../hooks/useReducedMotion';
import './Signal.css';

const format = (n, decimals = 0) => n.toFixed(decimals);

function Numeral({ value, decimals = 0, prefix = '', suffix = '', run, delay }) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? value : 0);

  useEffect(() => {
    if (reduced) {
      setShown(value);
      return undefined;
    }
    if (!run) return undefined;
    let frame;
    let start;
    const duration = 1400;
    const tick = (t) => {
      if (start === undefined) start = t + delay;
      const p = Math.min(1, Math.max(0, (t - start) / duration));
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setShown(value * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value, reduced, delay]);

  const final = `${prefix}${format(value, decimals)}${suffix}`;
  return (
    <span className="signal__value" aria-label={final}>
      <span aria-hidden="true" className="signal__digits">
        {prefix && <span className="signal__sign">{prefix}</span>}
        {format(shown, decimals)}
        <span className="signal__suffix">{suffix}</span>
      </span>
      {/* Reserves the final width so nothing shifts while counting */}
      <span aria-hidden="true" className="signal__ghost">
        {final}
      </span>
    </span>
  );
}

export default function Signal() {
  const [ref, inView] = useInView({ threshold: 0.4 });

  return (
    <section className="section signal wrap" id="signal" aria-labelledby="signal-title">
      <div className="section-head">
        <h2 id="signal-title">Signal</h2>
        <p className="label">Measured in production at FastTrack Technologies, 2026</p>
      </div>

      <dl className="signal__table" ref={ref} data-inview={inView}>
        {signal.map((m, i) => (
          <div className="signal__row" key={m.label}>
            <dt className="label">
              <span className="signal__label">{m.label}</span>
              <span className="signal__note">{m.note}</span>
            </dt>
            <dd>
              <Numeral {...m} run={inView} delay={i * 110} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
