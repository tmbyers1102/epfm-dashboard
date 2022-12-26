import React, { useEffect, useState, setState } from 'react'

const EditRowName = ({
    task,
    thing,
    thing2,
    text,
    type,
    placeholder,
    children,
    ...props
}) => {
        // Manage the state whether to show the label or the input box. By default, label will be shown.
    // Exercise: It can be made dynamic by accepting initial state as props outside the component 
    const [isEditing, setEditing] = useState(false);
  
    // Event handler while pressing any key while editing
    const handleKeyDown = (event, type) => {

    console.log(thing)
    // console.log(thing2)
    console.log(isEditing)
    console.log('placeholder after: ', placeholder)

      // Handle when key is pressed
    };

    /*
- It will display a label is `isEditing` is false
- It will display the children (input or textarea) if `isEditing` is true
- when input `onBlur`, we will set the default non edit mode
Note: For simplicity purpose, I removed all the classnames, you can check the repo for CSS styles
*/

    return (
        <>
            {isEditing ? (
                    <td
                    onBlur={() => setEditing(false)}
                    onKeyDown={e => handleKeyDown(e, type)}
                    className="bg-blue-100"
                    >
                        <span className='flex'>
                            <div className='text-start px-1 py-1 text-xs font-medium text-green-800 whitespace-nowrap'>{children}</div>
                        </span>
                    </td>
                ) : (
                    <td onClick={() => setEditing(true)} className="text-start px-1 py-1 text-xs font-medium text-red-800 whitespace-nowrap">
                        {thing || placeholder || 'other'}
                    </td>
                )}
        </>
    );

};

export default EditRowName;