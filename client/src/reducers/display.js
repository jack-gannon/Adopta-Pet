import {
  SET_MODAL_OPEN,
  SET_MODAL_COMPONENT,
  CLEAR_MODAL_COMPONENT,
  SET_SIDEBAR_OPEN,
  SET_SIDEBAR_COMPONENT,
  SET_ALERT_DISPLAY_OPEN,
  ADD_ALERT,
  REMOVE_ALERT,
  SET_DISPLAY_MOBILE
} from "../actions/types";

const initialState = {
  modalIsOpen: false,
  modalComponent: null,
  sidebarIsOpen: false,
  sidebarComponent: null,
  alertQueue: [],
  alertDisplayIsOpen: false,
  isMobile: false
};

export default function displayReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL_OPEN:
      return { ...state, modalIsOpen: action.payload };
    case SET_MODAL_COMPONENT: {
      return { ...state, modalComponent: action.payload };
    }
    case CLEAR_MODAL_COMPONENT: {
      return { ...state, modalComponent: null };
    }
    case SET_SIDEBAR_OPEN:
      return { ...state, sidebarIsOpen: action.payload };
    case SET_SIDEBAR_COMPONENT:
      return { ...state, sidebarComponent: action.payload };
    case SET_ALERT_DISPLAY_OPEN:
      return { ...state, alertDisplayIsOpen: action.payload };
    case ADD_ALERT:
      return { ...state, alertQueue: [...state.alertQueue, action.payload] };
    case REMOVE_ALERT:
      return {
        ...state,
        alertQueue: [
          ...state.alertQueue.filter(alert => alert !== action.payload)
        ]
      };
    case SET_DISPLAY_MOBILE:
      return { ...state, isMobile: action.payload };
    default:
      return state;
  }
}
