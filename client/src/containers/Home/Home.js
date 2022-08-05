import React from 'react'
import { GET_ALL_QUOTES } from '../../GraphQLOperation/queries';
import { useQuery } from '@apollo/client';

function Home (){
        const {loading,error,data} = useQuery(GET_ALL_QUOTES)
    console.log("data------------->", data)
        if(loading) return <h1>Loading</h1>
        if(error){
            console.log(error.message)
        }
        if(data.quotes?.length === 0){
            return  <h2>No Quotes available</h2>
        }
        return (
            <div className="bg-gray-200 font-sans text-gray-700">
                <div className="container md:mx-auto mx-auto p-8 flex" style={{height:'860px'}}>
                    <div className="bg-white rounded-lg overflow-hidden min-w-full shadow-2xl">
                        { data?.quote?.map(quote=>(<div className="min-w-min m-10 p-4 text-gray-800 bg-gray-100 rounded-lg shadow">
                            <div className="mb-2">
                                <div className="h-3 text-3xl text-left text-gray-600">“</div>
                                <p className="px-4 text-sm text-center text-gray-600 font-black">
                                    {quote.name}
                                </p>
                                <div className="h-3 text-3xl text-right text-gray-600">”</div>
                                <h6 className="pt-10 text-1xl text-end">Created By: {quote.by.firstName}</h6>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        )
}

export default Home