import React, { useEffect, useState } from 'react'
import Airtable from "airtable";
import CheckinTableRow from './CheckinTableRow';

const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)

const CheckinTable = () => {
    const [checkins, setCheckins] = useState([])
    useEffect(() => {
        base("Checkins")
          .select({ 
            view: "Fake Checkins",
            // filterByFormula: `AND({Archive}='')`,
            // filterByFormula: `{status}='Todo'`,
          })
          .eachPage((records, fetchNextPage) => {
            console.log(records)
            setCheckins(records);
            fetchNextPage();
          });
      }, []);

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
                                            className="text-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Checkin
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Ticket
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Due Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-center hidden 2xl:block px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Scheduled Start
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-center hidden 2xl:block px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Scheduled End
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-center hidden 2xl:block px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Send to Cal
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {checkins.map((checkin) => (
                                        <CheckinTableRow
                                            key={checkin.id}
                                            checkin={checkin}
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
};

export default CheckinTable;