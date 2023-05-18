import {receiveUsers} from "./users_actions";
import {receiveQuestions} from "./questions_actions";
import {getInitialData} from "../util/api";

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        });
    };
}
