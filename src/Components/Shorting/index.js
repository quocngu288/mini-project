import React from 'react'

function index({ setSelect }) {
    const handleChangeSelect = (e) => {
        setSelect(e.target.value)
    }
    return (
        <select name="select" onChange={handleChangeSelect}>
            <option value="0">Default Shorting</option>
            <option value="1">Price by min - max</option>
            <option value="2">Price by max - min</option>
        </select>
    )
}

export default index
