import React, { useEffect, useState } from 'react'
import TaskAPITable from './TaskAPITable';
import TaskTable from './TaskTable';
import PulseRowComponent from '../Animations/PulseRowComponent';
import TaskUpdates from './TaskUpdates';

const TaskExpanded = ({task, taskUpdates}) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(taskUpdates?.length > 0) {
           setLoading(false)
        }
    }, [taskUpdates])


    if (loading) {
        return (
            <div class="flex mt-6 pt-6 w-full mx-auto">
                <PulseRowComponent />
            </div>
        )
    } else {
        return (
            <>
                <div className='grid grid-cols-2 p-1 pl-2 w-full'>
                    <div className='col-span-1 w-full'>
                        <div>Updates</div>
                        {taskUpdates.map(update => (
                            <TaskUpdates key={update.id} update={update}/>
                        ))}
                    </div>
                    <div className='col-span-1 border-l w-full'>
                        <div>Resources</div>
                    </div>
                </div>
            </>
        )
    };
};

export default TaskExpanded;