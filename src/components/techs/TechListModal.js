import React, { useState,useEffect } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import TechItem from './TechItem';

// import { getLogs } from '../../actions/logActions';

const TechListModal = ()=> {

    const [techs,setTechs] =useState([]);
    const [loading,setLoading] =useState(0);

    useEffect(() => {
      getTechs();
      // eslint-disable-next-line
    }, []);

  

    const getTechs = async() => {
        setLoading(true);
        const res=await fetch('/techs');
        const data = await res.json();

        setTechs(data);
        setLoading(false);
    }

  return (
    
    <div id='tech-list-modal' className='modal'>
    <div className='modal-content'>
      <h4>Technician List</h4>
      <ul className='collection'>
        {!loading &&
        
          techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
      </ul>
    </div>
  </div>
);
};


export default TechListModal;