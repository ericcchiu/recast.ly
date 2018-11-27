import YOUTUBE_API_KEY from "../config/youtube.js"

var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=cats&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyBbF_j5FJ9yZDlkHP1Y3d2k7M3NzSI2dkE`,

    dataType: "json",
    success: function (data) {
      console.log(data);
    },
    error: function (error) {
      console.error("you goofed... ", error);

    }

  });
  console.log("searchYouTube")
};


//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key={YOUR_API_KEY}

// GET {base_URL}/search?part=snippet
//                      &order=rating
//                      &type=video
//                      &videoDefinition=high
//                      &videoEmbeddable=true
//                      &key={YOUR_API_KEY}


export default searchYouTube;
