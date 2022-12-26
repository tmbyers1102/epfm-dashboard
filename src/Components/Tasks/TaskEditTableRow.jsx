import React, { useEffect, useState, setState } from 'react'
import EditRowName from './EditRowName';

const TaskEditTableRow = ({
    task,
    key,
    ...props
}) => {

    // State for the input
    const [thing, setThing] = useState("");
    const [thing2, setThing2] = useState("");

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
            <tr {...props} className='hover:bg-gray-100'>
                <EditRowName
                    key={key}
                    task={task}
                    // put all the stuff from the parent into here
                    thing={thing}
                    thing2={thing2}
                    placeholder={task.fields.Name}
                    type="input"
                    className="w-full"
                >
                    <input
                        type="text"
                        name="thing"
                        placeholder={task.fields.Name}
                        value={task.fields.Name}
                        onChange={e => setThing(e.target.value)}
                        className="text-start px-1 py-1 text-xs font-medium text-blue-800 whitespace-nowrap"
                    />
                </EditRowName>
                <td className="px-1 py-1 text-sm text-gray-800 whitespace-nowrap">
                    <a href={task.fields.ticket_url} target="_blank">
                        {linkButton}
                    </a>
                </td>
                <td className="px-1 py-1 text-sm text-gray-800 whitespace-nowrap">
                    {abr_due_date}
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
                <td className="hidden 2xl:block px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
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

//   return (
//     <section {...props}>
//       {isEditing ? (
//         <div
//           onBlur={() => setEditing(false)}
//           onKeyDown={e => handleKeyDown(e, type)}
//           className="bg-blue-400"
//         >
//             <span className='flex'>
//                 <div className='bg-gray-100 border border-full p-1 w-full'>{children}</div>
//             </span>
//         </div>
//       ) : (
//         <div
//           onClick={() => setEditing(true)}
//         >
//           <span className='flex'>
//             <div className='bg-gray-100 p-1 w-full'>{thing || placeholder || "Editable content"}</div>
//           </span>
//         </div>
//       )}
//     </section>
//   );
//   return (
//     <section {...props}>
//       {isEditing ? (
//         <div
//           onBlur={() => setEditing(false)}
//           onKeyDown={e => handleKeyDown(e, type)}
//           className="bg-blue-400"
//         >
//             <span className='flex'>
//                 <div className='bg-gray-100 border border-full p-1 w-full'>{children}</div>
//             </span>
//         </div>
//       ) : (
//         <div
//           onClick={() => setEditing(true)}
//         >
//           <span className='flex'>
//             <div className='bg-gray-100 p-1 w-full'>{thing || placeholder || "Editable content"}</div>
//           </span>
//         </div>
//       )}
//     </section>
//   );

export default TaskEditTableRow;