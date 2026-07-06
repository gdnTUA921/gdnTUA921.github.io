import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from './Icons.jsx';
import './Lightbox.css';

/**
 * Accessible fullscreen image lightbox (modal).
 * - Rendered in a portal so it always sits above the page.
 * - Closes on Escape, on the close button, or by clicking the backdrop.
 * - Locks page scroll while open and restores focus to the element that
 *   opened it when closed.
 */
export default function Lightbox({ src, alt, onClose }) {
  const closeBtnRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    // Move focus into the dialog; remember where it came from
    previouslyFocused.current = document.activeElement;
    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      // The close button is the only focusable element — keep Tab on it
      if (e.key === 'Tab') {
        e.preventDefault();
        closeBtnRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    // Lock page scroll while the modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [onClose]);

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={(e) => {
        // Close only when the dark backdrop itself is clicked
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        ref={closeBtnRef}
        type="button"
        className="lightbox__close"
        aria-label="Close enlarged image"
        onClick={onClose}
      >
        <CloseIcon />
      </button>

      <figure className="lightbox__figure">
        <img className="lightbox__image" src={src} alt={alt} />
        <figcaption className="lightbox__caption">{alt}</figcaption>
      </figure>
    </div>,
    document.body
  );
}
