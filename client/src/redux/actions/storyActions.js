import axios from 'axios';
import { message } from 'antd';

//fetch all stories
export const GetAllStories = () => async (dispatch) => {
  dispatch({ type: 'LOADING' });
  try {
    const res = await axios.get('https://instaverse-v1.onrender.com/api/stories/all');
    dispatch({ type: 'FETCH_STORIES', payload: res.data });
  } catch (error) {
    message.error('something went wrong');
    console.log(error.message);
  }
};

//create new story
export const CreateStory = (storyData) => async (dispatch) => {
  try {
    const res = await axios.post('https://instaverse-v1.onrender.com/api/stories/new', storyData);
    dispatch({ type: 'CREATE_STORY', payload: res.data });
    message.success('stroy was added successfully');
  } catch (error) {
    message.error('something went wrong');
    console.log(error.message);
  }
};

//edit story
export const EditStory = (id, storyData) => async (dispatch) => {
  try {
    const res = await axios.put(`https://instaverse-v1.onrender.com/api/stories/edit/${id}`, storyData);
    dispatch({ type: 'EDIT_STORY', payload: res.data });
    message.success('stroy was updated successfully');
  } catch (error) {
    message.error('something went wrong');
    console.log(error.message);
  }
};

//delete story
export const DeleteStory = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://instaverse-v1.onrender.com/api/stories/delete/${id}`);
    dispatch({ type: 'DELETE_STORY', payload: id });
    message.success('stroy was deleted successfully');
  } catch (error) {
    message.error('something went wrong');
    console.log(error.message);
  }
};

//like story
export const LikeStory = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`https://instaverse-v1.onrender.com/api/stories/like/${id}`);
    dispatch({ type: 'LIKE_STORY', payload: res.data });
  } catch (error) {
    message.error('something went wrong');
    console.log(error.message);
  }
};
