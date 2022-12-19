import React, { useEffect, useState } from 'react'

const CheckinTableRow = ({ checkin }) => {
    var check_date = checkin.fields.next_check_date
    const abr_check_date = check_date.substring(check_date.length - 5)

    var linkButton = [];
    {if (checkin.fields.ticket_url) {
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
            <tr className='hover:bg-gray-100'>
                <td className="text-start px-1 py-1 text-xs font-medium text-gray-800 whitespace-nowrap">
                    {checkin.fields.name}
                </td>
                <td className="px-1 py-1 text-sm text-gray-800 whitespace-nowrap">
                    <a href={checkin.fields.ticket_url} target="_blank">
                        {linkButton}
                    </a>
                </td>
                <td className="px-1 py-1 text-sm text-gray-800 whitespace-nowrap">
                    {abr_check_date}
                </td>
                <td className="hidden 2xl:block px-1 py-1 text-sm text-gray-800 whitespace-nowrap">
                    jonne62@gmail.com
                </td>
                <td className="hidden 2xl:block px-1 py-1 text-sm font-medium text-right whitespace-nowrap">
                    <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                    >
                        Edit
                    </a>
                </td>
                <td className="hidden 2xl:block px-1 py-1 text-sm font-medium text-right whitespace-nowrap">
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

export default CheckinTableRow;