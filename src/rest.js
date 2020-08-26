import { useEffect, useReducer } from 'react';
import axios from 'axios';

const INITIAL_STATE = {
    loading: false,
    data: {}
}

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
        const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
      
        useEffect(() => {
          dispatch({ type: 'REQUEST' });
          axios.get(baseURL + resource + '.json')
            .then(res => {
              dispatch({ type: 'SUCESS', data: res.data })
            })
        }, []);
        return data;
      }

      const usePost = (resource) => {
        const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
        const post = (data) => {
            dispatch({type: 'REQUEST'});
            axios.post(baseURL + resource + '.json', data)
              .then((res) => {
                  dispatch({ type: 'SUCCESS', data: res.data });
              })
          }
          return [data, post];
    }

    const useDelete = () => {
        const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
        const remove = (resource) => {
            dispatch({type: 'REQUEST'});
            axios.delete(baseURL + resource + '.json')
              .then(() => {
                  dispatch({ type: 'SUCCESS'});
              })
          }
          return [data, remove];
    }

      return {
          useGet,
          usePost,
          useDelete
      }
  }

  export default init;