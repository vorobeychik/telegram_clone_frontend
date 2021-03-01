import {CHANGE_AUTHORIZATION, CHANGE_CHANNEL, CHANGE_USER_DATA, CHANGE_USER_EMAIL, USE_RIGHT_CHAT_PANEL} from "./types";

export function changeChannel(channelName) {
    return {
        type: CHANGE_CHANNEL,
        payload:channelName
    }
}

export function changeAuthorization(authorization) {
    return {
        type: CHANGE_AUTHORIZATION,
        payload: authorization,
    }
}

export function changeUserData(userData) {
    return {
        type: CHANGE_USER_DATA,
        payload: userData,
    }
}

export function changeUserEmail(email) {
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