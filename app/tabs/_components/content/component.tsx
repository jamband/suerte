import { IconArrowsLeftRight } from "@/_icons/arrows-left-right";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.container}>
    <div className={styles.tabsContainer}>
      <ul
        ref={props.tabsRef}
        className={`${styles.tabs}
          ${props.tabsPosition === "right" ? styles.tabsMaskRight : ""}
          ${props.tabsPosition === "center" ? styles.tabsMask : ""}
          ${props.tabsPosition === "left" ? styles.tabsMaskLeft : ""}`}
        onScroll={props.tabsOnScroll}
      >
        {props.cities.map((city) => (
          <li key={city.name} className={styles.tab}>
            <button
              type="button"
              className={`${styles.button}
                ${city.name === props.activeCity.name ? styles.active : ""}`}
              onClick={props.onClick}
              disabled={city.name === props.activeCity.name}
            >
              {city.name}
            </button>
          </li>
        ))}
      </ul>
      <div
        className={styles.tabsHint}
        aria-label="tabs can be scrolled horizontally"
      >
        <IconArrowsLeftRight className={styles.tabsHintIcon} />
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.city}>{props.activeCity.name}</div>
      <div className={styles.time}>{props.activeCityTime}</div>
      <div className={styles.description}>current time</div>
    </div>
  </div>
);
