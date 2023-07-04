const HOST = "http://localhost:3001";

const blogApi = {
  get: {
    async posts() {
      const data = await apiCall(`${HOST}/posts`);
      return data;
    },
    async post(postId) {
      const data = await apiCall(`${HOST}/post/${postId}`);
      return data;
    },
    async comments(postId) {
      const data = await apiCall(`${HOST}/post/${postId}/comments`);
      return data;
    },
  },
};

async function apiCall(endpoint) {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default blogApi;
