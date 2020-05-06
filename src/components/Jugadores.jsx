import React from "react";
import { connect } from "react-redux";

const Jugadores = ({ jugadores, agregarTitular }) => (
  <section>
    <h2>Jugadores</h2>
    <div className="contenedor-jugadores">
      {jugadores.map((jugador) => (
        <article className="jugador" key={jugador.id}>
          <img src={jugador.foto} alt={jugador.nombre}/>
            <h3>{jugador.nombre}</h3>
            <div>
              <button onClick={() => agregarTitular(jugador)}>Titular</button>
              <button>Suplente</button>
            </div>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  jugadores: state.jugadores,
});

const mapDispatchToProps = (dispatch) => ({
    agregarTitular(jugador) {
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);
