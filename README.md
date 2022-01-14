# Survey JS React V2 Warning Messages Repo

SurveyJS Ticket: https://surveyjs.answerdesk.io/ticket/details/t8573/surveyjs-creator-react-v2-throws-warnings-when-used-in-a-react-app

Repo of two warning messages showing up when using SurveyJS React V2 in a React project. The below project was bootstrapped using react ```npx create-react-app```
and has no defaults changed. The only difference is the App component renders a creator component that contains SurveyJS React V2 and a bare minimum Survey defined in JSON.

### Repo Steps
- run ```npm start```
- Click on the existing question and select the change question type button
- Click to change the question type to any other question type
- Result: Two warnings throw. One from the first click and another from the second.

These warnings are not throwing from the examples on the SurveyJS site and only are happening when I run it inside an existing react project.

### Warning Message One
```
react_devtools_backend.js:4045 Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components
```

### Warning Message Two
```
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
