import React, { createContext, useEffect, useState} from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';

export const TopicApiContext = createContext('data')
const Main = () => {

    const [topics, setTopics] = useState([]);


    // Quiz Topic Data loading from the api
    const {data} = useLoaderData();
    

    // Set Quiz topic into Use State.
    useEffect(()=> {
        setTopics(data);
    },[])


    return (
        <div>
            <TopicApiContext.Provider value={[topics,setTopics]}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            </TopicApiContext.Provider>
       
        </div>
    );
};

export default Main;