import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const topics = useLoaderData();
    const data = topics.data;
    return (
        <div>
            <h1 className='chart-title'>Quiz Graph</h1>
            <div className='chart'>
                <ResponsiveContainer width='90%' height={400}>
                    <LineChart data={data}>
                        <Line type="monotone" dataKey="total" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;