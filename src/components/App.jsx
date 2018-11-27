import VideoList from "./VideoList.js";
import Search from "./Search.js";
import videoPlayer from "./VideoPlayer.js";
import VideoPlayer from "./VideoPlayer.js";
// import searchYouTube from "../lib/searchYouTube.js"
import exampleVideoData from "../data/exampleVideoData.js";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      curVideo: null,
    }
    this.selectHandler = this.selectHandler.bind(this);
    this.search = this.search.bind(this);
  }

  // select video method
  selectHandler(video) {
    this.setState({
      curVideo: video
    });
  }

  search(videos) {
    this.setState({
      videoList: videos
    })
  }




  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search search={this.search} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer
              curVideo={this.state.curVideo}
              videoList={this.state.videoList} />
            </div>
          </div>
          <div className="col-md-5">
            <div><VideoList
              videos={this.state.videoList}
              clicked={this.selectHandler} />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
