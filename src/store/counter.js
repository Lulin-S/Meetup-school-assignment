import { createSlice } from "@reduxjs/toolkit";
import { eventsList } from "../views/Home";
import moment from "moment";

const initialCounterState = { eventsList };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      const newItem = action.payload;
      const clickedEvent = state.eventsList.find(
        (item) => item.id === newItem.id
      );
      console.log("first", clickedEvent);
      if (clickedEvent) {
        clickedEvent.counter++;
      }
    },

    addCommentToRedux(state, action) {
      const newComment = action.payload;
      const commentEvent = state.eventsList.find(
        (item) => item.id === newComment.eventID
      );
      if (commentEvent) {
        commentEvent.comments.push(newComment.info);
      }
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
