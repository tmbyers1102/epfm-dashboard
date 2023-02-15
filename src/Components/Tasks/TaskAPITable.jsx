import React, { useEffect, useState, setState } from 'react'
// import TaskCard from "./TaskCard";
import TaskTableRow from './TaskTableRow';
import SpinnerComponent from '../Animations/SpinnerComponent';
import TaskSliderButton from '../Sliders/TaskSliderButton';
import TaskAPITableRow from './TaskAPITableRow';


const TaskAPITable = ({selectedClient}) => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(tasks?.length > 0) {
           setLoading(false)
        }
    }, [tasks])

    // api stuff
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        // tasks
        // const taskResponse = await fetch('http://127.0.0.1:8000/api/tasks/')
        const taskResponse = await fetch('https://tmbyers3310.pythonanywhere.com/api/tasks/', {
            method:'GET',
            mode: 'no-cors',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const taskData = await taskResponse.json()
        setTasks(taskData)
        // console.log(taskData)
    }

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
                                                className={!selectedClient ? "border-r border-full text-center px-3 py-1 text-xs font-bold text-left text-gray-500 uppercase" : "hidden"}
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
                                                className="hidden 2xl:table-cell border-r border-full text-center px-3 py-1 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Scheduled Start
                                            </th>
                                            <th
                                                scope="col"
                                                className="hidden 2xl:table-cell border-r border-full justify-center px-3 py-1 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Scheduled End
                                            </th>
                                            <th
                                                scope="col"
                                                className="hidden 2xl:table-cell text-center px-3 py-1 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Send to Cal
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {tasks.map(task => (
                                            <>
                                                <TaskAPITableRow
                                                    key={task.id}
                                                    task={task}
                                                    selectedClient={selectedClient}
                                                />
                                            {/* <div key={e.id} class="container p-5 text-start w-1/4 bg-orange-50 border-2 border-orange-500 rounded-xl shadow-xl hover:blur-sm">
                                                <h6 className='text-xs text-gray-400'>Title</h6>
                                                <h3 className='font-heavy text-sm mb-3'>{e.id}|{e.title}</h3>
                                            </div> */}
                                            </>
                                        ))}
                                        
                                        {/* {tasks.map((task) => (
                                            <>
                                                <TaskTableRow
                                                    key={task.id}
                                                    task={task}
                                                    selectedClient={selectedClient}
                                                />
                                            </>
                                        ))} */}
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

export default TaskAPITable;