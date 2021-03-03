import {
    CHANGE_AUTHORIZATION,
    CHANGE_CHANNEL, CHANGE_SEARCHED_USER,
    CHANGE_USER_DATA,
    CHANGE_USER_EMAIL,
    USE_RIGHT_CHAT_PANEL,
    USE_SEARCH_PANEL
} from "./types";

export function changeChannel(channelName:any) {
    return {
        type: CHANGE_CHANNEL,
        payload:channelName
    }
}

export function changeAuthorization(authorization:any) {
    return {
        type: CHANGE_AUTHORIZATION,
        payload: authorization,
    }
}

export function changeUserData(userData:any) {
    return {
        type: CHANGE_USER_DATA,
        payload: userData,
    }
}

export function changeUserEmail(email:any) {
    return {
        type: CHANGE_USER_EMAIL,
        payload: email,
    }
}

export function RightChatPanel() {
    return {
        type:USE_RIGHT_CHAT_PANEL,
    }
}

export function openSearchPanel(isSearchPanelOpen:any) {
    return {
        type:USE_SEARCH_PANEL,
        payload:isSearchPanelOpen,
    }
}

export function changeSearchedUser(user:any) {
    return{
        type:CHANGE_SEARCHED_USER,
        payload:user,
    }
}

