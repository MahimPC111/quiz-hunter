import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Topic.css';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {

    const { name, logo, total, id } = topic;

    return (
        <div className='topic'>
            <img className='logo' src={logo} alt="" />
            <div className='description'>
                <div>
                    <h5 className='zero-margin'>{name}</h5>
                    <p className='zero-margin'><small>Quantity: {total}</small></p>
                </div>
                <Link className='btn-start' to={`/quiz/${id}`} > Start < FontAwesomeIcon icon={faArrowRight} /></Link>
            </div>
        </div >
    );
};

export default Topic;