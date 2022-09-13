import Image from "next/image";
import { useState } from "react";
import { Button } from "~/components/button";
import { useModal } from "~/hooks/modal";
import { Layout } from "~/layouts/layout";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  useModal();

  const [src, setSrc] = useState("");
  const images = ["boat", "city", "butterfly"];

  const showImage = (image: string) => {
    setSrc(`/${image}.jpg`);
  };

  return (
    <>
      <h1>Modal</h1>
      {images.map((image) => (
        <Button
          key={image}
          type="button"
          className="me-2 d-inline-flex items-center btn-primary rounded-pill"
          data-bs-toggle="modal"
          data-bs-target="#modalImage"
          onClick={() => showImage(image)}
        >
          <Image
            src={`/${image}-thumb.jpg`}
            width={30}
            height={30}
            className="rounded-pill"
            alt=""
          />
          <div className="position-relative ms-1" style={{ top: "0.15em" }}>
            {image}
          </div>
        </Button>
      ))}
      <div
        id="modalImage"
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg text-center">
          {src !== "" && (
            <Image
              src={src}
              width={800}
              height={533}
              className="img-fluid rounded"
              alt=""
            />
          )}
        </div>
      </div>
    </>
  );
};

Page.getLayout = (page) => <Layout title="Modal">{page}</Layout>;

export default Page;
