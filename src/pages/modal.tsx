import { useState } from "react";
import { ImageBadge } from "~/components/image-badge";
import { ImagePlaceholder } from "~/components/image-placeholder";
import { useModal } from "~/hooks/modal";
import { Layout } from "~/layouts/layout";
import type { PageComponent } from "./_app";

type Image = {
  color: `#${string}`;
  text: string;
};

const Page: PageComponent = () => {
  const modal = useModal();

  const [image, setImage] = useState<Image>({
    color: "#ed7c7c",
    text: "red",
  });

  const images: Array<Image> = [
    { color: "#ed7c7c", text: "red" },
    { color: "#4b9c69", text: "green" },
    { color: "#74a7e6", text: "blue" },
  ];

  const showImage = (image: Image) => {
    setImage(image);
  };

  return (
    <>
      <h1>Modal</h1>
      <div className="d-flex gap-2">
        {images.map((image) => (
          <ImageBadge
            key={image.color}
            className="btn-primary shadow-sm"
            text={image.text}
            color={image.color}
            dataBsToggle="modal"
            dataBsTarget="#modalImage"
            onClick={() => showImage(image)}
            disabled={!modal.ready}
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
            text={image.text}
            textSize="3em"
            textFill="#262b34"
            rectFill={image.color}
            height={300}
            className="rounded font-monospace"
          />
        </div>
      </div>
    </>
  );
};

Page.getLayout = (page) => <Layout title="Modal">{page}</Layout>;

export default Page;
