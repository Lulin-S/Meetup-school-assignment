import React from "react";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { BrowserRouter as Router } from "react-router-dom";
import Event from "../components/Events/Event";

Enzyme.configure({ adapter: new Adapter() });

describe("Event component", () => {
  const wrapper = mount(
    <Router>
      <Event />
    </Router>
  );

  it("Expects event component to render", () => {
    render(
      <Router>
        <Event />
      </Router>
    );
  });
  it("Expects event image to be rendered", () => {
    const img = wrapper.find("image");
    expect(img).toBeTruthy();
  });

  it("Expects register button to be disabled after one click", () => {
    const button = wrapper.find(".register");
    const expectedDisabledButtonText = "Attend!";

    button.simulate("click");
    button.simulate("click");
    const newDisabledButtonText = wrapper.find("button[disabled]").text();

    expect(expectedDisabledButtonText).toEqual(newDisabledButtonText);
  });

  it("Expects only one increment after only one register button click", () => {
    const registerButton = wrapper.find("button").at(1);
    const currentRegisterCount = parseInt(wrapper.find(".totalCount").text());
    const expectedRegisterCount = currentRegisterCount + 1;

    registerButton.simulate("click");
    registerButton.simulate("click");
    const newRegisterCount = parseInt(wrapper.find(".totalCount").text());

    expect(newRegisterCount).toEqual(expectedRegisterCount);
  });
});
