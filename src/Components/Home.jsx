import React, { useEffect, useState } from 'react'
// import TaskCard from "./TaskCard";
import Airtable from "airtable";
import CreateTask from './Tasks/CreateTask';
import Tasks from './Tasks/Tasks';
import Checkins from './Checkins/Checkins';
import TaskSliderButton from './Sliders/TaskSliderButton';
import TaskEditTable from './Tasks/TaskEditTable';

const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)

const Home = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        base("tasks")
            .select({ 
                view: "Fake Tasks",
                //filterByFormula: `AND({client_from_new_client}='Made Up Lamps', {client_visible})`,
                // filterByFormula: `{status}='Todo'`,
            })
            .eachPage((records, fetchNextPage) => {
                //console.log(records)
                setTasks(records);
                fetchNextPage();
            });
    }, []);

    return (
        <>
            {/* <div class="h-screen flex">
                <div class="bg-gray-600 w-64">
                    <Checkins />
                </div>
                <div class="flex-1 flex overflow-hidden">
                    <div class="flex-1 overflow-y-scroll">
                        <Tasks />
                    </div>
                </div>
            </div> */}
            {/* <TaskSliderButton />
            <TaskSlider /> */}
            <div className='flex justify-center'>
                <div className='w-1/2'>
                    <Checkins />
                </div>
                <div className='h-screen border-r border-full border-indigo-600 my-3'></div>
                <div className='w-1/2'>
                    <Tasks />
                    {/* <TaskEditTable /> */}
                </div>
            </div>
        </>
    )
};

export default Home;

            {/* <div className="grid grid-cols-4 items-center justify-center m-3 gap-4 flex">
                <div className='flex justify-center w-full'>
                    <CreateButton />
                </div>
                {tasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                            />
                        ))}
            </div> */}