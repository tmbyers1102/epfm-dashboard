import React, { useEffect, useState, Component } from 'react'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import CreateCheckin from '../Checkins/CreateCheckin';

const CheckingSliderButton = () => {
    const [state, setState] = useState({
        isTaskSliderOpen: false,
        isPaneOpenLeft: false,
    });

    return (
        <div>
            <div className="flex">

                <button onClick={() => setState({ isTaskSliderOpen: true })}>
                    <div className="flex items-center h-10 rounded-lg px-3 bg-blue-600 hover:bg-blue-700 border-solid border-2 border-sky-500 mx-3 whitespace-nowrap">
                        New Checkin
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
                from="right"
                width="700px"
                onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                    setState({ isTaskSliderOpen: false });
                }}
            >
                {/* put content here */}
                <div className=''>
                    <CreateCheckin setState={setState} />
                </div>

            </SlidingPane>
            <SlidingPane
                closeIcon={<div>Some div containing custom close icon.</div>}
                isOpen={state.isPaneOpenLeft}
                title="Hey, it is optional pane title.  I can be React component too."
                from="bottom"
                width="200px"
                onRequestClose={() => setState({ isPaneOpenLeft: false })}
                className=""
            >
                <div>And I am pane content on left.</div>
            </SlidingPane>
        </div>
    )
};

export default CheckingSliderButton;