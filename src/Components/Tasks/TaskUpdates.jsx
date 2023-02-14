import React, { useEffect, useState } from 'react'

const TaskUpdates = ({update}) => {

    {if (update.update_date) {
        var date = update.update_date
        var abr_date = date.substring(date.length - 5)
    } else {
        null
    }}

    var update_type_color = ""
    {if (update.update_type == "Task Update") {
        update_type_color = "w-24 whitespace-nowrap py-1 bg-blue-200 text-blue-800 rounded-full"
    } else if (update.update_type == "Task Completed"){
        update_type_color = "w-24 whitespace-nowrap py-1 bg-green-200 text-green-800 rounded-full"
    } else if (update.update_type == "Task Delayed") {
        update_type_color = "w-24 whitespace-nowrap py-1 bg-red-200 text-red-800 rounded-full"
    } else  {
        update_type_color = "w-24 whitespace-nowrap py-1 bg-gray-200 text-gray-800 rounded-full"
    }}


    return (
        <>
            <div
                key={update.id}
                className='py-1 m-1 bg-gray-100 border rounded-md flex text-xs items-center'
            >
                <div className='mx-2 px-1 border-r'>
                    {abr_date}
                </div>
                <div className={update_type_color}>
                    {update.update_type}
                </div>
                <div className='mx-2 px-1 border-l'>
                    {update.title}
                </div>
            </div>
        </>
    )
};

export default TaskUpdates;