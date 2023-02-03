import { StepModel } from "./StepModel";

export interface StateModel {
    steps: StepModel[],
    step: number,
    form: any
}