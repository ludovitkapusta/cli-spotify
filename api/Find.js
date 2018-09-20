const axios = require('axios');
const token = 'BQB8eVNvm-DpRMhCvFJGUIFMhP-5vOo62vZZR6AwxxCSJemHKquSGP1Xyw7I3lV3Nb3aqnfUJfNf8SaM3lkoXVk2JmAU02F_gC4CF1Zp2U8LmAPMkSQmNGn9REBcK_sA5DgWXZRJDpfCWzHdzSDIhmOCOQ'

return module.exports = {
  album: function(query) {
    console.log(query);
  
    const instance = axios.create({
      baseURL: 'https://api.spotify.com/',
      timeout: 1000,
      headers: {'Authorization': 'Bearer ' + token}
    });
  
    instance.get('/v1/search',{
        params: {
          q: query,
          type: 'album',
        }
      })
      .then(function (response) {
        // handle success
        console.log(response.data.albums);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },

  track: function(query) {
    console.log(query);
  
    const instance = axios.create({
      baseURL: 'https://api.spotify.com/',
      timeout: 1000,
      headers: {'Authorization': 'Bearer ' + token}
    });
  
    instance.get('/v1/search',{
        params: {
          q: query,
          type: 'track',
        }
      })
      .then(function (response) {
        // handle success
        console.log(response.data.albums);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};