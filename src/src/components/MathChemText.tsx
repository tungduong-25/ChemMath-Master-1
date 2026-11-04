// @ts-nocheck
import React, { useState, useEffect, useMemo } from 'react';

// ============================================================================
// 1. ZERO-ERROR FORMULA RENDERING ENGINE (KaTeX + mhchem + Fallback Parser)
// ============================================================================
const useKaTeXLoader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.katex) {
      setLoaded(true);
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js';
    script.async = true;
    script.onload = () => {
      const mhchem = document.createElement('script');
      mhchem.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/mhchem.min.js';
      mhchem.async = true;
      mhchem.onload = () => setLoaded(true);
      mhchem.onerror = () => setLoaded(true);
      document.head.appendChild(mhchem);
    };
    document.head.appendChild(script);
  }, []);

  return loaded;
};

// Smart chemical & mathematical HTML fallback formatter so formulas NEVER show raw code
export const formatChemMathFallback = (raw) => {
  if (!raw) return '';
  let s = raw;

  // Handle common LaTeX macros cleanly
  s = s.replace(/\\text\{([^}]*)\}/g, '$1');
  s = s.replace(/\\mathrm\{([^}]*)\}/g, '$1');
  s = s.replace(/\\ce\{([^}]*)\}/g, '$1');
  s = s.replace(/\\tilde\{\\nu\}/g, 'ν̃');
  s = s.replace(/\\Delta_r H\^\\circ_\{298\}/g, 'Δ<sub>r</sub>H°<sub>298</sub>');
  s = s.replace(/\\Delta_f H\^\\circ_\{298\}/g, 'Δ<sub>f</sub>H°<sub>298</sub>');
  s = s.replace(/E\^\\circ_\{([^}]*)\}/g, 'E°<sub>$1</sub>');
  s = s.replace(/\\Delta H/g, 'ΔH');
  s = s.replace(/\\Delta/g, 'Δ');
  s = s.replace(/\\circ/g, '°');
  s = s.replace(/\\approx/g, '≈');
  s = s.replace(/\\cdot/g, '·');
  s = s.replace(/\\times/g, '×');
  s = s.replace(/\\pm/g, '±');
  s = s.replace(/\\leq/g, '≤');
  s = s.replace(/\\geq/g, '≥');
  s = s.replace(/\\neq/g, '≠');
  s = s.replace(/\\infty/g, '∞');
  s = s.replace(/\\pi/g, 'π');
  s = s.replace(/\\alpha/g, 'α');
  s = s.replace(/\\beta/g, 'β');
  s = s.replace(/\\omega/g, 'ω');
  s = s.replace(/\\varphi/g, 'φ');
  s = s.replace(/\\sum/g, '∑');
  s = s.replace(/\\rightleftharpoons/g, '⇌');
  s = s.replace(/\\rightarrow/g, '→');
  s = s.replace(/\\to/g, '→');
  s = s.replace(/\\Rightarrow/g, '⇒');
  s = s.replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '($1)/($2)');
  s = s.replace(/\\sqrt\{([^}]*)\}/g, '√($1)');
  s = s.replace(/\^\{([^}]*)\}/g, '<sup>$1</sup>');
  s = s.replace(/_\{([^}]*)\}/g, '<sub>$1</sub>');
  s = s.replace(/\^([0-9+-]+)/g, '<sup>$1</sup>');
  s = s.replace(/_([0-9a-zA-Z]+)/g, '<sub>$1</sub>');
  return s;
};

export const MathChemText = ({ text, className = '', block = false }) => {
  const katexLoaded = useKaTeXLoader();

  const renderedSegments = useMemo(() => {
    if (!text) return [];
    const str = String(text);
    // Split by $$...$$ or $...$
    const regex = /(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g;
    const parts = str.split(regex);

    return parts.map((part, idx) => {
      const isDisplayMath = part.startsWith('$$') && part.endsWith('$$');
      const isInlineMath = !isDisplayMath && part.startsWith('$') && part.endsWith('$');

      if (isDisplayMath || isInlineMath) {
        const cleanLatex = part.slice(isDisplayMath ? 2 : 1, isDisplayMath ? -2 : -1).trim();
        if (katexLoaded && window.katex) {
          try {
            const html = window.katex.renderToString(cleanLatex, {
              displayMode: isDisplayMath,
              throwOnError: false,
              strict: false,
              trust: true
            });
            return { type: 'katex', html, isDisplayMath, key: idx };
          } catch (e) {
            return {
              type: 'fallback',
              html: formatChemMathFallback(cleanLatex),
              isDisplayMath,
              key: idx
            };
          }
        } else {
          return {
            type: 'fallback',
            html: formatChemMathFallback(cleanLatex),
            isDisplayMath,
            key: idx
          };
        }
      }

      return { type: 'text', content: part, key: idx };
    });
  }, [text, katexLoaded]);

  const Wrapper = block ? 'div' : 'span';

  return (
    <Wrapper className={`leading-relaxed ${className}`}>
      {renderedSegments.map((seg) => {
        if (seg.type === 'katex' || seg.type === 'fallback') {
          return (
            <span
              key={seg.key}
              className={`${
                seg.isDisplayMath ? 'block my-2.5 py-1.5 px-3 overflow-x-auto bg-emerald-500/5 rounded-lg border border-emerald-500/15 text-center' : 'inline-block mx-0.5'
              } font-medium`}
              dangerouslySetInnerHTML={{ __html: seg.html }}
            />
          );
        }
        return (
          <span key={seg.key} className="whitespace-pre-line">
            {seg.content}
          </span>
        );
      })}
    </Wrapper>
  );
};

