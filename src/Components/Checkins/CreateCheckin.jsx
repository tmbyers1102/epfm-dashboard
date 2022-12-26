import React, { useRef } from "react";
import Airtable from "airtable";

const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)

function CreateCheckin({setState}) {
    const nameRef = useRef();
    const nextCheckDateRef = useRef();
    //const notesRef = useRef();


    const createCheckin = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const next_check_date = nextCheckDateRef.current.value;
        
        //const new_client = ["reca1BIsqZ4IMpsHY"];
        //const Notes = notesRef.current.value;

        base('Checkins').create(
            { name, next_check_date },
            function(err, record) {
                if (err) {
                    console.error(err);
                    console.log(notesRef.current.value);
                    return;
                }
                //alert(this.state.storedItemName);
                //alert('record created');
                //prompt('Created record', record.getId());
                location.reload()
                console.log('refresh function worked!')
            });
    };

    // create default next check date of tomorrow
    const date = new Date();
    const futureDate = date.getDate() + 1;
    date.setDate(futureDate);
    const tomorrowDateValue = date.toLocaleDateString('en-CA');

    return (
        <div class="w-full">
            <form class="bg-white border-2 border-full border-blue-600 shadow-xl rounded-xl px-3 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2  text-start" htmlFor="username">
                        Name
                    </label>
                    <input
                        class="form-input px-4 py-3 rounded-md w-full"
                        id="username"
                        type="text"
                        placeholder="Check-in Name"
                        ref={nameRef}
                        required
                    ></input>
                </div>
                <div class="mb-4">
                    <div className="flex justify-between">
                        <label class="text-gray-700 text-sm font-bold mb-2 text-start" htmlFor="username">
                            Ticket Link
                        </label>
                        <label class="text-gray-700 text-sm font-bold mb-2 text-end" htmlFor="username">
                            Use CFU
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input type="email" className="form-url px-4 py-3 rounded-md w-full"></input>
                        <input type="checkbox" className="form-checkbox rounded text-teal-500 p-6 ml-3" />
                    </div>
                    {/* <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Check-in Name"
                        ref={nameRef}
                        required
                    ></input> */}
                </div>
                {/* <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2 text-start" htmlFor="username">
                        Notes
                    </label>
                    <textarea
                        name="Text1"
                        cols="60" rows="2" 
                        className="border border-full rounded shadow w-full p-3"
                        ref={notesRef}
                    />
                </div> */}
                <div className="md:flex w-full justify-around gap-2">
                    <div class="mb-4 w-1/4">
                        <label class="block text-gray-700 text-sm font-bold mb-2 text-start" htmlFor="username">
                            Next Checkin Date
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="next check date"
                            type="date"
                            placeholder="When should you check this next?"
                            ref={nextCheckDateRef}
                            defaultValue={tomorrowDateValue}
                        ></input>
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white w-1/2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={createCheckin}
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateCheckin;