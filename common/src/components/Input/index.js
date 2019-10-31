import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from '../../../../common/src/hooks/useOnClickOutside';
import ComponentWrapper, {
  Input,
  SelectWrapper,
  CurrentOption,
  Dropdown
} from './input.style';

const InputComponent = ({
  className,
  inputType,
  placeholder,
  selectOptions,
  inputValue,
  inputOnChange,
  selectOnUpdate,
  selectedValue,
  currency
}) => {
  const [state, setState] = useState({
    open: false,
    currency,
    selectedValue
  });

  const handleDropdown = () => {
    setState({
      ...state,
      open: !state.open
    });
  };

  const handleSelectedData = item => {
    setState({
      ...state,
      open: false,
      currency: item.title,
      selectedValue: item.value
    });
    selectOnUpdate(item.value);
  };

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setState({ ...state, open: false }));

  const addAllClasses = ['input_group'];
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ComponentWrapper className={addAllClasses.join(' ')}>
      <Input
        type={inputType}
        value={inputValue}
        placeholder={placeholder}
        onChange={inputOnChange}
        required={true}
        aria-label="input"
      />
    </ComponentWrapper>
  );
};

Input.propTypes = {
  /** className of the Input. */
  className: PropTypes.string,
  /** inputType prop for input field type. This should be a number or text. */
  inputType: PropTypes.oneOf(['number', 'text']),
  /** placeholder text for input field type. */
  placeholder: PropTypes.string,
  /** Call back function for inout onChange event. */
  inputOnChange: PropTypes.func,
  /** currency prop shoude be a string with currency name and symbol. */
  currency: PropTypes.string,
  /** selectedValue pron shoube be a currency string without symbol but in lowercase. */
  selectedValue: PropTypes.string,
  /** selectOptions prop contain a set of data in array of object form. It has 3 properties id, value and title. */
  selectOptions: PropTypes.array,
  /** It contain selected data. */
  selectOnUpdate: PropTypes.func
};

Input.defaultProps = {
  inputType: 'text',

  inputOnChange: () => {}
};

export default InputComponent;
