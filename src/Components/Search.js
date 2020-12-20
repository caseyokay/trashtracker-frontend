function Search(props){
return(
    <div id="search">
        <form>
            {/* <label>Sort by Compost/Recycling/Landfill:</label> */}
            <input
            type="text"
            placeholder="Compost/Recycling/Landfill"
            name="searchValue"
            value={props.searchValue}
            onChange={props.searchHandler}
            />
        </form>
    </div>
)
}

export default Search;