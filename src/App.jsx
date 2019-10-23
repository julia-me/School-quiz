import React, {useState}  from 'react';
import "./App.css"
import {geographyAQuestionsArr, biologyQuestionsArr, randomQuestionsArr} from './data/questionData.js'
// import * as Questions from './data/questionData.js'
import Question from './components/Question'
import Start from './components/StartPage'
import Timer from './Elements/Timer.jsx' 
import Result from './components/Result'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';



const App = ()  =>{
  // const timeOntext = 1.5;
  // const [testIsOver, setTestIsOver] = useState(false);
  // const [showTimer, setShowTimer] = useState(false);
  // const [messageWindow, semtMessageWindow]=useState(true)
  // const [testIsOver, setTestIsOver]=useState(false)
  const [answersModel, setAnswersModel]=useState()
  const [res, setRes] = useState(0)


  return (
    <BrowserRouter>

    <Switch>
      <Route exact path="/">
        <Redirect to="/start" />
      </Route>
      <Route path="/start"><Start/></Route>
      <Route path="/test/geogr"><Question data={geographyAQuestionsArr} answersModel={answersModel} setAnswersModel={setAnswersModel} res={res} setRes={setRes}/></Route>
      <Route path="/test/biol"><Question data={biologyQuestionsArr} answersModel={answersModel} setAnswersModel={setAnswersModel} res={res} setRes={setRes} /></Route>
      <Route path="/test/rand"><Question data={randomQuestionsArr} answersModel={answersModel} setAnswersModel={setAnswersModel} res={res} setRes={setRes}/></Route>
      <Route path="/result">< Result answersModel={answersModel} res={res} /></Route>
    </Switch>
  </BrowserRouter>

  );
}

 
export default App;
