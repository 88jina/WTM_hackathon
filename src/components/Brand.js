import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Brand.css';


function Brand({ id, name, description, homepage, image }) {
  return (
    <Link to={{
      pathname: `/brand/${id}`,
      state: {
        name,
        description,
        homepage,
        image,
      }
      }}>
      <div className="brand">
          <img src={image} alt={name} title={name}/>
          <div className="brand__data">
            <h3 className="brand__name" key={id}>{name}</h3>
            <h5 className="brand__desc">{description}</h5>
                <p className="brand__homepage">{homepage}</p>
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