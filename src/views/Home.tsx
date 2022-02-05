import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Events from "../components/Events/Events";

export const eventsList = [
  {
    id: 1,
    name: "English coversation",
    date: "02/07/2022",
    details:
      "Thought by a teacher who has experience with ESL teaching more than 10+ years!1st she will give short discussion about the school 2nd English Programs 3rd Lesson! Demonstration Knowing the weak point and strong point from an expert will help you guide how to study English. Step up to the next level!",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    upcoming: true,
    passed: false,
    counter: 0,
    comments: [],
  },
  {
    id: 2,
    name: "Swedish coversation",
    date: "02/08/2022",
    image:
      "https://images.unsplash.com/photo-1531669494349-268cb716a234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    upcoming: true,
    passed: false,
    counter: 0,
    comments: [],
  },
  {
    id: 3,
    name: "Chinese coversation",
    date: "06/08/2021",
    image:
      "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    upcoming: false,
    passed: true,
    counter: 0,
    comments: [],
  },
  {
    id: 4,
    name: "French coversation",
    date: "10/08/2022",
    image:
      "https://images.unsplash.com/photo-1505902987837-9e40ec37e607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    upcoming: true,
    passed: false,
    counter: 0,
    comments: [],
  },
  {
    id: 5,
    name: "Chinese coversation",
    date: "11/08/2022",
    image:
      "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    upcoming: true,
    passed: false,
    counter: 0,
    comments: [],
  },
];

type eventsItem = {
  id: number;
  image: string;
  name: string;
  date: string;
  upcoming: boolean;
  passed: boolean;
  counter: number;
  comments: object[];
};
export default function Home(): JSX.Element {
  return (
    <div className={styles.content}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <p className={styles.eventLogo}>Meetup</p>
          <Link to="/login">Login</Link>
        </div>
        <div className={styles.textContent}>
          <p>How Meetup works </p>
          <p>
            Meet new people who share your interests through online and in-
            <br />
            person events. It’s free to create an account.
          </p>
          <Link to="/login">
            <button className={styles.joinButton}>Join meetup</button>
          </Link>
        </div>
        <p>Upcoming</p>
        <div className={styles.eventsContent}>
          {eventsList
            .filter((item) => item.upcoming === true)
            .map((item: eventsItem) => (
              <Events item={item} key={item.id} />
            ))}
        </div>
        <p>Passed</p>
        <div className={styles.eventsContent}>
          {eventsList
            .filter((item) => item.passed === true)
            .map((item: eventsItem) => (
              <Events item={item} key={item.id} />
            ))}
        </div>
      </div>
    </div>
  );
}
