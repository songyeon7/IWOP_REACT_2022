import axios from 'axios';

const list = async () => {
    const response = await axios({ url: "http://localhost:8000" });
    const result = response.data;
    return result.result;
}

const get = async (id) => {
    const response = await axios({ url: `http://localhost:8000/${id}` });
    if (response.status != 200) return null;
    const result = response.data;
    return result.result;
}

const add = async (title, content) => {
    const response = await axios({
      url: 'http://localhost:8000',
      method: 'POST',
      data: {
        title,
        content,
      },
    });
    const result = response.data;
    return result.result;
  }

const remove = async (id) => {
    await axios({ url: `http://localhost:8000/${id}`, method: 'DELETE' });
}

export { list, get, add, remove };



// const list = async () => {
//     const response = await fetch(`http://localhost:8000`);
//     const result = await response.json();
//     return result;
// }

// const get = async (id) => {
//     const response = await fetch(`https://localhost:8000/${id}`);
//     if (response.status != 200) return null;
//     const result = await response.json();
//     return result;
// }

// const add = async (title, content) => {
//     const response = await fetch(`http://localhost:8000`, {
//         method: 'POST',
//         headers: { "Content-Type": "application/json; charset=utf-8;"},
//         body: JSON.stringify({
//             title,
//             content,
//         }),
//     });
//     const result = await response.json();
//     return result;
// }

// const remove = async (id) => {
//     await fetch(`http://localhost:8000/${id}`, { method: 'DELETE' });
// }

// export { list, get, add, remove };