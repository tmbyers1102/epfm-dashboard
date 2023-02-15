import React, { useEffect, useState, Fragment } from 'react'
import { Dialog, Transition, Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import UpdateSliderButton from '../Sliders/UpdateSliderButton';
import UpdateModal from '../Updates/UpdateModal';
import CreateUpdate from '../Updates/CreateUpdate';
import TaskExpanded from './TaskExpanded';
import CreateAPIUpdate from '../Updates/CreateAPIUpdate';


const TaskAPITableRow = ({ task, selectedClient }) => {
    const [taskUpdates, setTaskUpdates] = useState([])

     // api stuff
     useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        // taskUpdates
        const taskUpdateResponse = await fetch('http://127.0.0.1:8000/api/updates/')
        const taskUpdateData = await taskUpdateResponse.json()
        setTaskUpdates(taskUpdateData)
    }
    

    {if (task.due_date) {
        var due_date = task.due_date
        var abr_due_date = due_date.substring(due_date.length - 5)
    } else {
        null
    }}

    // var linkButton = [];
    // {if (task.fields.ticket_url) {
    //     linkButton = (
    //         <button className='flex items-center hover:bg-blue-400 px-2 text-xs rounded border border-blue-400 text-blue-400 hover:bg-sky-100'>
    //             Ticket
    //         </button>
    //     )
    // } else {
    //     linkButton = (
    //         <button className='flex items-center px-2 text-xs rounded bg-gray-100 border border-gray-400 text-gray-300' disabled>
    //             Ticket
    //         </button>
    //     )
    // }}

    // modal from headless ui
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    } 
    function openModal() {
        setIsOpen(true)
    }

    //change task status function
    // const changeTaskStatus = () => {
        // replace all this
    //     if (projectClicked == false ) {
    //         setClientProfileClicked(false);
    //         setProjectClicked(true);
    //     } else {
    //         setProjectClicked(false);
    //     }
    // }

    // update modal
    let [isUpdateOpen, setIsUpdateOpen] = useState(false)
    function closeUpdateModal() {
        setIsUpdateOpen(false)
    } 
    function openUpdateModal() {
        setIsUpdateOpen(true)
    }

    //task modal status select dropdown
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    var linkClassName = ''
    var modlaLinkClassName = ''
    {if (task.ticket_link) {
        linkClassName = 'border text-white text-xs bg-blue-600 rounded w-full hover:bg-blue-700'
        modlaLinkClassName = 'inline-flex justify-end rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
    } else {
        linkClassName = 'border text-white text-xs bg-blue-600 rounded w-full opacity-40 cursor-not-allowed'
        modlaLinkClassName = 'border text-white text-xs bg-blue-600 rounded w-fullinline-flex justify-end rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 opacity-40 cursor-not-allowed'
    }}


    return (
        <>
            {/* <tr className={selectedClient ? (selectedClient === String(task.fields.new_client) ? "hover:bg-gray-100" : "hidden") : "hover:bg-blue-300"} > */}
            <tr className={selectedClient ? (selectedClient === task.related_client ? "hover:bg-gray-100" : "hidden") : "hover:bg-blue-50"} >
            {/* <tr className="hover:bg-blue-300" > */}
                <a className='flex' onClick={openModal}>
                    <td className="text-start px-1 py-1 text-xs font-medium text-gray-800 whitespace-nowrap">
                        {task.title}
                    </td>
                </a>
                <td className={!selectedClient ? "text-start px-1 py-1 text-xs font-medium text-gray-800 whitespace-nowrap" : "hidden"}>
                {/* <td className="text-start px-1 py-1 text-xs font-medium text-gray-800 whitespace-nowrap"> */}
                    {task.related_client_name}
                </td>
                <td>
                    <a href={`${task.ticket_link}`} target="_blank" >
                        <button  className={linkClassName} >
                            ticket
                        </button>
                    </a>
                </td>
                <td className="px-1 py-1 text-xs text-gray-800 whitespace-nowrap">
                    {abr_due_date}
                </td>
                <td className="hidden 2xl:table-cell px-1 py-1 text-xs text-gray-800 whitespace-nowrap">
                        ###
                </td>
                <td className="hidden 2xl:table-cell px-1 py-1 text-xs whitespace-nowrap">
                        ##
                </td>
                <td className="hidden 2xl:table-cell px-6 py-1 text-xs whitespace-nowrap">

                        #
                </td>
            </tr>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    {/* The backdrop, rendered as a fixed sibling to the panel container */}
                    <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-3/4 h-full transform overflow-hidden rounded-xl bg-white p-6 shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="border-b border-blue-100 text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <div className='flex justify-between items-center gap-2 mb-2'>
                                            <p className="text-sm text-gray-800">
                                                {task.title}
                                            </p>
                                            <Menu>
                                                <Menu.Button className="inline-flex w-42 justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600">
                                                    <div className='pr-3 border-r mr-3'>
                                                        <ChevronDownIcon className="-ml-1 h-5 w-5 text-white" aria-hidden="true" />
                                                    </div>
                                                    {task.status}
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-6 top-14 z-10 mt-2 w-32 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-blue-300 text-blue-900' : 'text-blue-700 bg-blue-200',
                                                                        'block w-full px-4 py-2 text-center text-sm text-blue-800 bg-blue-200'
                                                                    )}
                                                                    >
                                                                        Todo
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-amber-300 text-gray-900' : 'text-amber-700 bg-amber-200',
                                                                        'block w-full px-4 py-2 text-center text-sm text-amber-800 bg-amber-200'
                                                                    )}
                                                                    >
                                                                        Stuck
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <form method="POST" action="#">
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                    <button
                                                                        type="submit"
                                                                        className={classNames(
                                                                        active ? 'bg-green-300 text-gray-900' : 'text-green-700 bg-green-200',
                                                                        'block w-full px-4 py-2 text-center text-sm text-green-800 bg-green-300'
                                                                        )}
                                                                    >
                                                                        Complete
                                                                    </button>
                                                                    )}
                                                                </Menu.Item>
                                                            </form>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </Dialog.Title>
                                    <div className='h-full'>
                                        <div className='flex items-center gap-2'>
                                            <TaskExpanded taskUpdates={taskUpdates}/>
                                        </div>
                                        <div className="mt-2">
                                            {/* {task.fields.client_updates ? 
                                                <div className='flex flex-wrap gap-2'>
                                                    <p className="text-sm text-start text-gray-500 w-full">
                                                        Updates
                                                    </p>
                                                    <div>
                                                        {taskUpdates.map((update) => {
                                                            return task.id === update.fields.associated_task_record_id_string_copy ? (
                                                                <>
                                                                    <div key={update.id} className='flex mt-1'>
                                                                        <div className='px-2 py-1 bg-gray-700 text-white whitespace-nowrap rounded-l text-xs'>
                                                                            {update.fields.created}
                                                                        </div>
                                                                        <div className='px-2 py-1 bg-blue-200 whitespace-nowrap text-xs'>
                                                                            {update.fields.update_type}
                                                                        </div>
                                                                        <div className='px-2 py-1 bg-blue-100 whitespace-nowrap rounded-r text-xs'>
                                                                            {update.fields.update}
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                null
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            : null 
                                            } */}
                                        </div>
                                        <div className="mt-4 flex justify-between border-t border-blue-100 pt-2">
                                            <a href={task.ticket_link} target="_blank">
                                                <button
                                                    type="button"
                                                    className={modlaLinkClassName}
                                                >
                                                Ticket
                                                </button>
                                            </a>
                                            <button
                                            type="button"
                                            className="inline-flex items-center justify-end gap-1 rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={openUpdateModal}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>

                                                <span>Add Update</span>

                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            {/* end of normal modal */}
            {/* start of update modal */}
            <Transition appear show={isUpdateOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeUpdateModal}>
                    {/* The backdrop, rendered as a fixed sibling to the panel container */}
                    <div className="fixed inset-0 bg-blue/70" aria-hidden="true" />
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-800"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-end px-36 py-12 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-3/4 h-full transform overflow-hidden rounded-xl bg-white p-6 transition-all">
                                <div className='h-full'>
                                    <div className="my-2 w-full h-64 z-30">
                                        <CreateAPIUpdate />
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            {/* end of update modal */}
        </>
    )
};

export default TaskAPITableRow;