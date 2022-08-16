import React, {useState} from 'react'
import Input from "../../component/Input";
import Button from "../../component/Button";
import { useMutation } from '@apollo/client';
import { CREATE_QUOTE } from '../../GraphQLOperation/mutation';
import {toastError, toastSuccess} from "../../component/Toast";

function CreateQuote() {
    const [state, setState] = useState({name: ""})
    const [createQuote,{loading,error,data}] = useMutation(CREATE_QUOTE,{
        context: {
            headers: {
                authorization:localStorage.getItem("token") || ""
            }
        },
        refetchQueries:[
            'getAllQuotes',
            'getMyProfile'
        ],
        onCompleted(data){
            toastSuccess("Quote Created SuccessFully")
        },
        onError(){
            toastError("Something went wrong")
        }
    })

    const handleChangeInput = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }

    const renderInput = ( type = 'text', id, label, value) => {
        return (
            <div >
                <Input
                    id={id}
                    label={label}
                    value={value}
                    type={type}
                    onChange={handleChangeInput}
                />
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createQuote({
            variables:{
                name:state.name
            }
        }).then(()=>{
            setState({
                name: ""
            })
        })
    }


    return (
        <div className="bg-gray-200 dark:bg-slate-900 font-sans text-gray-700">
            <div className="container md:mx-auto mx-auto p-8 flex" style={{minHeight:'100vh'}}>
                <div className="bg-white mt-20 dark:bg-slate-700  rounded-lg overflow-hidden min-w-full shadow-2xl">
                    <div className="min-w-min m-10 p-4 text-gray-800 bg-gray-100 dark:bg-slate-500 rounded-lg shadow">
                        {renderInput('text', 'name', 'Write A Quote', state.name)}
                        <Button action={"Create"} actionType={"primary"} onClick={handleSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateQuote
