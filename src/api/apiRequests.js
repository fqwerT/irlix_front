const api = "http://localhost:8000/api/";

const methods = {
  login: (api) => {
    return `${api}login`;
  },
  register: (api) => {
    return `${api}registration`;
  },
  getPosts: (api) => {
    return `${api}posts`;
  },
  checkAuth: (api) => {
    return `${api}check`;
  },
  createPost: (api) => {
    return `${api}createpost`;
  },
  getUser: (api, id) => {
    return `${api}user?id=${id}`;
  },
  getFriends: (api) => {
    return `${api}friends`;
  },
  getPost: (api, id) => {
    return `${api}post?id=${id}`;
  },

};

export class Requests {
  static async Login(data) {
    const route = methods.login(api);
    const { email, password } = data;
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    return await response.json();
  }
  static async Register(payload) {
    const { email, password, name } = payload;
    const route = methods.register(api);
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    });
    return await response.json();
  }

  static async FetchPosts(access) {
    const route = methods.getPosts(api);
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: access,
      },
    });

    return await response.json();
  }

  static async CheckAuth(access) {
    const route = methods.checkAuth(api);
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: access,
      },
    });

    return await response.json();
  }

  static async getFriends() {
    const route = methods.getFriends(api);
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  }

  static async getPost(id) {
    const route = methods.getPost(api, id);
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  }

  static async createNewPost(payload) {
    const { content, title, name } = payload;
   
    const route = methods.createPost(api);
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content, title, name
      }),
    });
    return await response.json();
  }

  static async getUser(id) {
    const route = methods.getUser(api, id);
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }
}
