import { Button } from "@/_components/button";
import { CloseButton } from "@/_components/close-button";
import { IconArrowRight } from "@/_icons/arrow-right";
import { IconArrowUpRightFromSquare } from "@/_icons/arrow-up-right-from-square";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <div className={styles.container}>
      <Button className={styles.button} onClick={props.offcanvas.show}>
        Go to Pages
        <IconArrowRight className={styles.buttonIcon} />
      </Button>
    </div>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
    <dialog
      ref={props.offcanvas.ref}
      className={styles.offcanvasContainer}
      onClick={props.offcanvas.closeOnBackgroundClick}
      onKeyDown={props.offcanvas.closeOnEscapeKeyDown}
    >
      <div className={styles.offcanvas}>
        <div className={styles.offcanvasHeader}>
          <div className={styles.offcanvasHeaderTitle}>Pages</div>
          <CloseButton
            className={styles.close}
            onClick={props.offcanvas.close}
          />
        </div>
        <div className={styles.offcanvasMain}>
          {props.links.map((link) => (
            <button
              key={link.href}
              type="button"
              className={styles.link}
              onClick={() => props.pushAfterCloseOffcanvas(link.href)}
            >
              {link.text}
              <IconArrowRight className={styles.linkIcon} />
            </button>
          ))}
          <hr className={styles.divider} />
          {props.moreLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              className={styles.link}
              onClick={() => props.pushAfterCloseOffcanvas(link.href)}
            >
              {link.text}
              <IconArrowRight className={styles.linkIcon} />
            </button>
          ))}
          <a
            href="https://github.com/jamband/suerte"
            className={styles.link}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
            <IconArrowUpRightFromSquare className={styles.linkIcon} />
          </a>
        </div>
      </div>
    </dialog>
  </>
);
