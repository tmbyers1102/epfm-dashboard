import React, { useEffect, useState } from 'react'
import SpinnerComponent from '../Animations/SpinnerComponent';
import CheckinAPITableRow from './CheckinAPITableRow';
import CheckinTableRow from './CheckinTableRow';


const CheckinAPITable = ({selectedClient}) => {
    const [checkins, setCheckins] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(checkins?.length > 0) {
           setLoading(false)
        }
    }, [checkins])

    // api stuff
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        // tasks
        // const checkinResponse = await fetch('http://127.0.0.1:8000/api/checkins/')
        const checkinResponse = await fetch('https://tmbyers3310.pythonanywhere.com/api/checkins/', {
            method:'GET',
            mode: 'no-cors',
            // body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const checkinData = await checkinResponse.json()
        setCheckins(checkinData)
        // console.log(checkinData)
    }

    if (loading) {
        return (
            <div class="flex mt-6 pt-6 w-full mx-auto">
                <SpinnerComponent />
            </div>
        )
     } else {
        return (
            <>
                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="w-full inline-block align-middle">
                            <div className="overflow-hidden border rounded-md">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="flex text-center px-3 py-1 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Checkin
                                            </th>
                                            <th
                                                scope="col"
                                                className={!selectedClient ? "border-r border-full text-center px-3 py-1 text-xs font-bold text-left text-gray-500 uppercase" : "hidden"}
                                            >
                                                Client
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-center px-3 py-1 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Ticket
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-center px-3 py-1 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Due Date
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-center hidden 2xl:table-cell px-3 py-1 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Scheduled Start
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-center hidden 2xl:table-cell px-3 py-1 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Scheduled End
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-center hidden 2xl:table-cell px-3 py-1 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Send to Cal
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {checkins.map((checkin) => (
                                            <CheckinAPITableRow
                                                key={checkin.id}
                                                checkin={checkin}
                                                selectedClient={selectedClient}
                                            />

                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
    
            </>
        )
                                        }
    
};

export default CheckinAPITable;

