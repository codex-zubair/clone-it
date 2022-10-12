import React, { useContext } from 'react';
import { TopicApiContext } from '../../layout/Main/Main';
import TopicCard from '../TopicCard/TopicCard';

const Home = () => {

    // Quiz Topic data
    const [topics] = useContext(TopicApiContext);




    return (
        <div>
            {topics.map(topic=> <TopicCard key={topic.id} topic = {topic}></TopicCard>)}
        </div>
    );
};

export default Home;