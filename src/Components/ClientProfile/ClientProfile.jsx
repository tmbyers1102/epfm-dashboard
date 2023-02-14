import React, { useEffect, useState } from 'react'
import ClientProfileDetails from './ClientProfileDetails';

const ClientProfile = ({setClientProfileClicked, selectedClient, clients}) => {


    return (
        <>
            {clients.map(client => (
                <div className={(selectedClient === client.id ? "p-6" : "hidden")}>
                    <div className=' flex justify-between items-center'>
                    {/* title container */}
                        <h1 className='text-3xl m-3 whitespace-nowrap'>{client.name}</h1>
                        <button onClick={() => (setClientProfileClicked(false))}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                className="w-12 h-12 hover:text-blue-600 hover:scale-125 hover:animate-spin">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                {/* client info/links/actions container */}
                    <ClientProfileDetails selectedClient={selectedClient} client={client} />

                </div>
            ))}
        </>
    )
};

export default ClientProfile;