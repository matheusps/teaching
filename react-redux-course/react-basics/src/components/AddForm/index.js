import React from 'react';

const AddForm = ( { addToList } ) => {
    
    let itemName = "";

    const handleSubmit = event => {
        event.preventDefault();
        addToList(itemName);
    }

    const handleChange = event => {
        itemName = event.target.value;
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input placeholder="Item name" onChange={ handleChange }/>
            <input type="submit" value="ADD TO LIST" />
            <input type="reset" value="CLEAR" />
        </form>
    )
}

export default AddForm;