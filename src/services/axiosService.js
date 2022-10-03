import { APIRequest, ChuckNorrisJokesAPI } from "../utils/config/axios.config";

export function getRandomUser(){
    return APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500;  // Resolve only if the status code is less than 500
        }
    });  // https://randomuser.me/api/
}

export function getRandomJoke(){
    return ChuckNorrisJokesAPI.get('/jokes/random', {
        validateStatus: function (status) {
            return status < 500;  // Resolve only if the status code is less than 500
        }
    });  // https://api.chucknorris.io/jokes/random
}
