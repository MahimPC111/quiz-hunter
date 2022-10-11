import React from 'react';
import img from './image/quiz.jpg';
import img2 from './image/quiz-image.png';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData();
    // console.log(topics.data)
    return (
        <div>
            <div className='heading'>
                <div className='heading-image'>
                    <img src={img} alt="" />
                </div>
                <div className='heading-title'>
                    <h1>Explore your Quiz skill!!</h1>
                    <p>When you’re playing quiz you have to keep your mind on what you are doing. <br />This means that quizzes do help to concentrate.</p>
                </div>
            </div>
            <div className='topic-section'>
                <div>
                    <img src={img2} className='topic-image' alt="" />
                </div>
                <div className='topic-body'>
                    {
                        topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;