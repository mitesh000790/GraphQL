import React from 'react'

class UploadImage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { label, onChange, type } = this.props


        return (
            <div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           htmlFor="multiple_files">{label}</label>
                    <input
                        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="multiple_files"
                        type={type}
                        onChange={onChange}
                        multiple
                    />
                </div>
            </div>
        )
    }
}

export default UploadImage
