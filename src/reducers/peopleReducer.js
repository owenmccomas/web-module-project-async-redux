import { FETCH_PERSON, FETCH_PERSON_SUCCESS, FETCH_PERSON_FAILURE } from "../components/peopleDisplayer";

const initialState = {
    person: [],
    error: '',
    isFetching: false
  };
  
  function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case FETCH_PERSON:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_PERSON_SUCCESS:
        return {
          ...state,
          person: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_PERSON_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;