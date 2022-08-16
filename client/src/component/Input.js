import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id, label, value, onChange, type = 'text', textArea } = this.props
        const handleChange = event => onChange(id, event.target.value)
        const is_input_pw = type === 'password'

        return (
            <div>
                <div className="mb-5">
                    <label htmlFor={id}
                           className="block mb-2 dark:text-slate-200 text-sm font-medium text-gray-600">{label}</label>

                    {textArea === "textarea" ?
                        <textarea
                            value={value || ''}
                            onChange={handleChange}
                            className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                        /> :
                        <input
                        type={is_input_pw ? 'password' : type}
                        value={value || ''}
                        onChange={handleChange}
                        className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    />}

                </div>
            </div>
        )
    }
}

export default Input
