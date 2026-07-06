import { useState } from 'react';

/**
 * Plain logo image with a placeholder fallback.
 *
 * If the file at `src` doesn't exist (404s), renders the given `placeholder`
 * node instead. Unlike ZoomableImage, this is not clickable — no enlarge view.
 */
export default function LogoImage({ src, alt, placeholder = null, className = '', ...imgProps }) {
  const [missing, setMissing] = useState(false);

  if (missing) return placeholder;

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => setMissing(true)}
      {...imgProps}
    />
  );
}
