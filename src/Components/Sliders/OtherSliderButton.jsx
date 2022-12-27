import React, { useEffect, useState, Component } from 'react'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import OtherButtons from './OtherButtons';

const OtherSliderButton = () => {
    const [state, setState] = useState({
        isPaneOpenLeft: false,
    });

    return (
        <div className='rounded-full'>
            <div className="flex rounded-full">
                <button onClick={() => setState({ isPaneOpenLeft: true })} className="rounded-full selection:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-12 transition ease-in-out delay-150 hover:-translate-y-3 hover:translate-x-3 hover:scale-150 duration-300 z-40 absolute bottom-0 left-0 m-3 text-blue-600 hover:text-blue-700"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                </button>
            </div>
            <SlidingPane
                closeIcon={<div>X</div>}
                isOpen={state.isPaneOpenLeft}
                title="Actions"
                from="bottom"
                width="300px"
                onRequestClose={() => setState({ isPaneOpenLeft: false })}
                className=""
            >
                <div>
                    <OtherButtons />
                </div>
            </SlidingPane>
        </div>
    )
};

export default OtherSliderButton;