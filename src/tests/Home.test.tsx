
import React from "react"
import { render } from "@testing-library/react"
import Enzyme, { shallow, mount } from "enzyme"
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from "../views/Home"

Enzyme.configure({ adapter: new Adapter() });



describe('Home component', () => {
    const wrapper = mount(<Router><Home /></Router>)

    it('Expects component to render', () => {
        render(<Router><Home /></Router>)
    })

    it('Expects login link to exist', () => {
        const loginLink = wrapper.find('[to="/login"]')

        expect(loginLink).toBeTruthy()
    })

    it('Expects header to to exist', () => {
        const header = wrapper.find('.eventLogo')

        expect(header).toBeTruthy()
    })

    it('Expects date to be in correct format', () => {
        const numberOfDatesFound = wrapper.find('.eventDate').length
        const expectedFormat = new RegExp('^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$')

        for (let i = 0; i < numberOfDatesFound; i++) {
            let date = wrapper.find('.eventDate').at(i).text()
            //Checks dates, leap years not included nor years such as 5000

            expect(expectedFormat.test(date)).toBeTruthy()
        }

    })
})