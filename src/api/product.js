import { productClient } from './client';

const productEndpoint = '/products';


export const getProduts = () =>
  productClient.get(productEndpoint, {
    Headers: {
      "Content-Type": "application/json",
    },
  
  }).then((resp) => resp.data);

  export const createData = (data) => productClient.put(productEndpoint, data);