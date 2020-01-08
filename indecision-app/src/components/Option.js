import React from 'react';

const Option = (props) => {
  return (
    <p>
      {props.option}
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.option)
        }}
      >
        remove
      </button>
    </p>
  );
};

export default Option;