import { connect } from "react-redux";
import logoHabi from "../../assets/img/habi-logo.png";
import { initForm } from "../../redux/actions";
import MainButton from "./MainButton";
import "./styles.css";

interface ComponentProps {
  initForm?: () => void;
}

function Home(props: ComponentProps) {
  const handleFormInit = () => {
    if (!props.initForm) return;

    props.initForm();
  };

  return (
    <main className="home_main_container">
      <section className="home_main_container--hero-action">
        <img className="mb-4" src={logoHabi} alt="Logo Habi" width="100" />
        <MainButton label="Vender" handleClick={handleFormInit} />
      </section>
    </main>
  );
}

const mapDispatchToProps: any = {
  initForm,
};

export default connect(null, mapDispatchToProps)(Home);
