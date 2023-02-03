import { connect } from "react-redux";
import Layout from "../../components/Layout";

import "./styles.css";

function Summary() {
  return (
    <Layout>
      <section className="summary-container">
        <section className="summary-container__step">
          <span className="summary-step__key">Nombre:</span>
          <span className="summary-step__value">Julián Castro Ruge</span>
        </section>
        <section className="summary-container__step">
          <span className="summary-step__key">Email:</span>
          <span className="summary-step__value">juliancastroruge@gmail.com</span>
        </section>
        <section className="summary-container__step">
          <span className="summary-step__key">Dirección:</span>
          <span className="summary-step__value">Calle 70A # 77 J - 70</span>
        </section>
        <section className="summary-container__step">
          <span className="summary-step__key">Número de piso:</span>
          <span className="summary-step__value">28</span>
        </section>
        <section className="summary-container__step">
          <span className="summary-step__key">Carácteristicas Apto:</span>
          <span className="summary-step__value">BBQ, Parque</span>
        </section>
        <section className="summary-container__step">
          <span className="summary-step__key">Parqueadero:</span>
          <span className="summary-step__value">Cubierto</span>
        </section>
        <section className="summary-container__step">
          <span className="summary-step__key">Valor:</span>
          <span className="summary-step__value">$200.000.00</span>
        </section>
        <section className="summary-container__step">
          <span className="summary-step__key">Ascensor:</span>
          <span className="summary-step__value">Sí</span>
        </section>
      </section>
    </Layout>
  );
}

export default connect(null, null)(Summary);
