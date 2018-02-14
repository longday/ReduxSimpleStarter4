import { combineReducers } from 'redux';
import PostsReducer from './reduser_posts';

const rootReducer = combineReducers({
    posts: PostsReducer
});

export default rootReducer;
