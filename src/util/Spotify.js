const clientId = "3a5a9ff1fc374ab78f2fd53fb15b8241";
const redirectUri = "http://localhost:3000/";

let accessToken = '';
let expirationTime = '';

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else if (window.location.href.match(/access_token=([^&]*)/, /expires_in=([^&]*)/)) {
      accessToken = window.location.href.match(/access_token=([^&]*)/);
      expirationTime = window.location.href.match(/expires_in=([^&]*)/);
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    }
  }
};

export default Spotify;
