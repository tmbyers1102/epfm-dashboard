import React, { useEffect, useState } from 'react'

const TaskTableRow = ({ task, selectedClient }) => {
    var due_date = task.fields.due_date
    const abr_due_date = due_date.substring(due_date.length - 5)

    var linkButton = [];
    {if (task.fields.ticket_url) {
        linkButton = (
            <button className='flex items-center hover:bg-blue-400 px-2 text-xs rounded border border-blue-400 text-blue-400 hover:bg-sky-100'>
                Ticket
            </button>
        )
    } else {
        linkButton = (
            <button className='flex items-center px-2 text-xs rounded bg-gray-100 text-gray-300' disabled>
                Ticket
            </button>
        )
    }}

    return (
        <>
            <tr className={selectedClient ? (selectedClient === String(task.fields.new_client) ? "hover:bg-gray-100" : "hidden") : "hover:bg-blue-300"} >
                <td className="text-start px-1 py-1 text-xs font-medium text-gray-800 whitespace-nowrap">
                    {task.fields.Name}
                </td>
                <td className="text-start px-1 py-1 text-xs font-medium text-gray-800 whitespace-nowrap">
                    {task.fields.client_from_new_client}
                </td>
                <td className="px-1 py-1 text-sm text-gray-800 whitespace-nowrap">
                    <a href={task.fields.ticket_url} target="_blank">
                        {linkButton}
                    </a>
                </td>
                <td className="px-1 py-1 text-sm text-gray-800 whitespace-nowrap">
                    {abr_due_date}
                </td>
                <td className="px-1 py-1 text-sm text-gray-800 whitespace-nowrap">
                    jonne62@gmail.com
                </td>
                <td className="px-1 py-1 text-sm font-medium text-right whitespace-nowrap">
                    <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                    >
                        Edit
                    </a>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                        className="text-red-500 hover:text-red-700"
                        href="#"
                    >
                        Delete
                    </a>
                </td>
            </tr>   
        </>
    )
};

export default TaskTableRow;