import searchYouTube from "../lib/searchYouTube.js"
var Search = () => {
  console.log("%cSEARCH!", "color:lightcoral; font-size:14px")
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button className="btn hidden-sm-down" onClick={function () { searchYouTube({ query: "cats" }, console.log("found some cats")) }}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  )
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
