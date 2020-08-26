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

  const init = (baseURL) => {

    const useGet = (resource) => {
        const [data, dispatch] = useReducer(reducer, {
          loading: true,
          data: {}
        })
      
        useEffect(() => {
          dispatch({ type: 'REQUEST' });
          axios.get(baseURL + resource + '.json')
            .then(res => {
              dispatch({ type: 'SUCESS', data: res.data })
            })
        }, []);
        return data;
      }
      return {
          useGet
      }
  }

  export default init;