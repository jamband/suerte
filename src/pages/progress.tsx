import { Button } from "@/components/button";
import { Layout } from "@/layouts/layout";
import { useEffect, useState } from "react";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
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
      <div
        className="btn-group btn-group-sm my-3 w-50"
        role="group"
        aria-label="Progress"
      >
        <Button
          type="button"
          className="btn-primary w-50"
          onClick={() => setIsActive(!isActive)}
          disabled={bar === 100}
        >
          {isActive ? "Pause" : "Start"}
        </Button>
        <Button
          type="button"
          className="btn-primary w-50"
          onClick={clear}
          disabled={bar === 0}
        >
          Clear
        </Button>
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
};

Page.getLayout = (page) => <Layout title="Progress">{page}</Layout>;

export default Page;
