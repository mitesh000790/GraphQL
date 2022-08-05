import React from 'react'

class Profile extends React.Component {
    // constructor(props) {
        //     super(props)
        // }

    render() {
        // const {  } = this.props
        return (
            <div className="bg-gray-200 font-sans text-gray-700">
                <div className="container md:mx-auto mx-auto p-8 flex" style={{height:'860px'}}>
                    <div className="bg-white rounded-lg overflow-hidden min-w-full shadow-2xl">
                        <img className="w-full h-80" src="https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Sunset in the mountains"/>
                        <h1 className="text-3xl text-center mt-7 font-black">Mitesh Dudhat</h1>
                        <h6 className="text-1xl text-center font-black">mitesh000790@gmail.com</h6>
                        <div className="justify-between p-3 ml-4 mr-4 text-sm border-b border-gray-300"/>

                        <h1 className="text-3xl ml-10 mt-7 font-black">Your Quotes</h1>
                        <div className="min-w-min m-10 p-4 text-gray-800 bg-gray-100 rounded-lg shadow">
                            <div className="mb-2">
                                <div className="h-3 text-3xl text-left text-gray-600">“</div>
                                <p className="px-4 text-sm text-center text-gray-600">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati
                                    laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus
                                    temporibus odio provident.
                                </p>
                                <div className="h-3 text-3xl text-right text-gray-600">”</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Profile
