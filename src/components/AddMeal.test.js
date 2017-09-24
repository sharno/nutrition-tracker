import React from "react"
import { shallow } from "enzyme"
import { Button, Form } from "semantic-ui-react"

import AddMeal from "./AddMeal"

describe("<AddMeal />", () => {
    let props
    let wrapper

    beforeEach(() => {
        props = {
            onAddMealClick: jest.fn(),
        }
        wrapper = shallow(<AddMeal {...props} />)
    })

    it("always renders 2 Form.Input", () => {
        expect(wrapper.find(Form.Input)).toHaveLength(2)
    })

    it("Doesn't fire the onAddMealClick function when the serving is not filled", () => {
        wrapper.instance().setState({ name: 'Breakfast' })
        wrapper.find(Button).last().simulate('click', { preventDefault() { } })
        expect(props.onAddMealClick.mock.calls.length).toBe(0)
    })

    it("Doesn't fire the onAddMealClick function when the name is not filled", () => {
        wrapper.instance().setState({
            serving: {
                vegetable: 1,
                protein: 0,
                fat: 0,
                carb: 0,
                drink: 0,
            }
        })
        wrapper.find(Button).last().simulate('click', { preventDefault() { } })
        expect(props.onAddMealClick.mock.calls.length).toBe(0)
    })

    it("Fires the onAddMealClick function when the button is clicked", () => {
        wrapper.instance().setState({
            name: 'Breakfast',
            serving: {
                vegetable: 1,
                protein: 0,
                fat: 0,
                carb: 0,
                drink: 0,
            }
        })
        wrapper.find(Button).last().simulate('click', { preventDefault() { } })
        expect(props.onAddMealClick.mock.calls.length).toBe(1)
    })
})
