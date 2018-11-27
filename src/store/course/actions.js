import data from '../../data/courses.json';
import delay from '../../utils';
import * as constant from '../../constant';

export const actions = {
  
  FETCH_COURSES: 'FETCH_COURSES',  
  FETCH_COURSE: 'FETCH_COURSE', 
  CLEAN_COURSE: 'CLEAN_COURSE',  

  fetchCourses: () => dispatch =>{  
    delay(constant.TIMEOUT).then(() => {
        dispatch({
            type: actions.FETCH_COURSES,
            payload: data
        });
    })
  },
  fetchCourseById: id => dispatch =>{  
    delay(constant.TIMEOUT).then(() => {
        dispatch({
            type: actions.FETCH_COURSE,
            payload: data.find(i => i.objectId === id)
        });
    })
  },
  cleanCourse: () => dispatch => {
    dispatch({
        type: actions.CLEAN_COURSE
    });
  }
}