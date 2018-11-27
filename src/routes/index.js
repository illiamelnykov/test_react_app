import React from 'react';
import { Route } from 'react-router-dom';
import Courses from '../components/Courses';
import Course from '../components/Course';
import Users from '../components/Users';
import Settings from '../components/Settings';
import * as constant from '../constant';

const Routes = (props) => {
  return (
      <div>
        <Route exact path={constant.routeCourses} component={Courses}/>       
        <Route path={`${constant.routeCourse}/:id`} component={Course}/>      
        <Route path={constant.routeUsers} component={Users} />
        <Route path={constant.routeSettings} component={Settings} />                  
      </div>
  )
}

export default Routes