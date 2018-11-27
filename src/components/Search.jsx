import YOUTUBE_API_KEY from "../config/youtube.js";
import searchYouTube from "../lib/searchYouTube.js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      query: event.target.value
    });
    _.debounce(this.handleClick(), 500);

  }

  handleClick() {
    // console.log("%cSEARCH HANDLER !!", "color:plum")
    searchYouTube({
      part: 'snippet',
      maxResults: 5,
      q: this.state.query,
      type: 'video',
      videoDefinition: 'high',
      videoEmbeddable: true,
      key: YOUTUBE_API_KEY,
    }, this.props.search);

  }



  render() {
    console.log('QUERY State:', this.state.query)
    return (
      <div className="search-bar form-inline" >
        <input
          className="form-control"
          type="text"
          onChange={this.handleSubmit} />
        <button className="btn hidden-sm-down" onClick={this.handleClick}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    )
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
