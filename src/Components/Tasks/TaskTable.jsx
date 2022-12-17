import React, { useEffect, useState } from 'react'
// import TaskCard from "./TaskCard";
import Airtable from "airtable";
import TaskTableRow from './TaskTableRow';

const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)

const TaskTable = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        base("tasks")
            .select({ 
                view: "Fake Tasks",
                filterByFormula: `AND({client_from_new_client}='Made Up Lamps', {client_visible})`,
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
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-md">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="text-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Task
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Ticket
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Due Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-center hidden 2xl:block px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Scheduled Start
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-center hidden 2xl:block px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Scheduled End
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-center hidden 2xl:block px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Send to Cal
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {tasks.map((task) => (
                                        <TaskTableRow
                                            key={task.id}
                                            task={task}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
  
        </>
    )
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