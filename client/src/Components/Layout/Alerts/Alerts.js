import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AlertsDisplay from "./AlertsDisplay";

const Alerts = () => {
  const alertQueue = useSelector(state => state.display.alertQueue);

  useEffect(() => {});

  return <AlertsDisplay alerts={alertQueue} />;
};

export default Alerts;
