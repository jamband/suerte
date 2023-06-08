import { Button } from "@/_components/button";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <div
      className="btn-group btn-group-sm my-3 w-50"
      role="group"
      aria-label="Progress"
    >
      <Button
        type="button"
        className="btn-primary w-50"
        onClick={() => props.setIsActive(!props.isActive)}
        disabled={props.bar === 100}
      >
        {props.isActive ? "Pause" : "Start"}
      </Button>
      <Button
        type="button"
        className="btn-primary w-50"
        onClick={props.clear}
        disabled={props.bar === 0}
      >
        Clear
      </Button>
    </div>
    <div className="progress mt-3" style={{ height: "1px" }}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${props.bar}%` }}
        aria-valuenow={props.bar}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
    <div className="font-monospace text-center small">{props.bar}%</div>
  </>
);
