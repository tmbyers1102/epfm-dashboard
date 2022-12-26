import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';
import CheckingSliderButton from './Components/Sliders/CheckinSliderButton';
import TaskSliderButton from './Components/Sliders/TaskSliderButton';
import Airtable from "airtable";

const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)


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
      <div className='h-18 shadow-lg w-full bg-blue-600 text-white'>
          <div className='flex items-center justify-between p-3'>
            <CheckingSliderButton />
            <div className='flex justify-around'>
                        <button
                            onClick={() =>
                                filterResult()
                            } className='w-36 m-2 p-3 bg-blue-700 text-xs text-white rounded-lg hover:bg-blue-800 focus:ring-2 ring-blue-100 ring-inset'>
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
      <Home selectedClient={selectedClient} />
    </div>
  )
}

export default App