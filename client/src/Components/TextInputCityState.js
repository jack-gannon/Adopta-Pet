import React from "react";
import Downshift from "downshift";
import { citiesAndStates } from "../utils/citiesAndStates";
import { label } from "../styles/type.module.css";
import {
  autocompleteListOpen,
  autocompleteListClosed,
  autocompleteItem
} from "../styles/component-modules/filter.module.css";

const TextInputCityState = ({
  setLocation,
  locationValue,
  setLocationValue,
  toggleDisplayStates,
  handleLocationChange
}) => {
  return (
    <Downshift
      onChange={selection =>
        selection
          ? setLocationValue(`${selection.city}, ${selection.state}`)
          : locationValue
      }
      itemToString={item => (item ? `${item.city}, ${item.state}` : "")}
      onInputValueChange={inputValue => handleLocationChange(inputValue)}
      inputValue={locationValue === "All Locations" ? "" : locationValue}
    >
      {({
        getInputProps,
        getMenuProps,
        getItemProps,
        getLabelProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem
      }) => (
        <div>
          <label {...getLabelProps()} className={label}>
            Enter City & State:
          </label>
          <br />
          <input {...getInputProps({ onChange: handleLocationChange })} />
          <ul
            {...getMenuProps()}
            className={isOpen ? autocompleteListOpen : autocompleteListClosed}
          >
            {isOpen
              ? citiesAndStates
                  .filter(
                    item =>
                      !inputValue ||
                      item.city.includes(inputValue) ||
                      item.state.includes(inputValue)
                  )
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: `${item.city}${item.state}${index}`,
                        index,
                        item
                      })}
                      className={autocompleteItem}
                    >
                      {item.city}, {item.state}
                    </li>
                  ))
              : null}
          </ul>
          <br />
        </div>
      )}
    </Downshift>
  );
};

export default TextInputCityState;
