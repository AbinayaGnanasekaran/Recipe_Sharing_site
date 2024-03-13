import React, { useState } from 'react';

function AddRecipe(props) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit", title);
    }

    return (
        <>
            <div className="addrecipe">
                <h2>Add recipe</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input type="text" name="title" value={title} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label>Ingredients:</label>
                        <input type="text" name="ingredients"></input>
                    </div>
                    <div>
                        <label>Instructions:</label>
                        <input type="text" name="instructions"></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default AddRecipe;
