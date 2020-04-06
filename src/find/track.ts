import { request } from '../api'
import play from '../../src/player/play'
import pause from '../../src/player/pause'

export default (query: string) => request.get(
  '/v1/search',
  {
    params: {
      q: query,
      type: 'track',
    }
  })
  .then(response => {
    const tracks = response.data.tracks.items

    const { album, artists, track_number, uri: trackUri } = tracks[0]
    const { uri: albumUri } = album
    console.log(albumUri, track_number);
    if(albumUri) {
      play(albumUri, track_number);
    }
  })
  .catch(error => {
    // handle error
    console.log('error: ',error)
  })