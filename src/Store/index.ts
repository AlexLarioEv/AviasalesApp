/* eslint-disable import/no-extraneous-dependencies */
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootRuduser from './Reducers'

export const store = createStore(rootRuduser, composeWithDevTools())

export type RootState = ReturnType<typeof rootRuduser>
