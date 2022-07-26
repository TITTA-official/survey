import React, {useState, createContext} from 'react';

export const SurveyShowContext = createContext();
export const QuestionContext = createContext();

export const SurveyShowProvider =(props) => {
    const [showSurvey, setShowSurvey] = useState(false)
    
    return(
        <SurveyShowContext.Provider value={[showSurvey, setShowSurvey]}>
            {props.children}
        </SurveyShowContext.Provider>
    );
}

export const QuestionProvider = props => {
    const [questions, setQuestions] =useState([
        {
            id: 1,
            question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:2,
            question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:3,
            question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:4,
            question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:5,
            question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:6,
            question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
    ])

    return (
        <QuestionContext.Provider value={[questions, setQuestions]}>
            {props.children}
        </QuestionContext.Provider>
    )
}