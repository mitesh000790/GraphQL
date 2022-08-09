import React, {useState} from 'react'
import Input from '../../component/Input'
import Button from '../../component/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../GraphQLOperation/mutation'

function Login(){
    const navigate = useNavigate()
    const [state, setState] = useState({
        email: '',
        password: ''
    })
    const [signinUser,{error,loading,data}] = useMutation(LOGIN_USER,{
        onCompleted(data){
            localStorage.setItem("token",data.user.token)
            navigate('/profile')
        }
    })

    console.log("loading-------->",data)

    if(loading) return <h1>Loading</h1>

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
        signinUser({
            variables:{
                userSignin: state
            }
        })

    }

    return (
        <div className="bg-gray-200 dark:bg-slate-900 font-sans text-gray-700">
            <div className="container max-h-min md:mx-auto mx-auto p-8 flex" style={{height:'861px'}}>
                <div className="max-w-md w-full mb-auto mt-auto mx-auto">
                    <div className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-2xl">
                        <h1 className="text-3xl text-center mt-7 font-black dark:text-slate-200">Log in</h1>
                        <div className="p-8">
                            <form  onSubmit={handleSubmit}>
                                {renderInput('text', 'email', 'Email', state.email )}
                                {renderInput('password', 'password', 'Password', state.password )}
                                <Button action={"Login"} actionType={"primary"}/>
                            </form>
                        </div>

                        <div className="flex justify-between p-8 text-sm border-t border-gray-300 dark:bg-slate-700 bg-gray-100">
                            <Link to="/signup" className="font-medium dark:text-slate-200 text-blue-500">Create account</Link>

                            <Link to="#" className="text-gray-600 dark:text-slate-200">Forgot password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
