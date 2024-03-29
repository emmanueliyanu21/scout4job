import React, { Component } from 'react'
import Home from './components/pages/home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ResumeSample from './components/cv builder/resume-sample';
import ResumeBuilder from './components/cv builder/resume-builder';
import Cover from './components/cover letter/cover';
import JobSearch from './components/job-pathway/job';
import Interviews from './components/interviews/interviews'
// import Navbar from './components/pages/Navbar';
import Education from './components/builder pathway/education';
import Skill from './components/builder pathway/skill';
import EducationDetail from './components/builder pathway/education-detail';
import Finalize from './components/builder pathway/finalize';
import WorkExperience from './components/builder pathway/work-experience';
import Header from './components/builder pathway/header'
import Launch from './components/builder pathway/launch';
import Year from './components/builder pathway/years';
import Start from './components/builder pathway/start';
import Dashboard from './components/client dashboard/dashboard';
import Template from './components/builder pathway/template'
import Summary from './components/builder pathway/summary';
import WorkExperienceExtra from './components/builder pathway/work-experience-extra';
import WorkExperienceDetail from './components/builder pathway/work-experience-detail';
import Strength from './components/cover letter/strength';
import JobTitle from './components/cover letter/job-title';
import Experience from './components/cover letter/experience';
import OutOfJob from './components/cover letter/out-of-job';
import MoreDetail from './components/cover letter/more-details';
import Style from './components/cover letter/style';
import Specific from './components/cover letter/template02';
import JobApply from './components/cover letter/job-apply';
import Finished from './components/cover letter/finished';
import JobDetails from './components/job-pathway/job-details';
import JobScreen from './components/job-pathway/jobscreen';
import Apply from './components/job-pathway/apply';
// import NavHeader from './components/pages/nav-header';
import FAQ from './components/pages/faq';
import EmployerFAQ from './components/employer/faqEmployer';
import SignIn from './components/pages/sign-in';
import SignUp from './components/pages/sign-up';
import About from './components/pages/about';
import Contact from './components/pages/contact-us';
import HeaderCopy from './components/builder pathway/header-copy'
import CVPreview from './components/builder pathway/cv-preview';
import SkillDetails from './components/cover letter/skill-details';
import LetterTemplate from './components/cover letter/letterTemplate';
import TemplateNO1 from './components/cover letter/template01';
import TemplateNO3 from './components/cover letter/template03';

// Employer
import EmployerPage from './components/employer/employer';
import ContactEmployer from './components/employer/contact-us';
import CVSearch from "./components/employer/cv-search"
import PostJob from "./components/employer/post-job"
import EmployerLogin from "./components/employer/employersignin"
import EmployerSignup from "./components/employer/Employersignup"
import EmployerDashboard from "./components/employer/employerDashboard"
// import About from './components/pages/about'
// import Footer from './components/pages/footer'

import jwt_decode from "jwt-decode";
import setAuthToken from "./store/utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./store/actions/authActions";

import PrivateRoute from "./components/private-route/PrivateRoute";
import { Provider } from "react-redux";
import store from "./store";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          {/* <p>{this.state.apiResponse}</p> */}
          <BrowserRouter>
            <Route path="/specific" component={Specific} />
            <Route exact path="/" component={Home} />
            <Route path="/resume-sample" component={ResumeSample} />
            <Route path="/resume-builder" component={ResumeBuilder} />
            <Route path="/work-experience-detail" component={WorkExperienceDetail} />
            <Route path="/cover-letter" component={Cover} />
            <Route path="/job-search" component={JobSearch} />
            <Route path="/interviews" component={Interviews} />
            <Route path="/education" component={Education} />
            <Route path="/skill" component={Skill} />
            <Route path="/education-detail" component={EducationDetail} />
            <Route path="/finalize" component={Finalize} />
            <Route path="/work-experience" component={WorkExperience} />
            <Route path="/header" component={Header} />
            <Route path="/launch" component={Launch} />
            <Route path="/year" component={Year} />
            <Route path="/start" component={Start} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Route path="/template" component={Template} />
            <Route path="/summary" component={Summary} />
            <Route path="/work-experience-extra" component={WorkExperienceExtra} />
            <Route path="/strength" component={Strength} />
            <Route path="/job-title" component={JobTitle} />
            <Route path="/experience" component={Experience} />
            <Route path="/out-of-job" component={OutOfJob} />
            <Route path="/style" component={Style} />
            <Route path="/more-details" component={MoreDetail} />

            <Route path="/job-apply" component={JobApply} />
            <Route path="/finished" component={Finished} />
            <Route path="/job/:id" component={JobDetails} />
            <Route path="/jobscreen" component={JobScreen} />
            {/* /jobs/:id */}
            <Route path="/apply" component={Apply} />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/contact" component={ContactEmployer} />
            <Route path="/about-us" component={About} />
            <Route path="/faq" component={FAQ} />
            <Route path="/header-copy" component={HeaderCopy} />
            <Route path="/cv-preview" component={CVPreview} />
            <Route path="/skill-details" component={SkillDetails} />
            <Route path="/letter-template" component={LetterTemplate} />
            <Route path="/template-1" component={TemplateNO1} />
            <Route path="/template-3" component={TemplateNO3} />
            {/* <Route path="/about" component={About} /> */}
            <Route path="/Employer-FAQ" component={EmployerFAQ} />
            <Route path="/employer" component={EmployerPage} />
            <Route path="/cv-search" component={CVSearch} />
            <Route path="/post-job" component={PostJob} />
            <Route path="/employer-signup" component={EmployerSignup} />
            <Route path="/employer-login" component={EmployerLogin} />
            <Switch>
              <PrivateRoute exact path="/employer-dashboard" component={EmployerDashboard} />
            </Switch>

            {/* <Footer /> */}
          </BrowserRouter>

        </Provider>

      </div>
    )
  }
}

export default App