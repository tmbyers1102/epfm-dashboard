import React, { useEffect, useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const UpdateModal = ({isUpdateOpen}) => {

    return (
            <Transition appear show={isUpdateOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeUpdateModal}>
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
                            <Dialog.Panel className="w-full max-w-2xl h-full transform overflow-hidden rounded-xl bg-white p-6 shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="border-b border-blue-100 text-lg font-medium leading-6 text-gray-900"
                                >
                                    <div className='flex justify-between items-center gap-2 mb-2'>
                                        dhjdhjdhdi
                                    </div>
                                </Dialog.Title>
                                <div className='h-full'>
                                    <div className="mt-2 w-full h-96">
                                        dhjhduwyue
                                    </div>
                                    <div className="mt-4 flex justify-between border-t border-blue-100 pt-2">
                                        kwhdyqwudyuw
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
    )
};

export default UpdateModal;