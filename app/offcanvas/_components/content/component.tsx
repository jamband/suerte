import { Button } from "@/_components/button";
import { CloseButton } from "@/_components/close-button";
import { IconChevronRight } from "@/_icons/chevron-right";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <div className={styles.container}>
      <Button className={styles.button} onClick={props.showOffcanvs}>
        Go to Pages
        <IconChevronRight className={styles.buttonIcon} />
      </Button>
    </div>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
    <dialog
      ref={props.offcanvasRef}
      className={styles.offcanvasContainer}
      onClick={props.hideOffcanvasOnBackgroundClick}
      onKeyDown={props.hideOffcanvasOnEscapeKeyDown}
    >
      <div className={styles.offcanvas}>
        <div className={styles.offcanvasHeader}>
          <div className={styles.offcanvasHeaderTitle}>Pages</div>
          <CloseButton className={styles.close} onClick={props.hideOffcanvas} />
        </div>
        <div className={styles.offcanvasMain}>
          {props.links.map((link) => (
            <button
              key={link.href}
              type="button"
              className={styles.link}
              onClick={() => props.pushAfterHideOffcanvas(link.href)}
            >
              {link.text}
              <IconChevronRight className={styles.linkIcon} />
            </button>
          ))}
          <hr className={styles.divider} />
          {props.moreLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              className={styles.link}
              onClick={() => props.pushAfterHideOffcanvas(link.href)}
            >
              {link.text}
              <IconChevronRight className={styles.linkIcon} />
            </button>
          ))}
          <a
            href="https://github.com/jamband/suerte"
            className={styles.link}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
            <IconChevronRight className={styles.linkIcon} />
          </a>
        </div>
      </div>
    </dialog>
  </>
);
