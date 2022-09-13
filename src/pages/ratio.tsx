import { useState } from "react";
import { Button } from "~/components/button";
import { Layout } from "~/layouts/layout";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  const [ratioSelector, setRatioSelector] = useState("");
  const ratioList = ["21:9", "16:9", "4:3", "1:1"];

  const handleRatioSelector = (ratio: string) => {
    const ratios = [
      { ratio: "21:9", selector: "ratio-21x9" },
      { ratio: "16:9", selector: "ratio-16x9" },
      { ratio: "4:3", selector: "ratio-4x3" },
      { ratio: "1:1", selector: "ratio-1x1" },
    ];

    setRatioSelector(
      ratios.find((_) => _.ratio === ratio)?.selector || ratioSelector
    );
  };

  return (
    <>
      <h1>Ratio</h1>
      <div className="mb-3 row justify-content-center">
        <div
          className="w-100 btn-group btn-group-sm col-8"
          role="group"
          aria-label="Aspect ratio list"
        >
          {ratioList.map((ratio) => (
            <Button
              key={ratio}
              type="button"
              aria-label={ratio}
              className="btn-primary font-monospace"
              onClick={() => handleRatioSelector(ratio)}
            >
              {ratio}
            </Button>
          ))}
        </div>
      </div>
      {ratioSelector && (
        <div className={`ratio ${ratioSelector}`}>
          <svg
            className="rounded font-monospace user-select-none"
            width="100%"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Image cap"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            style={{ fontSize: "4em", textAnchor: "middle" }}
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#dadfe5" />
            <text x="50%" y="50%" fill="#6b7279" dy="0.3em">
              {ratioSelector.slice(6)}
            </text>
          </svg>
        </div>
      )}
    </>
  );
};

Page.getLayout = (page) => <Layout title="Ratio">{page}</Layout>;

export default Page;
