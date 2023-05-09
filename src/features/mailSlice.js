import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageIsOpen: false,
  sendMessageIsMinimized: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsMinimized = false;
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    toggleSendMessage: (state) => {
      state.sendMessageIsMinimized = !state.sendMessageIsMinimized;
    },
  },
});

export const { openSendMessage, closeSendMessage, toggleSendMessage } =
  mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectSendMessageIsMinimized = (state) =>
  state.mail.sendMessageIsMinimized;

export default mailSlice.reducer;
