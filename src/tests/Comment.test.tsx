import { render, screen, fireEvent } from "@testing-library/react";
import Event from "../components/Events/Event";
// import CommentInput from "../components/Comment/CommentInput";
import CommentItem from "../components/Comment/CommentItem";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("Event and child components", () => {
  const wrapper = mount(
    <Router>
      <Event />
    </Router>
  );
  it("Renders CommentItem without error", () => {
    shallow(
      <Router>
        <CommentItem />
      </Router>
    );
  });

  it("Expects alert information if the user leaves the comment empty", () => {
    window.alert = jest.fn();
    const button = wrapper.find("button").at(0);
    button.simulate("click");
    expect(window.alert).toHaveBeenCalledWith("Please comment first");
  });

  it("Expects render comment after the user sent the comment", () => {
    const commentContentArea = wrapper.find("textarea");
    commentContentArea.simulate("change", {
      target: { value: "Hello" },
    });
    const button = wrapper.find("button").at(0);
    button.simulate("click");
    const newComment = wrapper.find(".ant-comment-content-detail").text();
    expect(newComment).toEqual("Hello");
  });

  it("Expects comment to be deleted after the user clicks the delete button", () => {
    const commentContentArea = wrapper.find("textarea");
    commentContentArea.simulate("change", {
      target: { value: "Hello" },
    });
    const button = wrapper.find("button").at(0);
    button.simulate("click");
    const deleteButton = wrapper.find(".deleteComment").at(0);
    deleteButton.simulate("click");
    const commentComponent = wrapper.find("Comment");
    expect(commentComponent).toEqual({});
  });
});
