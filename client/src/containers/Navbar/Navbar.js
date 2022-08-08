import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from "../../component/Button";

function Navbar(){
    const navigate = useNavigate()
    const [ navbar, setNavbar ] = useState(false)

    const handleButton = () => {
        setNavbar(!navbar)
    }

    const token = localStorage.getItem("token")

    return (
        <div>
            <nav className="w-full bg-blue-500 shadow">
                <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link to="/">
                                <h2 className="text-3xl font-black text-white">Quote Book</h2>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={handleButton}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                { token ? <>
                                    <li className="text-white hover:text-indigo-200">
                                        <Link to="/profile">Profile</Link>
                                    </li>
                                    <li className="text-white hover:text-indigo-200">
                                        <Link to="/create-quote">Craete</Link>
                                    </li>
                                    <li className="text-white hover:text-indigo-200">
                                        <Button action={"LogOut"} actionType={"secondary"} onClick={() => {localStorage.removeItem("token")
                                            navigate('/login')}}/>
                                    </li>
                                    </> :
                                    <>
                                    <li className="text-white hover:text-indigo-200">
                                        <Link to="/login">LogIn</Link>
                                    </li>
                                    <li className="text-white hover:text-indigo-200">
                                        <Link to="/signup">SignIn</Link>
                                    </li>
                                    </>
                                    }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
