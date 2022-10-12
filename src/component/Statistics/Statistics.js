import React, { useContext } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { TopicApiContext } from '../../layout/Main/Main';



const Statistics = () => {

    // Getting Topic API Data
    const topicAPI = useContext(TopicApiContext);


    return (
        <div>
            <LineChart width={500} height={300} data={topicAPI[0]}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis dataKey='total' />
                <Tooltip />
            </LineChart>



            <h1>I"m statistic</h1>

        </div>
    );
};

export default Statistics;