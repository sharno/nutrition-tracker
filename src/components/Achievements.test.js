import React from "react"
import { shallow } from "enzyme"
import { List, Icon, Label } from "semantic-ui-react"

import Achievements from "./Achievements"

describe("<Achievements />", () => {
    it("should have achievement colored green when target is reached", () => {
        let props = {
            achievements: [
                { name: "meal", consumed: 0, target: 6, warn: false, },
                { name: "vegetable", consumed: 6, target: 6, warn: false, },
                { name: "protein", consumed: 0, target: 3, warn: true, },
                { name: "fat", consumed: 0, target: 2, warn: true, },
                { name: "carb", consumed: 0, target: 2, warn: true, },
                { name: "drink", consumed: 0, target: 4, warn: false, },
            ],
        }
        let wrapper = shallow(<Achievements {...props} />)
        expect(wrapper.find('Icon[color="green"]').length).toBe(1)
    })

    it("should have achievement colored yellow when target is exceeded with a warning", () => {
        let props = {
            achievements: [
                { name: "meal", consumed: 7, target: 6, warn: false, },
                { name: "vegetable", consumed: 7, target: 6, warn: false, },
                { name: "protein", consumed: 4, target: 3, warn: true, },
                { name: "fat", consumed: 3, target: 2, warn: true, },
                { name: "carb", consumed: 3, target: 2, warn: true, },
                { name: "drink", consumed: 5, target: 4, warn: false, },
            ],
        }
        let wrapper = shallow(<Achievements {...props} />)
        expect(wrapper.find('Icon[color="yellow"]').length).toBe(3)
    })

    it("should have achievement colored grey when nothing is achieved", () => {
        let props = {
            achievements: [
                { name: "meal", consumed: 0, target: 6, warn: false, },
                { name: "vegetable", consumed: 0, target: 6, warn: false, },
                { name: "protein", consumed: 2, target: 3, warn: true, },
                { name: "fat", consumed: 0, target: 2, warn: true, },
                { name: "carb", consumed: 0, target: 2, warn: true, },
                { name: "drink", consumed: 0, target: 4, warn: false, },
            ],
        }
        let wrapper = shallow(<Achievements {...props} />)
        expect(wrapper.find('Icon[color="grey"]').length).toBe(6)
    })
})
