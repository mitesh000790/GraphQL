import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { action, actionType, onClick } = this.props
        return (
            <div>
                <button className={`w-full p-3  bg-indigo-600 text-white rounded shadow ${actionType === "primary" ? "bg-blue-500" : "bg-red-500"}`} onClick={onClick}>{action}</button>
            </div>
        )
    }
}

export default Button
