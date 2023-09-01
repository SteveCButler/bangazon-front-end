const dbUrl = 'https://localhost:7040';

const getAllProducts = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

export default getAllProducts;
