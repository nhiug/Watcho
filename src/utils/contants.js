const GOOGLE_API_KEY = "AIzaSyBC_0fCsZ-OOoBnQKfJBgYwZxaxXaOFtKE";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=80&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="