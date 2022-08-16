import React, {useEffect, useState} from 'react'
import Button from "../../component/Button";
import Input from "../../component/Input";
import {useMutation} from "@apollo/client";
import {UPDATE_USER} from "../../GraphQLOperation/mutation";

function EditProfile(props){
    const { userData, close } = props
    const [state, setState] = useState({
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
    })

    const [updateUser,{loading,error,data}] = useMutation(UPDATE_USER,{
        refetchQueries:[
            'getMyProfile'
        ]
    })

    useEffect(() => {
        setState({
            _id: userData.users._id,
            firstName: userData.users.firstName ,
            lastName: userData.users.lastName,
            email: userData.users.email
        })
    }, [userData])

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

    const submitUser = (e) => {
        e.preventDefault()
        updateUser({
            variables:{
                userData: state
            }
        })
    }

    return (
        <div className="max-w-md w-full mb-auto mt-auto mx-auto">
                <h1 className="text-3xl text-center mt-7 font-black dark:text-slate-200">Edit Profile</h1>
                <div className="p-8">
                    <form onSubmit={submitUser}>
                        {renderInput('text', 'firstName', 'First Name', state.firstName )}
                        {renderInput('text', 'lastName', 'Last Name', state.lastName )}
                        {renderInput('text', 'email', 'Email', state.email )}
                        <Button action={"Edit Profile"} actionType={"primary"}/>
                    </form>
                </div>
        </div>
    )
}

export default EditProfile
