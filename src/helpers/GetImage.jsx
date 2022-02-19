import React from 'react';

const ApiKey = '563492ad6f91700001000001f10b63e5fdf344efb9bddbabf42e01d5';

const GetImage = async (url) => {
  console.log('Adentro del SearchImage: ',url)
  try {
    const res = await fetch(url, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': ApiKey
      },
    });
    if (res.ok) {
        const images = await res.json();
        return images;
    }else{
      return 'estoy en el else';
    }
  } catch (error) {
      return error;
  }
};

export default GetImage;