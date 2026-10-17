import React from 'react';
import { languages, stackLayers } from '../content';
import useInView from '../hooks/useInView';
import './Stack.css';

// What travels between each layer and the one beneath it.
const links = {
  frontend: 'HTTPS · REST',
  apis: 'queries · events · cache',
  data: 'runs on',
};

export default function Stack() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section className="section wrap" id="stack" aria-labelledby="stack-title">
      <div className="section-head">
        <h2 id="stack-title">Stack</h2>
        <p className="label">Read top to bottom: from the user down to the metal</p>
      </div>

      <figure className="arch" ref={ref} data-inview={inView}>
        <div className="arch__rail" aria-label="Languages, used across every layer">
          <p className="label arch__label">Languages</p>
          <ul>
            {languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>

        <ol className="arch__layers">
          {stackLayers.map((layer, i) => (
            <li
              className="arch__layer"
              key={layer.id}
              data-layer={layer.id}
              style={{ '--i': stackLayers.length - 1 - i }}
            >
              <div className="arch__box">
                <h3 className="arch__name">{layer.name}</h3>
                <ul className="arch__items">
                  {layer.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {links[layer.id] && (
                <p className="arch__link label">
                  <span className="arch__wire" aria-hidden="true" />
                  {links[layer.id]}
                </p>
              )}
            </li>
          ))}
        </ol>

        <figcaption className="visually-hidden">
          Technical stack as a layered architecture: frontend, APIs and services, data, and cloud
          infrastructure, with languages spanning every layer.
        </figcaption>
      </figure>
    </section>
  );
}
