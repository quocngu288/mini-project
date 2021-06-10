import React, { useState } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'

function Search() {
    const [keyword, setKeyword] = useState('')
    const timeOutRef = useRef(null)
    const dispatch = useDispatch()

    // const handleChangeInput = (e) => {
    //     console.log("change");
    //     setInputText([e.target.name] = e.target.value)
    // }
    const handleChangeSearch = (e) => {
        let value = e.target.value
        setKeyword(value);
        // if (!onSearch) return;

        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current)
        }
        timeOutRef.current = setTimeout(() => {
            let formValue = {
                keyword: value
            }
            dispatch({ type: "SEARCH_KEY", payload: formValue })
        }, 300);

    }
    return (
        <div className="input-group">
            <input
                onChange={handleChangeSearch}
                type="text" className="form-control" placeholder="Search" />
            <div className="input-group-prepend">
                <span className="input-group-text" id="btnTimNV"><i className="fa fa-search" /></span>
            </div>
        </div>
    )
}

export default Search
