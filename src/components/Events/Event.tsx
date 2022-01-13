import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CommentInput from "../Comment/CommentInput";
import CommentItem from "../Comment/CommentItem";
import styles from "./Events.module.css";
import { Link } from "react-router-dom";
import Item from "antd/lib/list/Item";

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
    };
  };
}

export default function Event(props: object) {
  let location = useLocation();
  const state = location.state as typeState;

  const [peopleRegistred, setPeopleRegistred] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [commentList, setCommentList] = useState<object[]>([]);

  const handleButtonClick = () => {
    setPeopleRegistred(peopleRegistred + 1);
    setIsDisabled(true);
  };

  const submitComment = (info: object) => {
    console.log(info);
    const newCommentList = [...commentList, info];
    setCommentList(newCommentList);
  };

  const removeComment = (index: any) => {
    const newCommentList = [...commentList];
    newCommentList.splice(index, 1);
    setCommentList(newCommentList);
  };

  return (
    <div className={styles.contentContainer}>
      <Link to="/" className={styles.eventLogo}>
        Meetup
      </Link>
      <div className={styles.eventContentContainer}>
        <img src={state?.props.item.image} alt="event"></img>
        <p>{state?.props.item.name}</p>
        <p>{state?.props.item.date}</p>
        <p>{state?.props.item.details}</p>
        <br />
        <p className="totalCount">Attendees: {peopleRegistred}</p>
      </div>

      <div className={styles.commentContentContainer}>
        {commentList.map((item, index) => {
          return (
            <CommentItem
              key={`${item} ${index}`}
              comment={item}
              removeItem={(e: any) => removeComment(index)}
            />
          );
        })}

        <CommentInput submitComment={submitComment} />

        <button
          disabled={isDisabled}
          onClick={handleButtonClick}
          className={styles.register}
        >
          {isDisabled ? "Attend!" : "Attend for upcoming event"}
        </button>
      </div>
    </div>
  );
}
