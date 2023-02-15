import React, { useEffect, useState } from 'react'

class CreateAPITask extends React.Component {
    constructor(){
        super();
        this.state={
            title: '',
            description: '',
            // description: '',
            // status: '',
            // due_date: '',
            // client_visible: 'False',
            // related_client: '',
            // related_project_item: '',
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    
    // Submit Form
    submitForm(){

        // fetch('http://127.0.0.1:8000/api/clients/', {
        //     method:'GET',
        //     body:JSON.stringify(this.state),
        //     headers:{
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        fetch('http://127.0.0.1:8000/api/tasks/', {
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
        // location.reload()

        this.setState({
            title: '',
            description: '',
            // description: '',
            // status: '',
            // due_date: '',
            // client_visible: 'False',
            // related_client: '',
            // related_project_item: '',
        });
    }
    render(){
        return (
            <>
                <div className='justify-center p-1 pl-2'>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2  text-start" htmlFor="username">
                            Name
                        </label>
                        <input value={this.state.title} name="title" type="text" onChange={this.changeHandler} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control" placeholder="title" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2  text-start" htmlFor="username">
                            Ticket Link
                        </label>
                        <input value={this.state.description} name="description" type="text" onChange={this.changeHandler} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control" placeholder="title" />
                    </div>
                    <div class="flex items-center justify-center">
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white w-1/2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            onClick={this.submitForm}
                        >
                            Create Task
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateAPITask