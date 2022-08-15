import React, {useState} from 'react'
import Input from '../../component/Input'
import Button from '../../component/Button'
import {Link, useNavigate} from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../GraphQLOperation/mutation'

function SignUp (){
    const navigate = useNavigate()
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        // image: '',
        password: ''
    })
    const [signupUser,{data,loading,error}] = useMutation(SIGNUP_USER, {
        onCompleted(data){
            navigate('/login')
        }
    })

    const handleChangeInput = (key, value, e) => {
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
        signupUser({
            variables:{
                userNew:state
            }
        })
    }

    return (
        <div className="bg-gray-200 dark:bg-slate-900 font-sans text-gray-700">
            <div className="container md:mx-auto mx-auto p-8 flex" style={{minHeight:'100vh'}}>
                <div className="max-w-md mt-20 w-full mb-auto mt-auto mx-auto">
                    <div className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-2xl">
                        <h1 className="text-3xl text-center mt-7 font-black dark:text-slate-200">Sign Up</h1>
                        <div className="p-8">
                            <form  onSubmit={handleSubmit}>
                                {renderInput('text', 'firstName', 'First Name', state.firstName )}
                                {renderInput('text', 'lastName', 'Last Name', state.lastName )}
                                {renderInput('text', 'email', 'Email', state.email )}
                                {renderInput('password', 'password', 'Password', state.password )}
                                <Button action={"SignUp"} actionType={"primary"}/>
                            </form>
                        </div>

                        <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100 dark:bg-slate-700">
                            <Link to="/login" className="font-medium text-blue-500 dark:text-slate-200">Already have account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
