import React from "react";
import SFCSS from './SearchForm.module.css'
import searchimg from './search.png'
const SearchForm = (props) => {
    const searchValue = ({target}) => {
        props.SearchWrite(target)
    }
    return (
        <div className={SFCSS.form}>
            <img src={searchimg} alt="search img logo" className={SFCSS.img}/>
            <textarea onChange={searchValue} value={props.value} placeholder='Search People' className={SFCSS.searchform} maxLength='22'/>
        </div>
    )
    
}
export default SearchForm;