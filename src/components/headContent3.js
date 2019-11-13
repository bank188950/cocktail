import React from 'react';
import { Link } from 'react-router-dom';

const HeadContent3 = (props) => (
  <h2 className="search-head">
    <span className="search-desc">Favorite</span>
    <div className="back-link"><Link to="/"><span>«</span>Back</Link></div>
  </h2>  
)

export default HeadContent3;