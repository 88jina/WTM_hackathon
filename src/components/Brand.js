import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Brand.css';


function Brand({ id, name, description, homepage }) {
  return (
    <Link to={{
      pathname: `/brand/${id}`,
      state: {
        name,
        description,
        homepage,
      }
      }}>
      <div className="brand">
          {/* <img src={image} alt={name} title={name}/> */}
          <div className="brand__data">
            <p className="brand__name" key={id}>{name}</p>
            <p className="brand__homepage">{homepage}</p>
            <p className="brand__desc">{description}</p>
        </div>
      </div>
     </Link>
    );
}

Brand.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    homepage: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Brand;