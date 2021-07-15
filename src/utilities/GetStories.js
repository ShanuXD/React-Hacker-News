import axios from "axios";


const NUMBER_OF_STORIES = 100
export const getData = async (type) => {

  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`
  );
  const getIds = response.data.splice(0, NUMBER_OF_STORIES);
  const array = getIds.map((id) => {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  });

  const response_array = await Promise.all(array);
  const stories = response_array.map((story) => story.data);

  return stories
};