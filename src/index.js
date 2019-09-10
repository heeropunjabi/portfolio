import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Resume from 'react-awesome-resume'
import 'semantic-ui-css/semantic.min.css';

import myJSONresume from './resume.json';

// Remap standard JSON Resume formatting to what app expects
const skillMapping = { "Beginner": 25, "Intermediate": 50, "Advanced": 75, "Master": 90 };

myJSONresume.languages = myJSONresume.languages.map(item => { return {"name": item.language, "level": item.fluency}});

myJSONresume.skills = myJSONresume.skills.map(item => { item.level = skillMapping[item.level]; return item });

// Render
ReactDOM.render(
    <Resume jsonResume={myJSONresume} theme="default" />,
    document.getElementById("root")
);

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
