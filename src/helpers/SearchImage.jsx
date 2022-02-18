import React from 'react';

const baseURL = 'https://api.pexels.com/v1/';
const ApiKey = '563492ad6f91700001000001f10b63e5fdf344efb9bddbabf42e01d5';

const SearchImage = async ({searcher}) => {
  const url = baseURL+'search?locale=es-ES&&';
  try {
    const res = await fetch(`${url}query=${searcher}&&per_page=3`, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': ApiKey
      },
    });
    if (res.ok) {
        const images = await res.json();
        console.log(images)
        return images;
    }else{
      return 'estoy en el else';
    }
  } catch (error) {
      return 'Error 404';
  }
};

export default SearchImage;