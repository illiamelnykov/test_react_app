import { combineReducers } from 'redux';
import { CourseReducer } from '../store/course';

export default combineReducers({    
    courseStore: CourseReducer
});