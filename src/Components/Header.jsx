import React, { useEffect, useState } from 'react'
import CheckingSliderButton from './Sliders/CheckinSliderButton';
import TaskSliderButton from './Sliders/TaskSliderButton';

const Header = () => {

    return (
        <>
            <div className='h-16 shadow-lg w-full bg-blue-600 text-white'>
                <div className='flex items-center justify-between p-3'>
                <CheckingSliderButton />
                <TaskSliderButton />
                </div>
            </div>
        </>
    )
};

export default Header;