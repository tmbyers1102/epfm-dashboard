import React, { useEffect, useState } from 'react'

const Projects = ({ setProjectClicked, theClient }) => {

    return (
        <>
            <div className='flex h-screen items-centern align-center justify-center'>
                <div className='w-96 h-96 justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="text-indigo-500 blur-sm w-72 h-72">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                    </svg>

                    <h1 className="text-lg">Hi, I am the project portion of this dashboard</h1>
                    
                    <button
                        className='p-3 border-2 border-blue-500 rounded-lg m-3 text-blue-500 hover:bg-blue-50'
                        onClick={() => (setProjectClicked(false))}
                        >
                        Return to Dashboard Home
                    </button>
                </div>
            </div>
        </>
    )
};

export default Projects;