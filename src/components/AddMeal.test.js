import React from "react"
import { mount } from "enzyme"
import {Segment} from "semantic-ui-react"

import AddMeal from "./AddMeal"

describe("AddMeal", () => {
    let props;
    let mountedAddMeal
    const addMeal = () => {
        if (!mountedAddMeal) {
            mountedAddMeal = mount(
                <AddMeal {...props} />
            )
        }
        return mountedAddMeal
    }

    beforeEach(() => {
        props = {
            onAddMealClick: () => {},
        }
        mountedAddMeal = undefined
    })

    // All tests will go here
    it("always renders segments", () => {
        const segments = addMeal().find(Segment)
        expect(segments.length).toBeGreaterThan(0)
    });
});
