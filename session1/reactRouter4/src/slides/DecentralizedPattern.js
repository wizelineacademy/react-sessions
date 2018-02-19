import React from 'react';
import {
  nestedLayoutAfter,
  nestedLayoutBefore,
} from '../images';

const DecentralizedPattern = () => (
  <div className="slide-container">
    <h1>Decentralized Pattern (#step6-decentralized-pattern)</h1>
    <h3>Change from this:</h3>
    <img src={nestedLayoutBefore} />
    <h3>To this:</h3>
    <p className="comment">// Add routes exclusiveness</p>
    <p className="comment">// Add components section</p>
    <p className="comment">// Add components navigation</p>
    <p className="comment">// Add Not Found page</p>
    <p className="comment">// Add Redirect</p>
    <img src={nestedLayoutAfter} />
    
  </div>
);

export default DecentralizedPattern;
