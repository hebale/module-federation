// const http = () => {
//   const host = `${process.env.API_HOST}`

//   const header = {
    
//   }

//   const #queryString = (params) => {
//     return Object.keys(params)
//       .map((value) => `${value}=${params[value]}`)
//       .join('&')
//   };

class Http {
  constructor({ base = null }){
    this.host = `${process.env.API_HOST}`
    this.headers = {
      'Content-Type': 'application/json',
    }
  }

  static queryString =  (params) => {
    return Object.keys(params)
      .map((value) => `${value}=${params[value]}`)
      .join('&')
  };
  
  get = async ({ base, path, queries }) => {
    try {
      const response = await fetch(`${base ? base : this.host}${path ?? ''}${queries ? `&${this.queryString(queries)}` : ''}`, {
        method: 'GET',
        headers: this.headers
      })
      const data = await (() => {
        if (!this.headers || this.headers['Content-Type'].indexOf('json') > -1) {
          return response.json();
        }
        return response;
      })();
      return data;
    } catch (err) {
      let message = "Unknown Error!"
      if(err instanceof Error) message = err.message;
      alert(message);
    }
  };
  
  post = async ({ base, path, body }) => {
    try {
      const response = await fetch(`${base ? base : this.host}${path ?? ''}`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(body)
      })
      
      return response.json();
    } catch (err) {
      let message = "Unknown Error!"
      if(err instanceof Error) message = err.message;
      alert(message);
    }
  };
  pull = async ({ path, body }) => {};
  patch = async ({ path, body }) => {};
  delete = async ({ path, body }) => {};
}


export default new Http({});