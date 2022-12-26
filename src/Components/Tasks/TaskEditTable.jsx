import React, { useEffect, useState, setState } from 'react'
import Airtable from "airtable";
import SpinnerComponent from '../Animations/SpinnerComponent';
import TaskEditTableRow from './TaskEditTableRow';
import TaskTableRow from './TaskTableRow';


const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
const TaskEditTable = ({}) => {



    // here is the stuff for the normal table
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
                filterByFormula: `AND({client_from_new_client}='Made Up Lamps', {client_visible})`,
                // filterByFormula: `{status}='Todo'`,
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
                                                className="flex items-center text-center px-3 py-1 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Task
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-center px-3 py-1 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Ticket
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-center px-3 py-1 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Due Date
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-center hidden 2xl:block px-3 py-1 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Scheduled Start
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-center hidden 2xl:block px-3 py-1 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Scheduled End
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-center hidden 2xl:block px-3 py-1 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Send to Cal
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {tasks.map((task) => (
                                            <TaskEditTableRow
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
    }

};

export default TaskEditTable;