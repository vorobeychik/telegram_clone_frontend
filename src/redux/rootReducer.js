import {CHANGE_AUTHORIZATION, CHANGE_CHANNEL, CHANGE_USER_DATA, CHANGE_USER_EMAIL, USE_RIGHT_CHAT_PANEL} from "./types";
// import {combineReducers} from "redux";

const initialState = {
    selectedChannel:{},
    userChannels:[],
    rightChatPanel:false,
    authorized:false,
    user:{},
}

export const rootReducer = (state = initialState,action) => {
    switch (action.type) {
        case CHANGE_CHANNEL:
            return {
                ...state,
                selectedChannel: action.payload
            }
        case CHANGE_USER_DATA:
            return  {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }
        case CHANGE_USER_EMAIL:
            return {
                ...state,
                user: {
                    ...state.user,
                    email:action.payload

                }
            }
        case USE_RIGHT_CHAT_PANEL:
            return {
                ...state,
                rightChatPanel: !state.rightChatPanel
            }
        case CHANGE_AUTHORIZATION:
            return {
                ...state,
                authorized: action.payload
            }
        default:
            return state;
    }
}