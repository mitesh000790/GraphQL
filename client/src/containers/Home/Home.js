import React from 'react'
import { GET_ALL_QUOTES } from '../../GraphQLOperation/queries';
import { useQuery } from '@apollo/client';
import {Link} from "react-router-dom"

function Home (){
        const {loading,error,data} = useQuery(GET_ALL_QUOTES)
        if(loading) return <h1>Loading</h1>
        if(error){
            console.log(error.message)
        }
        if(data.quote?.length === 0){
            return  <h2>No Quotes available</h2>
        }
        return (
            <div className="bg-gray-200 dark:bg-slate-900 font-sans text-gray-700">
                <div className="container md:mx-auto mx-auto p-8 flex" style={{minHeight:'100vh'}}>
                    <div className="bg-white mt-20 dark:bg-slate-700  rounded-lg overflow-hidden min-w-full shadow-2xl">
                        { data?.quote?.map((quote, key)=>(<div key={key} className="min-w-min m-10 p-4 text-gray-800 bg-gray-100 dark:bg-slate-500 rounded-lg shadow">
                            <div className="mb-2">
                                <div className="h-3 text-3xl text-left text-gray-600 dark:text-slate-200">“</div>
                                <p className="px-4 text-sm text-center text-gray-600 dark:text-slate-200 font-black">
                                    {quote.name}
                                </p>
                                <div className="h-3 text-3xl text-right text-gray-600 dark:text-slate-200">”</div>
                                <div className="pt-10 text-1xl text-end font-black dark:text-slate-200">
                                    <Link to={`/other-profile/${quote.by._id}`}>Created By: {quote.by.firstName}</Link></div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        )
}

export default Home
