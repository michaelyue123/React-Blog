import axios from 'axios'; // Axios works both in the browser and in a node.js environment. It provides a single API for dealing with XMLHttpRequests and node's http interface. It also wraps the requests using a polyfill for ES6 new's promise syntax. 

export default axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
});