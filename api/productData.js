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

// Get Product By ID
const getProductById = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/products/${id}`, {
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

// Get Products Grouped By Category
const getProductGroupedByCategory = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/products/groupedByCategory`, {
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

export {
  getAllProducts,
  getProductById,
  getProductGroupedByCategory,
};
