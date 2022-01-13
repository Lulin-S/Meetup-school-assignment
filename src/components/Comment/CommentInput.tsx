import React, { useState } from "react";
import { Input, Button } from "antd";
import styles from "./comment.module.css";
import moment from "moment";

interface Prop {
  submitComment: (a: object) => void;
}

export default function CommentInput(props: Prop) {
  const [content, setContent] = useState<string>("");

  const handleChange = (e: any) => {
    setContent(e.target.value);
  };

  const addComment = () => {
    const commentInfo = {
      id: moment().valueOf(),
      avatar:
        "https://images.unsplash.com/photo-1571893225813-eaa8915f695e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      nickname: "User",
      datetime: moment(),
      content: content,
      comments: [],
    };
    props.submitComment(commentInfo);
    setContent("");
  };
  return (
    <div className={styles.addButton}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Input.TextArea
          rows={6}
          value={content}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <Button
        style={{
          padding: 12,
          marginTop: 20,
          borderRadius: 4,
          border: "none",
        }}
        type="primary"
        onClick={() =>
          content.length === 0
            ? window.alert("Please comment first")
            : addComment()
        }
      >
        Add Comment
      </Button>
    </div>
  );
}
