import React from "react";
import { Link } from "react-router-dom";
import styles from "./Events.module.css";

export default function Events(props: any) {
  return (
    <div className={styles.eventsContent}>
      <div className={styles.cardContainer}>
        <Link to={{ pathname: `/event/${props.item.name}` }} state={{ props }}>
          <div className={styles.card}>
            <img
              className={styles.eventImage}
              src={props.item.image}
              alt="event"
            ></img>
            <p>{props.item.name}</p>
            <p className="eventDate">{props.item.date}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
