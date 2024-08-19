import { createSlice } from "@reduxjs/toolkit";
import Dashboard from "../components/Dashboard";
import Owners from "../components/Owners";
import Books from "../components/Books";
import BookUpload from "../components/BookUpload";

const initialState = {
  component: <Dashboard />,
  location: "Dashboard",
};

export const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    changeComponent: (state, action) => {
      switch (action.payload) {
        case "dashboard":
          state.component = <Dashboard />;
          state.location = "Dashboard";
          break;
        case "owners":
          state.component = <Owners />;
          state.location = "Owners";
          break;
        case "books":
          state.component = <Books />;
          state.location = "Books";
          break;
        case "Book_Upload":
          state.component = <BookUpload />;
          state.location = "Book Upload";
          break;
        case "loggedOut":
          state.location = "loggedOut";
          break;
        default:
          state.component = <Dashboard />;
          state.location = "Dashboard";
      }
    },
  },
});

export const { changeComponent } = componentSlice.actions;

export default componentSlice.reducer;
