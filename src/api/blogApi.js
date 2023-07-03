const HOST = "http://localhost:3001";

const blogApi = {
  async fetchPosts() {
    try {
      const response = await fetch(`${HOST}/posts`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default blogApi;
