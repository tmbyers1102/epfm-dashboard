import React, { useEffect, useState } from 'react'
import CheckinTable from './CheckinTable';

const Checkins = ({selectedClient}) => {

    return (
        <>
            <div className='justify-center p-1 pr-2'>
                <CheckinTable selectedClient={selectedClient} />
            </div>
        </>
    )
};

export default Checkins;