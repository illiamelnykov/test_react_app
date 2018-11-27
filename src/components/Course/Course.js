import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../store/course';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, Row, 
  CardTitle, Button, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import * as constant from '../../constant';
import './styles.css';

class Course extends Component {
  state = {
    activeTab: '1'
  };
  componentDidMount(){
    const { params: { id }} = this.props.match;  
    this.props.actions.fetchCourseById(id);      
    const [ ,tab ]  = window.location.href.split('#');
    if (tab){
      this.toggle(tab);
    }
  } 
  componentWillUnmount(){
    this.props.actions.cleanCourse();        
  }
  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const { course } = this.props;
    if (!Object.keys(course).length){
      return (<i className="fa fa-circle-o-notch fa-spin spinner"></i>)
    }
    return (
      <div className='container page-course'>
        <Nav tabs>
          <NavItem>
            <NavLink
              href="#1"
              className={this.state.activeTab === '1'?  'active' : '' }
              onClick={() => { this.toggle('1'); }}>
              All Info
            </NavLink>
            
          </NavItem>
          <NavItem>
            <NavLink
              href="#2"
              className={ this.state.activeTab === '2' ? 'active' : '' }
              onClick={() => { this.toggle('2'); }}>
              Text
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#3"
              className={ this.state.activeTab === '3' ? 'active' : '' }
              onClick={() => { this.toggle('3'); }}>
              Image
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Card className='card-all'>
                <CardImg top width="100%" src={course.image.url} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{course.title}</CardTitle>            
                  <CardText>{course.text}</CardText>
                  <Link to={constant.routeCourses} className='back'>
                    <Button>Back</Button>
                  </Link>                  
                </CardBody>
              </Card>
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <Row>
            <Card className='card-all'>                
                <CardBody>                            
                  <CardText>{course.text}</CardText>
                  <Link to={constant.routeCourses} className='back'>
                    <Button>Back</Button>
                  </Link>                  
                </CardBody>
              </Card>
            </Row>
          </TabPane>
          <TabPane tabId="3">
          <Row>
            <Card className='card-all'>                
                <CardBody>                            
                  <CardImg top width="100%" src={course.image.url} alt="Card image cap" />
                  <Link to={constant.routeCourses} className='back'>
                    <Button>Back</Button>
                  </Link>                  
                </CardBody>
              </Card>
            </Row>
          </TabPane>
        </TabContent>        
      </div>
    );
  }
}
const mapStateToProps = (state)=>({  
  course: state.courseStore.course,
})
const mapDispatchToProps = ((dispatch) => ({  
    actions: {...bindActionCreators({ ...actions }, dispatch)}      
}));
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Course);