import { request } from '../api'

export default (uri: string = '', track_number: number = 1) => request.put(
  '/v1/me/player/play',
  {
    context_uri: uri,
    offset: {
      position: track_number - 1
    },
    position_ms: 0
  }
)
