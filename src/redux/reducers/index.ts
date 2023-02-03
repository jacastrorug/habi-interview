import { ActionModel } from "../../models/ActionModel";
import { SET_CURRENT_STEP, SET_FORM, SET_STEPS, UPDATE_FORM } from "../actions/constants";

const INITIAL_STATE = {
    step: -1, // step === -1 means not initiated
    form: null,
    steps: null,
}

const reducer = (state: any = INITIAL_STATE, action: ActionModel) => {
    switch (action.type) {
        case SET_CURRENT_STEP:
            return {
                ...state,
                step: action.payload ?? -1
            }
        case SET_STEPS:
            return {
                ...state,
                steps: action.payload ? [...action.payload] : null
            }
        case SET_FORM:
            return {
                ...state,
                form: action.payload ? { ...action.payload } : null
            }
        case UPDATE_FORM:
            return {
                ...state,
                form: { ...state.form, ...action.payload }
            }
        default:
            return state;
    }
};

export default reducer;