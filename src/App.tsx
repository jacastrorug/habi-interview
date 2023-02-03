import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setSteps } from "./redux/actions";

import AppRouter from "./components/AppRouter";
import Loading from "./components/Loding";
import { StepModel } from "./models/StepModel";
import { getFormSteps } from "./services/steps-services";

import "./App.css";

interface ComponentProps {
  setSteps: (action: StepModel[]) => void;
}

function App(props: ComponentProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFormSteps()
      .then((response) => {
        setLoading(false);
        const { steps } = response.router_config;
        props.setSteps(steps);
      })
      .catch((err) => {
        //handle error
        setLoading(false);
        console.error(err);
      });
  }, [props]);

  if (loading) {
    return <Loading />;
  }

  return (
      <AppRouter />
  );
}

const mapDispatchToProps = {
  setSteps,
};

export default connect(null, mapDispatchToProps)(App);
