import { useState } from 'react';
import Lightbox from './Lightbox.jsx';
import './ZoomableImage.css';

/**
 * Image that opens an enlarged Lightbox view when clicked.
 *
 * Also handles the "image not added yet" case: if the file at `src` doesn't
 * exist, it renders the given `placeholder` node instead (not clickable).
 * Used for the profile photo, project screenshots, and certification images —
 * drop real files into public/images/ and they become zoomable automatically.
 *
 * `className` and any extra props (loading, width, height, …) are applied to
 * the <img> itself, so existing image styles keep working unchanged.
 */
export default function ZoomableImage({ src, alt, placeholder = null, className = '', ...imgProps }) {
  const [missing, setMissing] = useState(false); // true when the file 404s
  const [open, setOpen] = useState(false); // lightbox visibility

  if (missing) return placeholder;

  return (
    <>
      <button
        type="button"
        className="zoom-btn"
        aria-haspopup="dialog"
        title="Click to enlarge"
        onClick={() => setOpen(true)}
      >
        <img
          className={className}
          src={src}
          alt={alt}
          onError={() => setMissing(true)}
          {...imgProps}
        />
      </button>

      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}
