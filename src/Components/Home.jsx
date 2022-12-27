import React, { useEffect, useState } from 'react'
// import TaskCard from "./TaskCard";
import Airtable from "airtable";
import CreateTask from './Tasks/CreateTask';
import Tasks from './Tasks/Tasks';
import Checkins from './Checkins/Checkins';
import TaskSliderButton from './Sliders/TaskSliderButton';
import TaskEditTable from './Tasks/TaskEditTable';
import TaskTable from './Tasks/TaskTable';
import CheckinTable from './Checkins/CheckinTable';

const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)

const Home = ({selectedClient}) => {
    // const [tasks, setTasks] = useState([])

    // useEffect(() => {
    //     base("tasks")
    //         .select({ 
    //             view: "Fake Tasks",
    //             //filterByFormula: `AND({client_from_new_client}='Made Up Lamps', {client_visible})`,
    //             // filterByFormula: `{status}='Todo'`,
    //         })
    //         .eachPage((records, fetchNextPage) => {
    //             //console.log(records)
    //             setTasks(records);
    //             fetchNextPage();
    //         });
    // }, []);

    return (
        <>
            {/* <h1>Selected client: {selectedClient}</h1> */}
            <div className='flex justify-center'>
                <div className='hidden'>
                    <CheckinTable selectedClient={selectedClient} />
                </div>
                <div className='h-screen border-r border-full border-indigo-600 my-3'></div>
                <div className='w-full'>
                    {/* <Tasks /> */}
                    <TaskTable selectedClient={selectedClient} />
                </div>
            </div>
        </>
    )
};

export default Home;