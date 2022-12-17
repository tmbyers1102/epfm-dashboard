import React, { useRef } from "react";
import Airtable from "airtable";

const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)

function CreateTask() {
    const nameRef = useRef();
    const dueDateRef = useRef();
    const scheduledStartRef = useRef();
    const scheduledEndRef = useRef();
    const statusRef = useRef();
    // const clientVisibleRef = useRef();
    // const newClientRef = useRef();
    const notesRef = useRef();


    const createTask = (e) => {
        e.preventDefault();
        const Name = nameRef.current.value;
        const due_date = dueDateRef.current.value;
        const scheduled_start = scheduledStartRef.current.value;
        const scheduled_end = scheduledEndRef.current.value;
        // const Status = statusRef.current.value;
        const Status = "Todo";
        const client_visible = true;
        const new_client = ["reca1BIsqZ4IMpsHY"];
        const Notes = notesRef.current.value;
        const send_to_calendar = true;

        base('Tasks').create(
            { Name, due_date, scheduled_start, scheduled_end, Status, new_client, client_visible, send_to_calendar },
            function(err, record) {
                if (err) {
                    console.error(err);
                    console.log(notesRef.current.value);
                    return;
                }
                prompt('Created record', record.getId());
            });
    };
    return (
        <div class="w-full">
            <form class="bg-white border-2 border-full border-blue-600 shadow-xl rounded-xl px-8 pt-6 pb-8 mb-4">
                <h1 className='text-2xl font-bold text-center'>Create Task</h1>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2  text-start" for="username">
                        Name
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Task Name"
                        ref={nameRef}
                        required
                    ></input>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2 text-start" for="username">
                        Notes
                    </label>
                    <textarea
                        name="Text1"
                        cols="60" rows="2" 
                        className="border border-full rounded shadow w-full p-3"
                        ref={notesRef}
                        />
                    {/* <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="textarea"
                        placeholder="1 or 0"
                        ref={clientVisibleRef}
                    ></input> */}
                </div>
                <div className="md:flex w-full justify-around gap-2">
                    <div class="mb-4 w-full">
                        <label class="block text-gray-700 text-sm font-bold mb-2 text-start" for="username">
                            Due Date
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="date"
                            placeholder="Task Due Date"
                            ref={dueDateRef}
                        ></input>
                    </div>
                    <div class="mb-4 w-full">
                        <label class="block text-gray-700 text-sm font-bold mb-2 text-start" for="username">
                            Scheduled Start
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="datetime-local"
                            placeholder="Task Due Date"
                            ref={scheduledStartRef}
                        ></input>
                    </div>
                    <div class="mb-4 w-full">
                        <label class="block text-gray-700 text-sm font-bold mb-2 text-start" for="username">
                            Scheduled End
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="datetime-local"
                            placeholder="Task Due Date"
                            ref={scheduledEndRef}
                        ></input>
                    </div>
                </div>
                {/* <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Status
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Todo"
                        ref={statusRef}
                    ></input>
                </div> */}
                {/* <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Client Visibility
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="checkbox"
                        placeholder="true"
                        ref={clientVisibleRef}
                    ></input>
                </div> */}
                {/* <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3"></div>
                    <label class="md:w-2/3 block text-gray-500 font-bold">
                        <input
                            class="mr-2 leading-tight"
                            type="checkbox"
                            ref={clientVisibleRef}
                        ></input>
                        <span class="text-sm">
                            Make Visible to Client
                        </span>
                    </label>
                </div> */}
                {/* <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Client reca1BIsqZ4IMpsHY
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="reca1BIsqZ4IMpsHY"
                        ref={newClientRef}
                    ></input>
                </div> */}
                <div class="flex items-center justify-center">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white w-1/2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={createTask}
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateTask;