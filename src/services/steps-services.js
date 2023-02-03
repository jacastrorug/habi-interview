import FormSteps from "../data/steps";

export const getFormSteps = () => {
  const data = FormSteps;

  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(data);
    }, 2000);
  });
};
