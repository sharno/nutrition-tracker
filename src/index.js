import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { loadState, saveState } from './localStorage'
import nutritionTracker from './reducers'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const persistedState = loadState()
let store = createStore(nutritionTracker, persistedState)

store.subscribe(() => {
    saveState(store.getState())
})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
