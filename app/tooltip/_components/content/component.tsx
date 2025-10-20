import { Button } from "@/_components/button";
import { ButtonGroup } from "@/_components/button-group";
import { Switch } from "@/_components/switch";
import { Tooltip } from "@/_components/tooltip";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <p className={styles.description}>choose where to placement the tooltip</p>
    <ButtonGroup className={styles.buttonGroup}>
      <Button
        className={styles.button}
        onClick={props.handlePlacement}
        disabled={props.placement === "top"}
      >
        top
      </Button>
      <Button
        className={styles.button}
        onClick={props.handlePlacement}
        disabled={props.placement === "right"}
      >
        right
      </Button>
      <Button
        className={styles.button}
        onClick={props.handlePlacement}
        disabled={props.placement === "bottom"}
      >
        bottom
      </Button>
      <Button
        className={styles.button}
        onClick={props.handlePlacement}
        disabled={props.placement === "left"}
      >
        left
      </Button>
    </ButtonGroup>
    <div className={styles.description}>
      choose whether to display the tooltip permanently
    </div>
    <Switch
      checked={props.permanent}
      onClick={props.togglePermanent}
      className={styles.switch}
    />
    <div className={styles.tooltipContainer}>
      <Tooltip
        placement={props.placement}
        title={props.placement}
        buttonStyle={styles.tooltipButton}
        tooltipStyle={`${styles.tooltip} ${props.permanent ? styles.tooltipPermanent : ""}`}
      >
        {props.permanent ? `tooltip on` : "focus or hover here"}
      </Tooltip>
    </div>
  </>
);
