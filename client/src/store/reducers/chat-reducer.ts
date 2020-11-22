import { AnyAction } from "redux"

export const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
export const SET_USER = 'SET_USER'
export const SET_TIME = 'SET_TIME'

type user = {
    id: number | null
    name: string | null
}

type InitialStateType = {
    user: user | null
    time: string | null
    isFetching: boolean
}

let initialState: InitialStateType = {
    user: null,
    time: new Date().toLocaleString(),
    isFetching: false,
}

export const chatReducer = (state = initialState, action: AnyAction): InitialStateType => {
    switch (action.type) {
        case TOGGLE_FETCHING:
            return {...state, isFetching: !state.isFetching}

        case SET_USER:
            return {...state, user: action.user} 

        case SET_TIME:
            return {...state, time: action.time}

        default:
            return state
    }
} 

type toggleFetchingType = { type: typeof TOGGLE_FETCHING }
export const toggleFetching = (): toggleFetchingType => ({ type: TOGGLE_FETCHING })

type setUserType = { type: typeof SET_USER, user: user }
export const setUser = (user: user): setUserType => ({ type: SET_USER, user })

type setTimeType = { type: typeof SET_TIME, time: string }
export const setTime = (time: string): setTimeType => ({ type: SET_TIME, time })



