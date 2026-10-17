import { useEffect, useState } from 'react';

// Scroll progress (0–1) and the id of the section currently under the reading line.
// One rAF-throttled listener feeds both the uptime line and the nav.
export default function useScrollState(sectionIds) {
  const [state, setState] = useState({ progress: 0, active: null });

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;

      const line = window.innerHeight * 0.35;
      let active = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) active = id;
      }
      if (progress > 0.995) active = sectionIds[sectionIds.length - 1];

      setState((prev) =>
        prev.active === active && Math.abs(prev.progress - progress) < 0.001 ? prev : { progress, active }
      );
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds]);

  return state;
}
