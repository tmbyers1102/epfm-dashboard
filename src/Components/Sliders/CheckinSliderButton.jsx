import React, { useEffect, useState, Component } from 'react'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const CheckingSliderButton = () => {
    const [state, setState] = useState({
        isTaskSliderOpen: false,
        isPaneOpenLeft: false,
    });

    return (
        <div>
            <div className="flex">

                <button onClick={() => setState({ isTaskSliderOpen: true })}>
                    <div class="flex items-center h-10 rounded-lg px-3 bg-blue-600 hover:bg-blue-700 border-solid border-2 border-sky-500 mx-3">
                        New Checkin
                    </div>
                </button>
            </div>
            <SlidingPane
                className="bg-blue-800 opacity-90 hover:opacity-100"
                closeIcon=<div class="hover:bg-indigo-400 rounded-full p-3"><h3>X</h3></div>
                overlayClassName="some-custom-overlay-class"
                isOpen={state.isTaskSliderOpen}
                title=<div className=''><h2>title</h2></div>
                //subtitle="Optional subtitle."
                from="right"
                width="800px"
                onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                    setState({ isTaskSliderOpen: false });
                }}
            >
                {/* put content here */}
                <div className=''>
                    create checking form
                </div>

            </SlidingPane>
            <SlidingPane
                closeIcon={<div>Some div containing custom close icon.</div>}
                isOpen={state.isPaneOpenLeft}
                title="Hey, it is optional pane title.  I can be React component too."
                from="bottom"
                width="200px"
                onRequestClose={() => setState({ isPaneOpenLeft: false })}
            >
                <div>And I am pane content on left.</div>
            </SlidingPane>
        </div>
    )
};

export default CheckingSliderButton;