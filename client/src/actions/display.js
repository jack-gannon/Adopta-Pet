import { v4 as uuidv4 } from "uuid";

import {
  SET_MODAL_OPEN,
  SET_MODAL_COMPONENT,
  CLEAR_MODAL_COMPONENT,
  SET_SIDEBAR_OPEN,
  SET_ALERT_DISPLAY_OPEN,
  ADD_ALERT,
  REMOVE_ALERT,
  SET_DISPLAY_MOBILE
} from "../actions/types";

export const setModalOpen = value => dispatch => {
  dispatch({ type: SET_MODAL_OPEN, payload: value });
};

export const openModalWithComponent = componentIdentifier => dispatch => {
  dispatch({ type: SET_MODAL_OPEN, payload: true });
  dispatch({ type: SET_MODAL_COMPONENT, payload: componentIdentifier });
};

export const closeModal = () => dispatch => {
  dispatch({ type: SET_MODAL_OPEN, payload: false });
  dispatch({ type: CLEAR_MODAL_COMPONENT });
};

export const setSidebarOpen = value => dispatch => {
  dispatch({ type: SET_SIDEBAR_OPEN, payload: value });
};

export const openAlertDisplay = () => dispatch => {
  dispatch({ type: SET_ALERT_DISPLAY_OPEN, payload: true });
};

export const closeAlertDisplay = () => dispatch => {
  dispatch({ type: SET_ALERT_DISPLAY_OPEN, payload: false });
};

export const addAlert = alertObject => dispatch => {
  alertObject.id = uuidv4();
  dispatch({ type: ADD_ALERT, payload: alertObject });
};

export const removeAlert = alertId => dispatch => {
  dispatch({ type: REMOVE_ALERT, payload: alertId });
};

export const setDisplayMobile = value => dispatch => {
  dispatch({ type: SET_DISPLAY_MOBILE, payload: value });
};
