import {
    CHANGE_AUTHORIZATION,
    CHANGE_CHANNEL,
    CHANGE_SEARCHED_USER,
    CHANGE_USER_DATA,
    CHANGE_USER_EMAIL,
    USE_RIGHT_CHAT_PANEL,
    USE_SEARCH_PANEL
} from "./types";
import {IStore} from "../interfaces/IStore";

const initialState:IStore = {
    selectedChannel:{
        name:'',
        lastMsg:'',
        newMsg:0,
        lastMsgTime:'',
        isOnline:false,
        lastTimeOnline:'',
        messages:[],
        id:0,
        userName:'',
        mobile:'',
    },
    rightChatPanel:false,
    authorized:false,
    user:{
                        tag:'',
                        mobile:'',
                        name:'',
                        isOnline:false,
                        code:0,
                        email:'',
                        userChannels:[],
                        id:0,
    },
    searchPanel:false,
    searchedUser:[],
};

export  function rootReducer(state = initialState, action:any): IStore {
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
            };
        case CHANGE_SEARCHED_USER:
            if(!action.payload){
                return {
                    ...state,
                    searchedUser:  [],
                };
            }else{
                return {
                    ...state,
                    searchedUser:  [action.payload],
                };
            }
        case USE_SEARCH_PANEL:
            return {
                ...state,
                searchPanel: action.payload,
            };
        default:
            return state;
    }
}

