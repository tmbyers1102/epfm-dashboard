import React, { useState, useEffect, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';
import CheckingSliderButton from './Components/Sliders/CheckinSliderButton';
import TaskSliderButton from './Components/Sliders/TaskSliderButton';
import Airtable from "airtable";
import OtherSliderButton from './Components/Sliders/OtherSliderButton';

const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)

//relating mobile dropdown menu
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  const [clients, setClients] = useState([])
  const [selectedClient, setselectedClient] = useState(null)

  useEffect(() => {
      base("Clients At-A-Glance")
          .select({ 
              view: "Fake Clients",
              //filterByFormula: `AND({Status}='Todo')`,
              //sort: [{field: 'due_date', direction: "asc"}]
          })
          .eachPage((records, fetchNextPage) => {
              //console.log(records)
              setClients(records);
              fetchNextPage();
          });
  }, []);

  const filterResult = (index) => {
      console.log(index)
      setselectedClient(index)
      
  }

  return (
    <div className=''>
      <div className='h-20 md:h-18 shadow-lg w-full bg-blue-600 text-white'>
            <Menu as="div" className="relative inline-block text-left md:hidden p-3 w-full">
              <div className='flex gap-2'>
                <Menu.Button className="w-1/8 justify-center rounded-lg bg-blue-700 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-white w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </Menu.Button>
                <button className='p-3 bg-blue-700 rounded-lg flex-initial w-full'>New Checkin</button>
                <button className='p-3 bg-blue-700 rounded-lg flex-initial w-full'>New Task</button>
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
          <div className='hidden md:flex items-center justify-between p-3'>
            <CheckingSliderButton />
            <div className='flex justify-around'>
                        <button
                            onClick={() =>
                                filterResult()
                            } className='w-36 m-2 p-3 bg-blue-700 text-xs text-white rounded-lg hover:bg-blue-800 focus:ring-2 ring-blue-100 ring-inset selected:bg-red-200'>
                              All
                        </button>
                    {clients.map((client) => (
                        <button key={client.id}
                            onClick={() =>
                                filterResult(client.id)
                            } className='w-36 m-2 p-3 bg-blue-700 text-xs text-white rounded-lg hover:bg-blue-800 focus:ring-2 ring-blue-100 ring-inset'>
                              {client.fields.Client}
                        </button>
                    ))}
            </div>
            <TaskSliderButton />
          </div>
      </div>
      <OtherSliderButton />
      <Home selectedClient={selectedClient} />
    </div>
  )
}

export default App