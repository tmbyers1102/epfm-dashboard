import React, { useEffect, useState } from 'react'
import TaskTable from './TaskTable';

const Tasks = () => {

    return (
        <>
            <div className='justify-center p-1 pl-2'>
                <TaskTable />
            </div>
        </>
    )
};

export default Tasks;