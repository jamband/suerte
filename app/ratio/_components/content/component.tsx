import { Button } from "@/_components/button";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <div className="mb-3 row justify-content-center">
      <div
        className="w-100 btn-group btn-group-sm col-8"
        role="group"
        aria-label="Aspect ratio list"
      >
        {props.ratioList.map((ratio) => (
          <Button
            key={ratio}
            type="button"
            aria-label={ratio}
            className="btn-primary font-monospace"
            onClick={() => props.handleRatioSelector(ratio)}
          >
            {ratio}
          </Button>
        ))}
      </div>
    </div>
    {!!props.ratioSelector && (
      <div className={`ratio ${props.ratioSelector}`}>
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
            {props.ratioSelector.slice(6)}
          </text>
        </svg>
      </div>
    )}
  </>
);
