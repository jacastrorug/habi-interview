import { useSelector } from "react-redux";
import * as Form from "../../components/Form";
import Layout from "../../components/Layout";
import Loading from "../../components/Loding";
import ProgressBtn from "../../components/Progress/ProgressBtn";
import { InputModel } from "../../models/InputModel";
import { StateModel } from "../../models/StateModel";

interface ComponentProps {
  index: number;
  inputs: InputModel[];
  component: string;
}

function FormContainer(props: ComponentProps) {
  const { component } = props;
  const step = useSelector((state: StateModel) => state.step);
  const FormCpm = Reflect.get(Form, component);

  if (step === -1) return <Loading />;

  return (
    <Layout showProgressBar={true}>
      <FormCpm />
      <ProgressBtn />
    </Layout>
  );
}

export default FormContainer;
