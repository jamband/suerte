import { ImageBadge } from "../image-badge";
import { ImagePlaceholder } from "../image-placeholder";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <div className="d-flex gap-2">
      {props.images.map((image) => (
        <ImageBadge
          key={image.color}
          className="btn-primary shadow-sm"
          text={image.text}
          color={image.color}
          dataBsToggle="modal"
          dataBsTarget="#modalImage"
          onClick={() => props.showImage(image)}
          disabled={!props.modal.ready}
        />
      ))}
    </div>
    <div
      id="modalImage"
      className="modal fade"
      tabIndex={-1}
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <ImagePlaceholder
          text={props.image.text}
          textSize="3em"
          textFill="#262b34"
          rectFill={props.image.color}
          height={300}
          className="rounded font-monospace"
        />
      </div>
    </div>
  </>
);
