import React from 'react'
import { connect } from "react-redux";

const Titulares = ({titulares}) => (
    <section>
        <h2>Titulares</h2>
        <div className="campo">
            {
                titulares.map(jugador => (
                    <article className="titular">
                        <div>
                            <img src={jugador.foto} alt={jugador.nombre} />
                            <button>X</button>
                        </div>
                        <p>{jugador.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = (state) => ({
    titulares: state.titulares,
  });
  
  const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)