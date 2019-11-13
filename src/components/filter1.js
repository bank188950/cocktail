import React from 'react';

const Filter1 = (props) => {

  const {handleInput} = props;
  const {handleSelect} = props;
  const {handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit}>
    <div className="filter-serch">
      <input type="text" className="filter-txt" placeholder="Search By Name" onChange={handleInput} /><br className="sw-search" />
      <select className="select-list" onChange={handleSelect}>
        <option value="">Select Category</option>
        <option value="Alcoholic">Alcoholic</option>
        <option value="Non_Alcoholic">Non Alcoholic</option>
      </select>
      <button className="submit-btn">Search</button>
    </div>
    </form>  
  );

}
  


export default Filter1;