import React, { useState, useEffect, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';
import CheckingSliderButton from './Components/Sliders/CheckinSliderButton';
import TaskSliderButton from './Components/Sliders/TaskSliderButton';
// import Airtable from "airtable";
import OtherSliderButton from './Components/Sliders/OtherSliderButton';
import Projects from './Components/Projects/Projects';
import ClientProfile from './Components/ClientProfile/ClientProfile';

// const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)

//relating mobile dropdown menu
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  const [clients, setClients] = useState([])
  const [selectedClient, setSelectedClient] = useState(null)
  const [projectClicked, setProjectClicked] = useState(false)
  const [clientProfileClicked, setClientProfileClicked] = useState(false)

    // api stuff
    useEffect(() => {
      getData()
    }, [])

    const getData = async () => {
        // clients
        // const clientResponse = await fetch('http://127.0.0.1:8000/api/clients/')
        const clientResponse = await fetch('https://tmbyers3310.pythonanywhere.com/api/clients/')
        const clientData = await clientResponse.json()
        setClients(clientData)
        // console.log(clientData)
    }

  // useEffect(() => {
  //     base("Clients At-A-Glance")
  //         .select({ 
  //             view: "Fake Clients",
  //             //filterByFormula: `AND({Status}='Todo')`,
  //             //sort: [{field: 'due_date', direction: "asc"}]
  //         })
  //         .eachPage((records, fetchNextPage) => {
  //             //console.log(records)
  //             setClients(records);
  //             fetchNextPage();
  //         });
  // }, []);

  const filterResult = (index) => {
      setSelectedClient(index)
  }

  const projectToggle = () => {
    if (projectClicked == false ) {
      setClientProfileClicked(false);
      setProjectClicked(true);
    } else {
      setProjectClicked(false);
    }
  }
  
  const clientProfileToggle = () => {
    if (clientProfileClicked == false ) {
      setProjectClicked(false)
      setClientProfileClicked(true)
    } else {
      setClientProfileClicked(false);
    }
  }

  return (
    <div className=''>
      <div className='h-16 md:h-18 shadow-lg w-full bg-blue-600 text-white flex md:block'>
            {/* mobile view */}
            <Menu as="div" className="relative inline-block text-left md:hidden p-3 w-full">
              <div className=''>
                <Menu.Button className="justify-center rounded-lg bg-blue-700 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-white w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </Menu.Button>
                {/* <button className='p-3 bg-blue-700 rounded-lg flex-initial w-full'>New Checkin</button>
                <button className='p-3 bg-blue-700 rounded-lg flex-initial w-full'>New Task</button> */}
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Account settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          License
                        </a>
                      )}
                    </Menu.Item>
                    <form method="POST" action="#">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          <div className='flex items-center justify-between p-1 bg-blue-600 h-16'>
            <CheckingSliderButton />
            <div className='hidden md:flex justify-around align-center'>
                    <button
                        onClick={() =>
                            filterResult()
                        } className='w-24 m-1 p-3 bg-blue-700 text-xs text-white rounded-lg hover:bg-blue-500 focus:bg-blue-800 focus:ring-2 ring-blue-100 ring-inset'>
                          All
                    </button>
                    {clients.map((client, {active}) => (
                        <button key={client.id}
                          as={Fragment}
                          onClick={() => (filterResult(client.id), selectedClient)}
                          className='w-56 m-1 px-3 bg-blue-700 text-xs text-white rounded-lg hover:bg-blue-500 focus:bg-blue-800 focus:ring-2 ring-blue-100 ring-inset flex items-center justify-center'
                        >
                          {selectedClient === client.id ? (
                              <div className='flex items-center justify-center'>
                                <button
                                  className='px-2 py-1 rounded bg-blue-600 hover:bg-blue-700 hover: hover:text-yellow-400 mr-3'
                                  onClick={() => (clientProfileToggle())}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                    </svg>
                                </button>
                                <div className='whitespace-nowrap'>{client.name}</div>
                                <button
                                  className='px-2 py-1 rounded bg-blue-600 hover:bg-blue-700 hover: hover:text-yellow-400 ml-3'
                                  onClick={() => (projectToggle())}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                                    </svg>
                                </button>
                              </div>
                            ) : (
                              <div>
                                <div className='py-1'>
                                  {client.name}
                                </div>
                              </div>
                            )
                          }
                              
                        </button>
                    ))}
            </div>
            <TaskSliderButton />
          </div>
      </div>
      <OtherSliderButton />
      {projectClicked ? (
        <Projects setProjectClicked={setProjectClicked} />
      ) : clientProfileClicked ? (
        <ClientProfile
          setClientProfileClicked={setClientProfileClicked}
          selectedClient={selectedClient}
          clients={clients}
        />
      ) : (
        <Home selectedClient={selectedClient} />
      )}
    </div>
  )
  
}

export default App