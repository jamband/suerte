import { useEffect, useState } from "react";
import { Button } from "../components/button";
import { useFocus } from "../hooks/focus";
import { Layout } from "../layouts/layout";

export default function Page() {
  const { focusRef } = useFocus();

  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const generateCode = () => {
    return [...Array(6)]
      .map(() => {
        return Math.floor(Math.random() * Math.floor(10)).toString();
      })
      .join("");
  };

  const refreshCode = () => {
    setCode(generateCode());
    setInput("");
    setError("");
    setIsSubmit(false);
  };

  const submit = () => {
    if (input === "") {
      setError("Please enter the code.");
    } else if (input !== code) {
      setError("Incorrect code.");
    } else {
      setError("");
    }
    setIsSubmit(true);
  };

  useEffect(() => {
    setCode(generateCode());
  }, []);

  return (
    <>
      <h1>Form</h1>
      <div className="my-3 display-4 text-center">
        <span className="font-monospace">{code}</span>{" "}
        <Button type="button" className="btn-link" onClick={refreshCode}>
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
              ref={focusRef}
              id="inputCode"
              className={`form-control ${error !== "" ? "is-invalid" : null} ${
                error === "" && isSubmit ? "is-valid" : null
              }`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Please enter the above code"
            />
            <div className="invalid-feedback">{error}</div>
            <div className="valid-feedback">Looks Good!</div>
          </div>
          <Button type="button" className="btn-primary" onClick={submit}>
            Submit
          </Button>
        </div>
      </fieldset>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Form">{page}</Layout>
);
