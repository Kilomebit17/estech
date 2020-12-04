import React from "react";
import SFCSS from './SearchForm.module.css'
import searchimg from './search.png'
const SearchForm = () => {
    return (
        <div className={SFCSS.form}>
            <img src={searchimg} alt="search img logo" className={SFCSS.img}/>
            <textarea placeholder='Search People' className={SFCSS.searchform} maxLength='22'/>
        </div>
    )
    
}
export default SearchForm;