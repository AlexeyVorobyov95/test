import axios from 'axios';

export async function getUsers(page) {
  const BASE_URL =
    'https://6442c59133997d3ef9193ccf.mockapi.io/tweetcards/users';
  try {
    const response = await axios.get(`${BASE_URL}?page=${page}&limit=3`);
    return response.data;
  } catch (error) {
    alert(`${error.message}`);
    throw new Error(error.message);
  }
}

export async function getUser(id) {
  const BASE_URL =
    'https://6442c59133997d3ef9193ccf.mockapi.io/tweetcards/users';
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    alert(`${error.message}`);
    throw new Error(error.message);
  }
}

export async function changeFollowers(id, update) {
  const BASE_URL =
    'https://6442c59133997d3ef9193ccf.mockapi.io/tweetcards/users';

  try {
    const response = await axios.put(`${BASE_URL}/${id}`, update);

    return response.data;
  } catch (error) {
    alert(`${error.message}`);
    throw new Error(error.message);
  }
}
