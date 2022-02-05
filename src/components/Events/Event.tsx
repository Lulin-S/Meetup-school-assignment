import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CommentInput from "../Comment/CommentInput";
import CommentItem from "../Comment/CommentItem";
import styles from "./Events.module.css";
import { Link } from "react-router-dom";
import Item from "antd/lib/list/Item";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../../store/counter";

interface typeState {
  props: {
    item: {
      date: string;
      id: number;
      details: string;
      image: string;
      name: string;
      passed: boolean;
      upcoming: boolean;
      counter: number;
      comments: object[];
    };
  };
}

export default function Event(props: any) {
  let location = useLocation();
  const locationState = location.state as typeState;

  const dispatch = useDispatch();
  const eventsListCounter = useSelector((state: any) => {
    return state.counter.eventsList;
  });

  const currentEvent = eventsListCounter.find(
    (item: any) => item.id === locationState.props.item.id
  );

  const incrementHandler = () => {
    dispatch(counterActions.increment(currentEvent));
  };

  const addCommentToReduxHandler = (info: object) => {
    const newInfo = { info, eventID: currentEvent.id };
    dispatch(counterActions.addCommentToRedux(newInfo));
  };
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  return (
    <div className={styles.contentContainer}>
      <Link to="/" className={styles.eventLogo}>
        Meetup
      </Link>
      <div className={styles.eventContentContainer}>
        <img src={currentEvent?.image} alt="event"></img>
        <p>{currentEvent?.name}</p>
        <p>{currentEvent?.date}</p>
        <p>{currentEvent?.details}</p>
        <br />
        <p className="totalCount">Attendees:{currentEvent.counter} </p>
      </div>

      <div className={styles.commentContentContainer}>
        {currentEvent.comments.map((item: any, index: any) => {
          return <CommentItem key={`${item} ${index}`} comment={item} />;
        })}

        <CommentInput submitComment={addCommentToReduxHandler} />

        <button
          disabled={isDisabled}
          onClick={incrementHandler}
          className={styles.register}
        >
          {isDisabled ? "Attend!" : "Attend for upcoming event"}
        </button>
      </div>
    </div>
  );
}
