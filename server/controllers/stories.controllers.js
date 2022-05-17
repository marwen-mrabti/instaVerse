import mongoose from 'mongoose';
import Story from '../models/story.model.js';

//get all stories
export const GetStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//add new story
export const CreateStory = async (req, res) => {
  const body = req.body;
  const newStory = new Story({ ...body });
  try {
    await newStory.save();
    res.status(201).json(newStory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//edit story
export const EditStory = async (req, res) => {
  try {
    const story = req.body;
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: 'this id does not belong to any post' });
    }
    const updatedStory = await Story.findByIdAndUpdate(_id, story, { new: true });
    res.status(200).json(updatedStory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//delete story
export const DeleteStory = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: 'this id does not belong to any post' });
    }
    await Story.findByIdAndRemove(_id);
    res.status(200).json({ message: 'story deleted' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//like story
export const LikeStory = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'this id does not belong to any post' });
    }
    const story = await Story.findById(id);
    const updatedStory = await Story.findByIdAndUpdate(
      id,
      { likes: story.likes + 1 },
      { new: true }
    );
    res.status(200).json(updatedStory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
