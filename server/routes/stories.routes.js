import { Router } from 'express';
const storiesRouter = Router();

//routes handlers
import {
  CreateStory,
  DeleteStory,
  EditStory,
  GetStories,
  LikeStory,
} from '../controllers/stories.controllers.js';

//@route => req:get => /api/stories/all
//@desc => get all stories
//access => public
storiesRouter.get('/all', GetStories);

//@route => req:post => /api/stories/new
//@desc => create new story
//access => private
storiesRouter.post('/new', CreateStory);

//@route => req:put => /api/stories/edit/:id
//@desc => edit story
//access => private
storiesRouter.put('/edit/:id', EditStory);

//@route => req:put => /api/stories/delete/:id
//@desc => delete story
//access => private
storiesRouter.delete('/delete/:id', DeleteStory);

//@route => req:patch => /api/stories/like/:id
//@desc => like story
//access => public
storiesRouter.put('/like/:id', LikeStory);

//export router
export default storiesRouter;
