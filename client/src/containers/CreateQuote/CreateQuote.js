import React from 'react'
import Input from "../../component/Input";
import Button from "../../component/Button";

class CreateQuote extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name: ""
        }
    }

    handleChangeInput = (key, value) => {
        this.setState((prevS) =>({
            ...prevS.state,
            [key]: value
        }))
    }

    renderInput = ( type = 'text', id, label, value) => {
        return (
            <div >
                <Input
                    id={id}
                    label={label}
                    value={value}
                    type={type}
                    onChange={this.handleChangeInput}
                />
            </div>
        )
    }

    render() {
        const {  } = this.props
        const { name } = this.state
        return (
            <div className="bg-gray-200 font-sans text-gray-700">
                <div className="container md:mx-auto mx-auto p-8 flex" style={{height:'860px'}}>
                    <div className="bg-white rounded-lg overflow-hidden min-w-full ml-10 shadow-2xl">
                        <div className="min-w-min m-10 p-4 text-gray-800 bg-gray-100 rounded-lg shadow">
                            {this.renderInput('text', 'name', 'Write A Quote', name)}
                            <Button action={"Create"} actionType={"primary"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateQuote
