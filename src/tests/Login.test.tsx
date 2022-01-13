import { render, screen, fireEvent } from "@testing-library/react"
import Login from '../components/LogIn/Login'
import React from "react"
import Enzyme, { shallow, mount } from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { BrowserRouter as Router } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe("Login component", () => {
    it("Renders without error", () => {
        shallow(<Login />)
    })

    it("Renders mount without error", () => {
        mount(<Router>
            <Login />
        </Router>)
    })

    it("Renders response element correct initially", () => {
        const component = shallow(<Login />)
        const expectedText = ""
        const actualText = component.find("#response").text()
        expect(actualText).toBe(expectedText)
    })

    it("Check if Login button is present", () => {
        render(<Router>
            <Login />
        </Router>)
        const button = screen.getByRole("button")
        expect(button).toHaveTextContent(/Login/i)
    })

    it("Button sends error message if user is not valid", () => {
        render(<Router>
            <Login />
        </Router>)
        fireEvent.click(screen.getByText(/login/i))
        expect(screen.getByText(/invalid username/i)).toBeInTheDocument();
    })

    it("Check if login label is present", () => {
        render(<Router>
            <Login />
        </Router>)
        const loginLabel = screen.getByText(/username/i)
        expect(loginLabel).toBeInTheDocument();
    })

    test('Login and render welcome response', () => {
        let component = shallow(<Login />);
        component.find('input[type="text"]').simulate('change', { target: { name: 'username', value: 'Bob' } });
        component.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'qwerty' } });
        component.find("button").simulate("click", {
            preventDefault: () => {
            }
        });
        const response = component.find("#response").text()
        expect(response).toEqual("Welcome Bob")
    })


})