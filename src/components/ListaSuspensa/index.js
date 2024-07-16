import "./ListaSuspensa.css"

function ListaSuspensa(props) {
  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value)
  }

  return (
      <div className="lista-suspensa">
        <label>{props.label}</label>
        <select required={props.obrigatorio} value={props.valor} onChange={aoDigitado} >
              <option value=""></option>
              {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
      </div>
  )
}

export default ListaSuspensa