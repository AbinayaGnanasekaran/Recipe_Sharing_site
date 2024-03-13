

function Addrecipe(){
    return(
        <>
        <div className="addrecipe">
            <h2>Add recipe</h2>
            <form>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title"></input>
                </div>
            </form>
        </div>
        </>
    )
}

export default Addrecipe