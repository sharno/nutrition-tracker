import React from "react"
import { shallow } from "enzyme"
import { Form } from "semantic-ui-react"

import AddMeal from "./AddMeal"

describe("<AddMeal />", () => {
    let props
    let wrapper

    beforeEach(() => {
        props = {
            onAddMealClick: () => {},
        }
        wrapper = shallow(<AddMeal {...props} />)
    })

    // All tests will go here
    it("always renders 2 Form.Input", () => {
        expect(wrapper.find(Form.Input)).toHaveLength(2)
    })
})
