import {LOAD_DATA,LOAD_PEOPLE} from '../Constants/constants';

export function getPeopleData() {
  return function(dispatch){
    console.log("Inside action")
  return fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(json => {
        console.log(json.results)
        json = {
            firstName: json.results[0].name.first,
            lastName: json.results[0].name.last,
            cell: json.results[0].cell
        }
      dispatch({ type: LOAD_PEOPLE, payload: json });
    })
    .catch(err=>{
        console.log(err)
    })
}
}

export function getPeopleDataFromState(){
    return {
        type: LOAD_DATA
    }
}