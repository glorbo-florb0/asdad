const API_BASE_URL = 'http://localhost:3000';

export const api = {
  // User endpoints
  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/api/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  login: async (credentials) => {
    console.log('API login called with:', credentials);
    const response = await fetch(`${API_BASE_URL}/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    console.log('API login response:', data);
    return data;
  },

  adminLogin: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/api/user/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  updateUser: async (userData, token) => {
    const response = await fetch(`${API_BASE_URL}/api/user/updateUser`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  getAllUsers: async (token) => {
    const response = await fetch(`${API_BASE_URL}/api/user/getUsers`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getAdminDashboard: async (token) => {
    const response = await fetch(`${API_BASE_URL}/api/user/admin/dashboard`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  },

  // Product endpoints
  getProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/api/product/product-get`);
    return response.json();
  },

  createProduct: async (productData) => {
    const response = await fetch(`${API_BASE_URL}/api/product/product-create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    return response.json();
  },

  // Comment endpoints
  getCommentsByPage: async (page) => {
    const response = await fetch(`${API_BASE_URL}/api/comment/page/${page}`);
    return response.json();
  },

  createComment: async (commentData, token) => {
    const response = await fetch(`${API_BASE_URL}/api/comment/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(commentData),
    });
    return response.json();
  },

  // Shop endpoints
  getAllProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/api/shop/products`);
    return response.json();
  },

  getProductsByCategory: async (category) => {
    const response = await fetch(`${API_BASE_URL}/api/shop/products/category/${category}`);
    return response.json();
  },

  getProductById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/shop/products/${id}`);
    return response.json();
  },

  addToWishlist: async (productId, token) => {
    const response = await fetch(`${API_BASE_URL}/api/shop/wishlist/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ productId }),
    });
    return response.json();
  },

  removeFromWishlist: async (productId, token) => {
    const response = await fetch(`${API_BASE_URL}/api/shop/wishlist/${productId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getUserWishlist: async (token) => {
    const response = await fetch(`${API_BASE_URL}/api/shop/wishlist`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  },

  createOrder: async (orderData, token) => {
    const response = await fetch(`${API_BASE_URL}/api/shop/orders/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(orderData),
    });
    return response.json();
  },

  getUserOrders: async (token) => {
    const response = await fetch(`${API_BASE_URL}/api/shop/orders`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  },
}; 