import React, {useState} from "react"


function Category({category, handleFilter}) {

    const [isSelected, setIsSelected] = useState('false')

    function handleSelect() {
        setIsSelected((isSelected) => !isSelected)
        handleFilter(category)
    }
    return (
        <div>
            <button 
            onClick={handleSelect} 
            className={isSelected ? null : "selected"}>{category}</button>
        </div>
     ) 
}

export default Category