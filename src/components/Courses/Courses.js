import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../store/course';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import * as constant from '../../constant';

import './styles.css';

class Courses extends Component {
  componentDidMount(){
    this.props.actions.fetchCourses();        
  } 
  render() {    
    const { courses } = this.props;
    if (!courses.length){
      return (<i className="fa fa-circle-o-notch fa-spin spinner"></i>)
    }
    return (
      <div className='container page-courses'>
        <ListGroup>
          {
            courses.map(course => (
              <ListGroupItem key={course.objectId}>
                <ListGroupItemHeading>{course.title}</ListGroupItemHeading>               
                <Link to={`${constant.routeCourse}/${course.objectId}`}>more...</Link>
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state)=>({  
  courses: state.courseStore.courses,
})
const mapDispatchToProps = ((dispatch) => ({  
    actions: {...bindActionCreators({ ...actions }, dispatch)}      
}));
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);