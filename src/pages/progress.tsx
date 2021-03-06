import { useEffect, useState } from "react";
import { Button } from "../components/button";
import { Layout } from "../layouts/layout";

export default function Page() {
  const [isActive, setIsActive] = useState(false);
  const [bar, setBar] = useState(0);

  const clear = () => {
    setBar(0);
    setIsActive(false);
  };

  useEffect(() => {
    let intervalId: number;

    if (isActive) {
      intervalId = window.setInterval(() => {
        if (bar === 100) {
          return;
        }
        setBar((previous) => previous + 1);
      }, 100);
    }
    return () => clearInterval(intervalId);
  }, [isActive, bar]);

  return (
    <>
      <h1>Progress</h1>
      <div className="row">
        <div
          className="btn-group btn-group-sm my-3 col-6 col-md-4"
          role="group"
          aria-label="Progress"
        >
          <Button
            type="button"
            className="btn-primary w-25"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? "Pause" : "Start"}
          </Button>
          <Button type="button" className="btn-primary w-25" onClick={clear}>
            Clear
          </Button>
        </div>
      </div>
      <div className="progress mt-3" style={{ height: "1px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${bar}%` }}
          aria-valuenow={bar}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <div className="font-monospace text-center small">{bar}%</div>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Progress">{page}</Layout>
);
