const clientId = "3a5a9ff1fc374ab78f2fd53fb15b8241";
const redirectURI = "https://nlinds-jammming.surge.sh";
let accessToken = '';
let expiresIn = '';

const Spotify = {

  getAccessToken() {  //Gets user access token from Spotify API according to Implicit Grant Flow
    if (accessToken) {
      return accessToken;
    } else if (window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
      accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
      expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public%20playlist-modify-private&redirect_uri=${redirectURI}`;
    }
  },

  search(term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
  ).then(jsonResponse => {
     if (jsonResponse.tracks.items) {
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          URI: track.uri
        }));
      } else {
        return [];
      }
    });
  },

  savePlaylist(playlistName, trackURIs) {
    if (!playlistName || !trackURIs) {
      return;
    } else {

      const headers = { Authorization: `Bearer ${accessToken}` };
      let userID;
      let playlistID;

      return fetch(`https://api.spotify.com/v1/me`, {  // Gets current user's user ID from Spotify.
        headers: headers,
      }).then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Request failed!`);
      }, networkError => console.log(networkError.message)
      ).then(jsonResponse => {
        userID = jsonResponse.id;

          return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {  // Creates a new, empty playlist and returns the playlist ID.
            headers: headers,
            method: 'POST',
            body: JSON.stringify({name: playlistName})
          }).then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Request failed!');
          }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
          playlistID = jsonResponse.id;

            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {  // Adds tracks to the new playlist using it's ID.
            headers: headers,
            method: 'POST',
            body: JSON.stringify({uris: trackURIs})
          });
        });
      });
    }
  }
};

export default Spotify;
