import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './Backdrop.module.scss';

export default function Backdrop({ show, children, backdropClose }) {
  const [isBrowser, setIsBrowser] = useState(false);

  const overlay = show ? (
    <div className={styles.backdrop} onClick={backdropClose}>
      {children}
    </div>
  ) : null;

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return createPortal(overlay, document.getElementById('modal-root'));
  } else {
    return null;
  }
}
