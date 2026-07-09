import api from "./api";

export const getMessages = (room) => {
    return api.get(`/chat/${room}`);
};

export const sendMessage = (message) => {
    return api.post("/chat", message);
};