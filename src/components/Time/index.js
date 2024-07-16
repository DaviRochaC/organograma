import Colaborador from "../Colaborador"
import "./Time.css"

function Time(props) {

    console.log(props.colaboradores.length)
    return (
        props.colaboradores.length > 0 &&
       <section className="time" style={{backgroundColor: props.corSecundaria}}>
        <h3 style={{borderColor: props.corPrimaria}}>{props.titulo}</h3>
        <div className="colaboradores">
            {
                props.colaboradores.map(
                    (colaborador) => <Colaborador key={`${colaborador.nome}-${colaborador.time}`} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corPrimaria}/> 
                )
            }
        </div>
       </section>
    )
}

export default Time