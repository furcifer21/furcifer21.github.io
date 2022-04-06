import axios from 'axios';
const HOST = "http://localhost8080/"

export const productCategories = async (data) => {
  const resp = await axios.get(`http://localhost:8080/product-categories`)
  .then(response => { 
    return response.data
  }) 
  .catch(err => { 
    console.log(err.response.data); 
  })
  return resp
};

export const allProducts = async () => {
  const resp = await axios.get(`http://localhost:8080/product/getAllProduct`)
  .then(response => { 
    console.log(response);
    return response.data
  }) 
  .catch(err => { 
    console.log('7777',err.response.data); 
  })
  return resp
};

export const getId = async () => {
  const config = { headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`,} } 
  const response = await axios.get(`${HOST}auth/users/me/`, config);
  return response.data
};

export const getUuid = async () => {
  const id = Number(localStorage.getItem('id'))
  const config = { headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`,} } 
  const response = await axios.post(`${HOST}accounts/`, {id: id}, config);
  return response.data
};   

export const getMe = async () => {
  const config = { headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`,} } 
  const response = await axios.get(`${HOST}auth/users/me/`, config);
  return response.data
};
