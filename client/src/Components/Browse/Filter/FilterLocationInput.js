import React from "react";
import { locationInput } from "../../../styles/component-modules/filter.module.css";
import TextInput from "../../Input/TextInput";
import TextInputCityState from "./TextInputCityState";

const FilterLocationInput = ({
  locationType,
  locationValue,
  setLocationValue,
  toggleDisplayStates
}) => {
  const handleLocationChange = value => {
    setLocationValue(value);
  };
  return (
    <div className={locationInput}>
      {locationType === "all" ? (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      ) : locationType === "zip" ? (
        <TextInput
          type="number"
          labelText="Enter Zip Code:"
          id="zipInputMobile"
          value={locationValue}
          action={e => handleLocationChange(e.target.value)}
        />
      ) : (
        <TextInputCityState
          locationValue={locationValue}
          setLocationValue={setLocationValue}
          toggleDisplayStates={toggleDisplayStates}
          handleLocationChange={handleLocationChange}
        />
      )}
    </div>
  );
};

export default FilterLocationInput;
