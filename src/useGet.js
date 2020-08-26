import { useEffect, useReducer } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
    switch(action.type) {
      case 'REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'SUCESS':
        return {
          ...state,
          loading: false,
          data: action.data
        }
      default:
        return state;
    }
  }

  const useGet = (url) => {
    const [data, dispatch] = useReducer(reducer, {
      loading: true,
      data: {}
    })
  
    useEffect(() => {
      dispatch({ type: 'REQUEST' });
      axios.get(url)
        .then(res => {
          dispatch({ type: 'SUCESS', data: res.data })
        })
    }, []);
    return data;
  }

  export default useGet;