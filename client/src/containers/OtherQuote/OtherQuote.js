import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../../GraphQLOperation/queries';

function OtherQuote(){
    let userid = window.location.pathname.split('/');
    userid = userid[userid.length -1]
    const {loading,error,data} = useQuery(GET_USER_BY_ID,{
        variables:{userid}
    })


    return (
        <div className="bg-gray-200 dark:bg-slate-900 font-sans text-gray-700">
            <div className="container md:mx-auto mx-auto p-8 flex" style={{minHeight:'100vh'}}>
                <div className="bg-white mt-20 dark:bg-slate-700 rounded-lg overflow-hidden min-w-full shadow-2xl">
                    <img className="w-full h-80" src="https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Sunset in the mountains"/>
                    <h1 className="text-3xl text-center mt-7 font-black dark:text-slate-200">{data?.users.firstName} {data?.users.lastName}</h1>
                    <h6 className="text-1xl text-center font-black dark:text-slate-200">{data?.users.email}</h6>
                    <div className="justify-between p-3 ml-4 mr-4 text-sm border-b border-gray-300"/>

                    <h1 className="text-3xl ml-10 mt-7 font-black">Your Quotes</h1>
                    {data?.users.quote.map((quote, key)=>(
                        <div key={key} className=" m-10 p-4 text-gray-800 bg-gray-100 dark:bg-slate-500 rounded-lg shadow">
                            <div className="mb-2">
                                <div className="h-3 text-3xl text-left text-gray-600 dark:text-slate-200">“</div>
                                <p className="break-words px-4 text-sm text-center text-gray-600 dark:text-slate-200">
                                    {quote.name}
                                </p>
                                <div className="h-3 text-3xl text-right text-gray-600 dark:text-slate-200">”</div>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    )
}

export default OtherQuote
