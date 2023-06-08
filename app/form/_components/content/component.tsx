import { Button } from "@/_components/button";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <div className="my-3 display-4 text-center">
      <span className="font-monospace">{props.code}</span>{" "}
      <Button type="button" className="btn-link" onClick={props.refreshCode}>
        Refresh
      </Button>
    </div>
    <fieldset className="row">
      <div className="col-md-6 offset-md-3">
        <div className="mb-3">
          <label htmlFor="inputCode" className="form-label">
            Code
          </label>
          <input
            type="text"
            ref={props.focusRef}
            id="inputCode"
            className={`form-control ${
              props.error !== "" ? "is-invalid" : null
            } ${props.error === "" && props.isSubmit ? "is-valid" : null}`}
            value={props.input}
            onChange={(e) => props.setInput(e.target.value)}
            placeholder="Please enter the above code"
          />
          <div className="invalid-feedback">{props.error}</div>
          <div className="valid-feedback">Looks Good!</div>
        </div>
        <Button type="button" className="btn-primary" onClick={props.submit}>
          Submit
        </Button>
      </div>
    </fieldset>
  </>
);
