import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageIsOpen: false,
  sendMessageIsMinimized: false,
  selectedMail: null,
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
    setSelectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const {
  openSendMessage,
  closeSendMessage,
  toggleSendMessage,
  setSelectedMail,
} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectedMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsMinimized = (state) =>
  state.mail.sendMessageIsMinimized;

export default mailSlice.reducer;
