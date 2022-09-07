import './SearchBar.scss'

import { useState } from "react"
import { FiSearch } from 'react-icons/fi'

function SearchBar() {

    const [field, setField] = useState('')

    const changeHandler = (e) => {
        setField(e.target.value)
    }

    return (
        <div className="SearchBar">

            <input
                value={field}
                type="text"
                onChange={changeHandler}
                placeholder="Search"
            />

            <FiSearch className="SearchBar__icon" />

        </div>
    )
}

export default SearchBar