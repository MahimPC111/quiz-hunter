import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Topic.css';

const Topic = ({ topic }) => {
    console.log(topic)
    return (
        <div className='topic'>
            <img className='logo' src={topic.logo} alt="" />
            <div className='description'>
                <div>
                    <h5>{topic.name}</h5>
                    <p><small>Quantity: {topic.total}</small></p>
                </div>
                <button className='btn-start'>Start <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Topic;