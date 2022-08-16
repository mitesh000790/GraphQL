import React, {useEffect, useState} from 'react'
import Button from "../../component/Button";
import Input from "../../component/Input";
import {useMutation} from "@apollo/client";
import {DELETE_QUOTE, UPDATE_QUOTE} from "../../GraphQLOperation/mutation";

function EditQuote(props){
    const { name } = props
    const [state, setState] = useState({_id: "", name: ""})

    const [updateQuote,{}] = useMutation(UPDATE_QUOTE,{
        refetchQueries:[
            'getMyProfile'
        ]
    })

    const [deleteQuote,{}] = useMutation(DELETE_QUOTE,{
        refetchQueries:[
            'getMyProfile'
        ]
    })

    useEffect(() => {
        setState({
            _id: name._id,
            name: name.name
        })
    }, [name])

    const handleChangeInput = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }


    const renderInput = ( type = 'text', id, label, value, textarea) => {
        return (
            <div >
                <Input
                    id={id}
                    label={label}
                    value={value}
                    type={type}
                    onChange={handleChangeInput}
                    textArea={textarea}
                />
            </div>
        )
    }

    const submitUser = (e) => {
        e.preventDefault()
        updateQuote({
            variables:{
                quoteEdit:state
            }
        })
    }

    const deleteQuotes = (e) => {
        e.preventDefault()
        deleteQuote({
            variables:{
                quotById:{_id:state._id}
            }
        })
    }

    return (
        <div className="max-w-md w-full mb-auto mt-auto mx-auto">
            <h1 className="text-3xl text-center mt-7 font-black dark:text-slate-200">Edit Quote</h1>
            <div className="p-8">
                <form onSubmit={submitUser}>
                    {renderInput('text', 'name', 'Edit Quote', state.name, 'textarea')}
                    <div className="flex text-end justify-end">
                        <button className={" p-3 mr-2 bg-indigo-600 text-white dark:bg-slate-400 rounded shadow bg-blue-500"}>Edit Quote</button>
                        <button className={" p-3 bg-indigo-600 text-white dark:bg-slate-400 rounded shadow bg-red-500"} onClick={deleteQuotes}>Delete Quote</button>
                    </div>
                    {/*<Button action={"Edit Quote"} actionType={"primary"}/>*/}
                </form>
            </div>
        </div>
    )
}

export default EditQuote
