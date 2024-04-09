import { ColorBadge } from "@/_components/color-badge";
import { TextImage } from "@/_components/text-image";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <div className={styles.badges}>
      {props.images.map((image) => (
        <ColorBadge
          key={image.text}
          text={image.text}
          color={image.background}
          onClick={() => props.showModal(image)}
        />
      ))}
    </div>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
    <dialog
      ref={props.modalRef}
      className={styles.modal}
      onClick={props.closeModalOnBackgroundClick}
      onKeyDown={props.closeModalOnEscapeKeyDown}
    >
      <TextImage
        className={styles.image}
        text={props.image.text}
        color="#262b34"
        background={props.image.background}
      />
    </dialog>
  </>
);
