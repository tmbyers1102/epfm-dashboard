import React, { useEffect, useState, Component } from 'react'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const UpdateSliderButton = () => {
    const [state, setState] = useState({
        isTaskSliderOpen: false,
        isPaneOpenLeft: false,
    });

    return (
        <div>
            <div className="flex">

                <button onClick={() => setState({ isTaskSliderOpen: true })}>
                    <div className="flex items-center h-10 rounded-lg px-3 bg-blue-600 hover:bg-blue-700 border-solid border-2 border-sky-500 mx-3 whitespace-nowrap">
                        New Update button
                    </div>
                </button>
            </div>
            <SlidingPane
                className="bg-gradient-to-br from-blue-900 to-teal-700"
                closeIcon={<div class="hover:bg-indigo-400 rounded-full p-3"><h3>X</h3></div>}
                overlayClassName=""
                isOpen={state.isTaskSliderOpen}
                title={<div className='text-blue-600 text-center'><h2>Create A Check-in</h2></div>}
                //subtitle="Optional subtitle."
                from="bottom"
                width="full"
                height="200px"
                onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                    setState({ isTaskSliderOpen: false });
                }}
            >
                {/* put content here */}
                <div className=''>
                    <p>content here</p>
                </div>

            </SlidingPane>
        </div>
    )
};

export default UpdateSliderButton;