import React, {useState, createContext} from 'react';

export const SurveyShowContext = createContext();
export const ShowUploadLearningMaterialsContext = createContext();
export const ResultShowContext = createContext();
export const QuestionContext = createContext();
export const ViewLearningMaterialsContext = createContext();
export const ShowCreateQuestionsContext = createContext();
export const ShowAdminUsersListContext = createContext();
export const ShowAdminViewStatisticsContext = createContext();
export const ShowBoardOfUsersContext = createContext();

export const SurveyShowProvider =(props) => {
    const [showSurvey, setShowSurvey] = useState(false)
    
    return(
        <SurveyShowContext.Provider value={[showSurvey, setShowSurvey]}>
            {props.children}
        </SurveyShowContext.Provider>
    );
}
export const ShowBoardOfUsersProvider =(props) => {
    const [showBoardOfUsers, setShowBoardOfUsers] = useState(false)
    
    return(
        <ShowBoardOfUsersContext.Provider value={[showBoardOfUsers, setShowBoardOfUsers]}>
            {props.children}
        </ShowBoardOfUsersContext.Provider>
    );
}
export const ShowCreateQuestionsProvider =(props) => {
    const [showCreateQuestions, setShowCreateQuestions] = useState(false)
    
    return(
        <ShowCreateQuestionsContext.Provider value={[showCreateQuestions, setShowCreateQuestions]}>
            {props.children}
        </ShowCreateQuestionsContext.Provider>
    );
}

export const ViewLearningMaterialsProvider = (props) => {
    const [showViewLearningMaterials, setShowViewLearningMaterials] = useState(false)
    
    return(
        <ViewLearningMaterialsContext.Provider value={[showViewLearningMaterials, setShowViewLearningMaterials]}>
            {props.children}
        </ViewLearningMaterialsContext.Provider>
    );
}
export const ShowAdminViewStatisticsProvider = (props) => {
    const [showAdminViewStatistics, setShowAdminViewStatistics] = useState(false)
    
    return(
        <ShowAdminViewStatisticsContext.Provider value={[showAdminViewStatistics, setShowAdminViewStatistics]}>
            {props.children}
        </ShowAdminViewStatisticsContext.Provider>
    );
}


export const ResultShowProvider =(props) => {
    const [showResult, setShowResult] = useState(false)
    
    return(
        <ResultShowContext.Provider value={[showResult, setShowResult]}>
            {props.children}
        </ResultShowContext.Provider>
    );
}

export const ShowUploadLearningMaterialsProvider =(props) => {
    const [showUploadLearningMaterials, setShowUploadLearningMaterials] = useState(false)
    
    return(
        <ShowUploadLearningMaterialsContext.Provider value={[showUploadLearningMaterials, setShowUploadLearningMaterials]}>
            {props.children}
        </ShowUploadLearningMaterialsContext.Provider>
    );
}

export const ShowAdminUsersListProvider =(props) => {
    const [showAdminUsersList, setShowAdminUsersList] = useState(false)
    
    return(
        <ShowAdminUsersListContext.Provider value={[showAdminUsersList, setShowAdminUsersList]}>
            {props.children}
        </ShowAdminUsersListContext.Provider>
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