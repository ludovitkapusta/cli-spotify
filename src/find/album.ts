import { request } from '../api'

export default (query: string) => request.get(
  '/v1/search',
  {
    params: {
      q: query,
      type: 'album',
    }
  })
  .then(response => {
    // handle success
    console.log('albums: ', response.data.albums);
  })
  .catch(error => {
    // handle error
    console.log('error: ',error);
  });
