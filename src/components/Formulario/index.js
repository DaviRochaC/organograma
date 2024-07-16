import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'

function Formulario(props) {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('')
    
    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoAdicionadoNovoColaborador({
            nome,
            cargo,
            imagem,
            time
        })   

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
            <h2>Informe os dados para criar o card do colaborador</h2>
                <CampoTexto valor={nome} aoAlterado={(nome) => setNome(nome)} obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto valor={cargo} aoAlterado={(cargo) => setCargo(cargo)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto valor={imagem} aoAlterado={(imagem) => {setImagem(imagem)}} obrigatorio={true} label="Imagem" placeholder="Digite o endereco da imagem"/>
                <ListaSuspensa valor={time} aoAlterado={(time) => {setTime(time)}} obrigatorio={true} label="Time" itens={props.nomeDosTimes}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario