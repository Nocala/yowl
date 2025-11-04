const API_CONFIG = {
  BASE_URL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000',
  ENDPOINTS: {
    // Authentication
    REGISTER: '/register',
    LOGIN: '/login',
    
    // Users
    USERS: '/users',
    
    // Sports
    SPORTS: '/sports',
    SPORT_BY_ID: (id) => `/sports/${id}`,
    
    // Profile
    PROFIL_1_2: '/profil-1-2',
    PROFIL_2_2: '/profil-2-2',
    PROFIL: '/profil',
    
    // Media uploads
    UPLOAD: '/upload',
    MEDIA_BY_USER: (userId) => `/media/user/${userId}`,
    MEDIA_BY_FILENAME: (filename) => `/media/file/${filename}`,
    MEDIA_BY_ID: (mediaId) => `/media/id/${mediaId}`,
    
    // Text posts
    POSTS_TXT: '/posts-txt',
    POSTS_TXT_BY_ID: (id) => `/posts-txt/${id}`,
    POSTS_TXT_BY_USER: (userId) => `/posts-txt/user/${userId}`,
    POSTS_TXT_LIKE: (id) => `/posts-txt/${id}/like`,
    
    // Media posts
    POSTS_MEDIA: '/posts-media',
    POSTS_MEDIA_BY_USER: (userId) => `/posts-media/user/${userId}`,
    
    // Articles
    ARTICLES: '/articles',
    ARTICLE_BY_ID: (id) => `/articles/${id}`,
    
    // Events
    EVENTS: '/events',
    EVENT_BY_ID: (id) => `/events/${id}`,
    EVENT_PARTICIPANTS: (id) => `/events/${id}/participants`,
    EVENT_PARTICIPANTS_COUNT: (id) => `/events/${id}/participants/count`,
    
    // Test
    TEST: '/test'
  },
  
  // Helper methods for building complete URLs
  buildUrl: (endpoint, params = {}) => {
    let url = `${API_CONFIG.BASE_URL}${endpoint}`;
    
    // Add query parameters if provided
    if (Object.keys(params).length > 0) {
      const queryString = new URLSearchParams(params).toString();
      url += `?${queryString}`;
    }
    
    return url;
  },
  
  // Common request configurations
  REQUEST_CONFIG: {
    DEFAULT_HEADERS: {
      'Content-Type': 'application/json',
    },
    
    // Helper to add authorization header
    withAuth: (token) => ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }),
    
    // Helper for multipart/form-data requests
    MULTIPART_HEADERS: {
      'Content-Type': 'multipart/form-data',
    },
    
    // Helper for multipart with auth
    multipartWithAuth: (token) => ({
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    }),
  },
  
  // HTTP Methods shortcuts
  METHODS: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  },
  
  // Common query parameters
  QUERY_PARAMS: {
    PAGINATION: {
      PAGE: 'page',
      LIMIT: 'limit',
    },
  },
};

export default API_CONFIG;