import React from 'react';

const METRIC = /(\d[\d,.]*(?:K\+|\+|%))/g;

// Wraps every measured result ("150K+", "99.9%", "1,000+") in amber.
export default function Metrics({ children }) {
  return String(children)
    .split(METRIC)
    .map((part, i) =>
      i % 2 === 1 ? (
        <mark className="metric" key={i}>
          {part}
        </mark>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );
}
