import { InputModel } from "./InputModel";

export interface StepModel {
    name: string;
    component: string;
    path: string;
    index: number;
    description: string;
    required: boolean;
    inputs: InputModel[]
}