import React from 'react';
import img from './image/quiz.jpg';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData();
    // console.log(topics.data)
    return (
        <div>
            <div className='heading'>
                <img src={img} className='image' alt="" />
                <div>
                    <h2>Explore your Quiz skill!!</h2>
                    <p>When you’re playing quiz you have to keep your mind on what you are doing. This means that quizzes do help to concentrate.</p>
                </div>
            </div>
            <div className='topic-section'>
                {
                    topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;