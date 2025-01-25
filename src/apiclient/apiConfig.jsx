import axios from 'axios'

const ApiClient = axios.create({
 baseURL: 'https://rewardify.dotcod.in/api',
  timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json'
//   }
})

export default ApiClient
