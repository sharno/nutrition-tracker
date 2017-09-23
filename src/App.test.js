import React from 'react'
import { mount } from "enzyme"
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import nutritionTracker from './reducers'
import App from './App'

let store = createStore(nutritionTracker)

it('renders without crashing', () => {
    const app = mount(
        <Provider store={store}>
            <App />
        </Provider>
    )
})
