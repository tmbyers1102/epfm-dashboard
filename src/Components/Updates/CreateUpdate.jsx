import React, { useRef } from "react";
import Airtable from "airtable";
import { Dialog, Transition } from '@headlessui/react'


const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)

function CreateUpdate({task, taskUpdate}) {
    const updateRef = useRef();
    const notesRef = useRef();
    const updateTypeRef = useRef();
    const clientVisibleRef = useRef();
    const clientRef = useRef();
    const relatedTaskRef = useRef();

    const createUpdate = (e) => {
        e.preventDefault();
        const update = updateRef.current.value;
        const notes = notesRef.current.value;
        const update_type = updateTypeRef.current.value;
        const client_visible = true;
        const client = task.fields.new_client;
        const related_task = [task.id];

        base('client_updates').create(
            { update, notes, update_type, client, client_visible, related_task },
            function(err, record) {
                if (err) {
                    console.error(err);
                    return;
                }
                //alert(this.state.storedItemName);
                //alert('record created');
                //prompt('Created record', record.getId());
                location.reload()
                console.log('refresh function worked!')
            });
    };


    return (
        <div class="w-full">
            <form class="">
                {/* <h1 className='text-2xl font-bold text-center'>Create Task</h1> */}
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2 text-start" htmlFor="username">
                        Update
                    </label>
                    <input
                        class="shadow rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        type="text"
                        placeholder="Type update here"
                        ref={updateRef}
                        required
                    ></input>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2 text-start" htmlFor="username">
                        Notes
                    </label>
                    <textarea
                        name="Text1"
                        cols="60" rows="2" 
                        className="border border-full rounded shadow w-full p-3"
                        placeholder="Explain update further"
                        ref={notesRef}
                    />
                </div>
                <div class="flex items-center justify-between gap-2">
                    <div class="mb-4 w-1/2">
                        <label class="block text-gray-700 text-sm font-bold text-start" htmlFor="username">
                            Update Type
                        </label>
                        <select
                            name="Text1"
                            className="border border-full rounded shadow w-full px-3"
                            placeholder="Explain update further"
                            ref={updateTypeRef}
                        >
                            <option value="Task Update">Task Update</option>
                            <option value="Task Delayed">Task Delayed</option>
                            <option value="Task Completed">Task Completed</option>
                        </select>
                    </div>
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white w-1/2 font-bold py-2 px-4 mt-1 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={createUpdate}
                    >
                        Add Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateUpdate;