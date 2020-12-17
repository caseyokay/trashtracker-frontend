function Search(props){
return(
    <div id="search">
        <form>
            <label>Filter by Compost/Recycling/Landfill:</label>
            <input
            type="text"
            placeholder="sort by type"
            name="searchValue"
            value={props.searchValue}
            onChange={props.searchHandler}
            />
        </form>
    </div>
)
}

export default Search;