import React, {useEffect, useState} from 'react'
import { useQuery} from '@apollo/client';
import { GET_MY_PROFILE } from '../../GraphQLOperation/queries';
import {useNavigate} from 'react-router-dom'
import Modal from "../../component/Modal"
import EditProfile from "./EditProfile"
import EditQuote from "./EditQuote";

function Profile(){
    const [profileData, setProfileData] = useState()
    const [open, setOpen] = useState(false)
    const [openQuote, setOpenQuote] = useState(false)
    const [quote, setQuote] = useState()
    const navigate  = useNavigate()
    const {loading,error,data} = useQuery(GET_MY_PROFILE,{
        context: {
            headers: {
                authorization:localStorage.getItem("token") || ""
            }
        },
        onCompleted(data){
            setProfileData(data)
        }
    })

    useEffect(() => {
        setProfileData(data)
        if(data){
            localStorage.setItem("profileQuote", JSON.stringify(data))
        } else {
            let collection = localStorage.getItem('profileQuote');
            setProfileData(JSON.parse(collection))
        }
    }, [])

    if(!localStorage.getItem("token")){
        navigate("/login")
        return <h1>unauthorized</h1>
    }
    if(loading) return <h2>Profile is loading</h2>

    const handleModalClose = () =>{
        setOpen(false)
    }

    const handleQuoteModal = ({quote}) => {
        setOpenQuote(true)
        setQuote(quote)
    }

    const handleQuoteModalClose = () =>{
        setOpenQuote(false)
    }

    return (
        <div className="bg-gray-200 dark:bg-slate-900 font-sans text-gray-700">
            <Modal
                open={open}
                close={handleModalClose}
            >
                <EditProfile userData={profileData}/>
            </Modal>
            <Modal
                open={openQuote}
                close={handleQuoteModalClose}
            >
                <EditQuote name={quote}/>
            </Modal>
            <div className="container md:mx-auto mx-auto p-8 flex" style={{minHeight:'100vh'}}>
                <div className="bg-white dark:bg-slate-700 mt-20 rounded-lg overflow-hidden min-w-full shadow-2xl">
                    <img className="w-full h-80" src="https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Sunset in the mountains"/>
                    {profileData?.users ? <div className="text-end relative mr-4" style={{marginTop: "-20px"}}>
                        <button
                            onClick={() => setOpen(true)}
                            className="text-gray-500 dark:text-gray-400 bg-slate-200 focus:outline-n one shadow-none p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </button>
                    </div> : ''}
                    <h1 className="text-3xl mt-7 text-center font-black dark:text-slate-200">{profileData?.users.firstName} {profileData?.users.lastName}</h1>
                    <h6 className="text-1xl text-center font-black dark:text-slate-200">{profileData?.users.email}</h6>
                    <div className="justify-between p-3 ml-4 mr-4 text-sm border-b border-gray-300"/>

                    <h1 className="text-3xl ml-10 mt-7 font-black">Your Quotes</h1>
                    <div className="overflow-y-scroll h-80">
                        {profileData?.users.quote.map((quote, key)=>(
                            <div key={key} className="min-w-min m-10 p-4 text-gray-800 bg-gray-100 dark:bg-slate-500 rounded-lg shadow">
                                {profileData?.users ? <div key={key} className="text-end relative mr-4" style={{marginTop: "-30px"}}>
                                    <button
                                        onClick={() => handleQuoteModal({quote:quote})}
                                        className="text-gray-500 dark:text-gray-400 bg-slate-200 focus:outline-n one shadow-none p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer"
                                    >
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </button>
                                </div> : ''}
                                <div className="mb-2">
                                    <div className="h-3 text-3xl text-left text-gray-600 dark:text-slate-200">“</div>
                                    <p className="px-4 text-sm text-center text-gray-600 dark:text-slate-200">
                                        {quote.name}
                                    </p>
                                    <div className="h-3 text-3xl text-right text-gray-600 dark:text-slate-200">”</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile
