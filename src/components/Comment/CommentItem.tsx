import React from "react";
import styles from "./comment.module.css";
import { Comment, Avatar, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default function CommentItem(props: any) {
  console.log(props.comment);
  const removeItem = () => {
    props.removeItem();
  };
  return (
    <Comment
      className={styles.commentImage}
      author={<a href="/#">{props?.comment?.nickname}</a>}
      avatar={
        <Avatar src={props?.comment?.avatar} alt={props?.comment?.nickname} />
      }
      content={<p>{props?.comment?.content}</p>}
      datetime={
        <Tooltip title={props?.comment?.datetime.format("YYYY-MM-DD")}>
          <span>{props?.comment?.datetime.fromNow()}</span>
        </Tooltip>
      }
      actions={[
        <span className={styles.deleteComment} onClick={(e) => removeItem()}>
          <DeleteOutlined />
          delete
        </span>,
      ]}
    />
  );
}
