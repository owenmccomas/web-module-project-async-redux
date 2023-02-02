import React, {useState} from "react";
import axios from "axios";

export const FETCH_PERSON = 'FETCH_PERSON'
export const FETCH_PERSON_SUCCESS = 'FETCH_PERSON_SUCCESS'
export const FETCH_PERSON_FAILURE = 'FETCH_PERSON_FAILURE'

export const PeopleDisplayer = () => {

    const [data, setData] = useState([])
    
    const initialState = {
        person: [],
        error: '',
        isFetching: false
      };

    const getPeople = () => dispatch => {
        dispatch({type: FETCH_PERSON})
        axios
            .get('https://randomuser.me/api/')
            .then(res => dispatch({type: FETCH_PERSON_SUCCESS, payload: res.data.results}),
                    setData(res.data.results))
            .catch(err => dispatch({type:FETCH_PERSON_FAILURE, payload: err}))
    }

    const realGetPeople = () => {
        axios.get('https://randomuser.me/api/')
        .then(res => res.data.results.push(setData))
        .catch(err => console.error(err))
}
    realGetPeople()
    return(

        <div>
            <h3>{data}</h3>
        </div>

    )
}