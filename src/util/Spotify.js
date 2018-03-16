let accessToken = '';

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else {
      accessToken = window.location.href.match(/access_token=([^&]*)/, /expires_in=([^&]*)/)
    }
  }
};

export default Spotify;
