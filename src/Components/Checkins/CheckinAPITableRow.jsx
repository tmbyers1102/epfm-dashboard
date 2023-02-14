import React, { useEffect, useState } from 'react'

const CheckinAPITableRow = ({ checkin, selectedClient }) => {
    var check_date = checkin.next_check_date
    const abr_check_date = check_date.substring(check_date.length - 5)

    // var linkButton = [];
    // {if (checkin.fields.ticket_url) {
    //     linkButton = (
    //         <button className='flex items-center hover:bg-blue-400 px-2 text-xs rounded border border-blue-400 text-blue-400 hover:bg-sky-100'>
    //             Ticket
    //         </button>
    //     )
    // } else {
    //     linkButton = (
    //         <button className='flex items-center px-2 text-xs rounded bg-gray-100 text-gray-300' disabled>
    //             Ticket
    //         </button>
    //     )
    // }}

    return (
        <>
            <tr className={selectedClient ? (selectedClient === checkin.related_client ? "hover:bg-blue-100" : "hidden") : "hover:bg-blue-200"}>
            {/* <tr className=""> */}
                <td className="text-start px-1 py-1 text-xs font-medium text-gray-800 whitespace-nowrap">
                    {checkin.title}
                </td>
                <td className={!selectedClient ? "text-start px-1 py-1 text-xs font-medium text-gray-800 whitespace-nowrap" : "hidden"}>
                    {checkin.related_client_name}
                </td>
                <td className="px-1 py-1 text-xs text-gray-800 whitespace-nowrap">
                    <a href='#' target="_blank">
                        link
                    </a>
                </td>
                <td className="px-1 py-1 text-xs text-gray-800 whitespace-nowrap">
                    {abr_check_date}
                </td>
                <td className="hidden 2xl:table-cell px-1 py-1 text-xs text-gray-800 whitespace-nowrap">
                    ###
                </td>
                <td className="hidden 2xl:table-cell px-1 py-1 text-xs whitespace-nowrap">
                    ##
                </td>
                <td className="hidden 2xl:table-cell px-1 py-1 text-xs whitespace-nowrap">
                    #
                </td>
            </tr>   
        </>
    )
};

export default CheckinAPITableRow;