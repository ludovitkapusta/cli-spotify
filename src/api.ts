import axios from 'axios'
const token = 'BQCvOCo4F7-egyV90tOcWdEsksGP5Gjek3_POT3Yq1w6cHvglQVw78iQXKXQOgQmoB-NWAjKHmG4q0yp7pfCpYwzuLu3RFQOGBits7Mx5Fd2OnVKYHDPjHOgOhPSTcs3LJ_h1FW4PBZjW2xRla4l9riZZA'

export const request = axios.create({
  baseURL: 'https://api.spotify.com/',
  timeout: 1000,
  headers: {'Authorization': 'Bearer ' + token}
})