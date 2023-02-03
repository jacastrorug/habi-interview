import { ActionModel } from "../../models/ActionModel";
import { StepModel } from "../../models/StepModel";
import { SET_CURRENT_STEP, SET_FORM, SET_STEPS, UPDATE_FORM } from "./constants";

interface DispatchFn {
    (action: ActionModel): void
}

export const setSteps = (payload: StepModel[]) => (dispatch: DispatchFn) => {
    dispatch({
        type: SET_STEPS,
        payload
    })
};

export const setCurrentStep = (payload: number) => (dispatch: DispatchFn) => {
    dispatch({
        type: SET_CURRENT_STEP,
        payload
    })
}

export const initForm = () => (dispatch: DispatchFn) => {
    dispatch({
        type: SET_CURRENT_STEP,
        payload: 0
    });

    dispatch({
        type: SET_FORM,
        payload: {}
    })

};

export const updateForm = (payload: { [key: string]: string | number }) => (dispatch: DispatchFn) => {
    dispatch(({
        type: UPDATE_FORM,
        payload
    }))
};

