import { actions } from './actions'

export const CourseState = () => ({
  courses: [],   
  course: {} 
})

export function CourseReducer (state = new CourseState(), {payload, type}) {
  switch (type) {
    case actions.FETCH_COURSES:
      return {
        ...state,
        courses: payload,       
      }  
    case actions.FETCH_COURSE:
      return {
        ...state,
        course: payload,       
      }
    case actions.CLEAN_COURSE:
      return {
        ...state,
        course: {},       
      }    
    default:
      return {
        ...state
      }
  }
}