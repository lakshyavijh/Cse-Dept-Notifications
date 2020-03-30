import React from 'react';

import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';



const TechItem = ({ tech }) => {
    // const onDelete = () => {
    //   deleteTech(id);
    //   M.toast({ html: 'Technician deleted' });
    // };
  
    return (
      <li className='collection-item'>
        <div>
          {tech.firstName} {tech.lastName}
          <a href='#!' className='secondary-content'>
            <i className='material-icons grey-text'>delete</i>
          </a>
        </div>
      </li>
    );
  };
  
TechItem.propTypes = {
    tech: PropTypes.object.isRequired,

  };

  export default TechItem;