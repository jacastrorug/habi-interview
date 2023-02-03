import React from "react";
import Progress from "../Progress";
import "./styles.css";
import ProgressMainContainer from "../Progress/ProgressMainContainer";

interface ComponentProps extends React.PropsWithChildren {
  showProgressBar?: boolean;
}

export default function Layout(props: ComponentProps) {
  return (
    <main className="layout-main-container">
      <ProgressMainContainer>{props.children}</ProgressMainContainer>
      {props.showProgressBar && <Progress />}
    </main>
  );
}
