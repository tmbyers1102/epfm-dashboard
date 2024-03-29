import { mapHash } from '@fullcalendar/core/internal';
import React, { useEffect, useState } from 'react'

const ClientProfileDetails = ({client, selectedClient}) => {
    const [clientContacts, setClientContacts] = useState([])

    // api stuff
    useEffect(() => {
        getData()
      }, [])
  
      const getData = async () => {
          // clients
          const clientContactResponse = await fetch('http://127.0.0.1:8000/api/client_contacts/')
          const clientContactData = await clientContactResponse.json()
          setClientContacts(clientContactData)
          // console.log(clientData)
      }


    // zoho api
    


    return (
        <>

            {/* client info/links/actions container */}
                <div className='w-full grid grid-cols-3 gap-3'>
                    <div className='col-span-1 rounded w-full'>
                {/* client info */}
                        <div className='border shadow-xl'>
                            <div className='h-48 bg-yellow-300 rounded-t p-3 shadow-lg'>
                                client logo
                            </div>
                            {/* POCs */}
                            <div className='m-3 space-y-1'>
                                {clientContacts.map((client_contact) => (
                                    <div className={(selectedClient === client_contact.related_client ? "flex items-center border-b m-1" : "hidden")}>
                                        <h1 className='mr-1'>{client_contact.name}</h1>
                                        <p className='text-gray-400 text-sm'>| {client_contact.role} || {client_contact.id}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='mt-3'>
                            {/* POCs */}
                            <div className='space-y-1'>
                                {/* individual POC */}
                                <div className='flex items-center space-x-1'>
                                    <button className='p-2 bg-blue-700 w-full rounded text-white hover:bg-blue-800'>
                                        Zoho Tickets
                                    </button>
                                    <button className='p-2 bg-blue-700 w-full rounded text-white hover:bg-blue-800'>
                                        Hubspot
                                    </button>
                                </div>
                                {/* individual POC */}
                                <div className='flex items-center space-x-1'>
                                    <button className='p-2 bg-blue-700 w-full rounded text-white hover:bg-blue-800'>
                                        Meeting Notes
                                    </button>
                                    <button className='p-2 bg-blue-700 w-full rounded text-white hover:bg-blue-800'>
                                        Account Notes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 border rounded h-64'>
                        <div>
                            <div className='flex font-bold w-full'>
                                Zoho clients test
                            </div>
                            <div>
                                client
                            </div>
                        </div>
                        {/* <table class="border-collapse w-1/2 m-1 border-t mt-6">
                            <tbody>
                                <tr>
                                    <td class="border-b border-slate-200 font-bold text-start p-1">Feed Manager</td>
                                    <td class="border-b border-slate-200 text-start p-1">Joe Schmo III</td>
                                </tr>
                                <tr>
                                    <td class="border-b border-slate-200 font-bold text-start p-1">Account Executive</td>
                                    <td class="border-b border-slate-200 text-start p-1">Cindy Smith</td>
                                </tr>
                                <tr>
                                    <td class="border-b border-slate-200 font-bold text-start p-1">Michigan</td>
                                    <td class="border-b border-slate-200 text-start p-1">Detroit</td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                </div>
                {/* client badges */}
                <div className='w-full border rounded mt-3'>i am badges section</div>

        </>
    )
};

export default ClientProfileDetails;