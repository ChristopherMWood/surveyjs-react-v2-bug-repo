/* eslint-disable */
import React from 'react';
import * as SurveyCreator from "survey-creator-react";
import "survey-core/modern.css";
import "survey-creator-react/survey-creator-react.css"; // Breaks side nave styling
import "survey-core/defaultV2.css";

const testJson = {
    "showProgressBar": "top",
    "progressBarType": "questions",
    "pages": [
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "Test Question",
                    "title": "Test Quetsions Description?",
                    "visible": true,
                    "variableId": 64767,
                    "choices": [
                        {
                            "value": "1",
                            "text": "One"
                        },
                        {
                            "value": "2",
                            "text": "Two"
                        },
                        {
                            "value": "3",
                            "text": "Three"
                        },
                        {
                            "value": "4",
                            "text": "Four"
                        },
                        {
                            "value": "5",
                            "text": "Five"
                        }
                    ]
                }
            ]
        }
    ]
};

const surveyCreator = new SurveyCreator.SurveyCreator({});
surveyCreator.JSON = testJson;
const renderContainerId = 'assessmentEditorContainer';

const MHOSurveyCreator = () => {
   
    React.useEffect(() => {
        surveyCreator.render(renderContainerId);
    }, []);
   
    return (
        <>
            <div id={renderContainerId} />
        </>
    );
};

export default MHOSurveyCreator;