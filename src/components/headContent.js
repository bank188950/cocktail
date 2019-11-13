import React from 'react';
import { Link } from 'react-router-dom';

const HeadContent = (props) => (
  <h2 className="search-head">
    <span className="search-desc">{props.desc}</span> <span className="key-desc">{props.keyword}</span>
    <div className="back-link"><Link to="/"><span>«</span>Back</Link></div>
  </h2>
)

export default HeadContent;