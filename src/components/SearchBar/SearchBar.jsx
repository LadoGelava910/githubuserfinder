import React, {useRef} from 'react'
import "./SearchBar.css"
const SearchBar = ({handleSearch}) => {
  const myRef = useRef("");

  return (
    <div className="search_bar_wrapper">
         <form>
            <input
            type='text'
            className='search_input'
            placeholder='Search users...'
            autoFocus
            onKeyUp={() => handleSearch(myRef.current.value)}
            ref={myRef} 
            defaultValue={myRef.current.value}
            />
        </form>
    </div>
  )
}

export default SearchBar