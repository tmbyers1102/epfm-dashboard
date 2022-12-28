import React, { useEffect, useState, setState } from 'react'
// import TaskCard from "./TaskCard";
import Airtable from "airtable";
import TaskTableRow from './TaskTableRow';
import SpinnerComponent from '../Animations/SpinnerComponent';
import TaskSliderButton from '../Sliders/TaskSliderButton';

const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)


const TaskTable = ({selectedClient}) => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
        if(tasks?.length > 0) {
           setLoading(false)
        }
    }, [tasks])

    useEffect(() => {
        base("tasks")
            .select({ 
                view: "Fake Tasks",
                filterByFormula: `AND({Status}='Todo')`,
                sort: [{field: 'due_date', direction: "asc"}]
            })
            .eachPage((records, fetchNextPage) => {
                //console.log(records)
                setTasks(records);
                fetchNextPage();
            });
    }, []);
    

    if (loading) {
        return (
            <div class="flex mt-6 pt-6 w-full mx-auto">
                <SpinnerComponent />
            </div>
        )
    } else {
        return (
            <>                
                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="w-full inline-block align-middle">
                            <div className="overflow-hidden border rounded-md">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="border-r border-full flex items-center text-center px-3 py-1 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Task
                                            </th>
                                            <th
                                                scope="col"
                                                className="border-r border-full text-center px-3 py-1 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Client
                                            </th>
                                            <th
                                                scope="col"
                                                className="border-r border-full text-center px-3 py-1 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Ticket
                                            </th>
                                            <th
                                                scope="col"
                                                className="border-r border-full text-center px-3 py-1 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Due Date
                                            </th>
                                            <th
                                                scope="col"
                                                className="hidden lg:table-cell border-r border-full text-center px-3 py-1 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Scheduled Start
                                            </th>
                                            <th
                                                scope="col"
                                                className="hidden lg:table-cell border-r border-full justify-center px-3 py-1 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Scheduled End
                                            </th>
                                            <th
                                                scope="col"
                                                className="hidden lg:table-cell text-center px-3 py-1 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Send to Cal
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {/* {tasks.map((values) => {
                                            const{id, Name} = values;
                                            return(
                                                <>
                                                    <div className='bg-red-400' key={id}>
                                                        <p>{tasks.id}|{id}</p>
                                                    </div>
                                                </>
                                            )
                                        })} */}

                                        {tasks.map((task) => (
                                            <>
                                                    <TaskTableRow
                                                        key={task.id}
                                                        task={task}
                                                        selectedClient={selectedClient}
                                                    />
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

export default TaskTable;

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