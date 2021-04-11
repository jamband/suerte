import { useState } from "react";
import { Button } from "~/components/button";
import { Page } from "~/layouts/page";

export default function View() {
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
    <Page title="Ratio">
      <h1>Ratio</h1>
      <div className="row justify-content-center">
        <p
          className="btn btn-group btn-group-sm col-8"
          role="group"
          aria-label="Aspect ratio list"
        >
          {ratioList.map((ratio) => (
            <Button
              key={ratio}
              aria-label={ratio}
              className="btn-primary"
              onClick={() => handleRatioSelector(ratio)}
            >
              {ratio}
            </Button>
          ))}
        </p>
      </div>
      {ratioSelector && (
        <div className={`ratio ${ratioSelector}`}>
          <img
            className="rounded"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89eDpfwAI2wOgwxlaYQAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
      )}
    </Page>
  );
}
