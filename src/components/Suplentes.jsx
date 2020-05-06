import React from 'react'
import { connect } from "react-redux";

const Suplentes = ({suplentes, quitarSuplente}) => (
    <section>
        <h2>Suplentes</h2>
        <div className="suplentes">
            {
                suplentes.map(jugador => (
                    <article className="suplente" key={jugador.id}>
                        <div>
                            <img src={jugador.foto} alt={jugador.nombre} />
                            <button onClick={() => quitarSuplente(jugador)}>X</button>
                        </div>
                        <p>{jugador.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = (state) => ({
    suplentes: state.suplentes,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    quitarSuplente(jugador){
        dispatch({
            type: "QUITAR_SUPLENTE",
            jugador
        })
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)