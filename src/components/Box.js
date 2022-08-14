import React from 'react';
import '../style/box.css';

const Box = ({ value, handleValue }) => {
  const style = value === 'X' ? 'x box' : 'o box';

  return (
    <div className={style} onClick={handleValue}>
      {value}
    </div>
  );
};
export default Box;
