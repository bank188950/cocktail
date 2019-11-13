import React from 'react';

const Fave = (props) => {

  const {item,actived} = props;
  return (
    <div className="fave-icon">
      <img src={ actived? "../../images/fave2.png" : "../../images/fave1.png" } onClick={(event) => props.switchFave(event, item)} />
    </div>
  );
}

export default Fave;