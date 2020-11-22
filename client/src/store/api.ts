import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const chatInstanceConfig: AxiosRequestConfig = {
    baseURL: 'https://fakeapi.com',
    headers: {
        'apikey': ''
    }
}

const chatInstance: AxiosInstance = axios.create( chatInstanceConfig );

type ChatAPIType = {
    getMessages: () => {}
}

export const ChatAPI: ChatAPIType = {
    getMessages() {
        return chatInstance.get(`messages`)
    }
}