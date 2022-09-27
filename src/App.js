import React, { Component } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { creaeGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `
*{
  padding: 0px;
  margin: 0px;
  box-size: border-box;
  list-style: none;
}
`

const Title = styled.h1`

`



class toDo extends Component {

  state = {
    tarefa: '',
    lista: []
  }

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    })
  }

  add = (event) => {
    let { lista, tarefa } = this.state
    if (tarefa != "") {
      this.setState({
        tarefa: '',
        lista: lista.concat({
          tarefa: tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
    event.preventDefault();
  }

  remove = (id) =>{
    let{lista} = this.state
    this.setState({
      lista: lista.filter( (item) => {
        return item.id != id

      })
    })
  }


  render() {
    return (
      <div>
        <h1>React App To Do List</h1>
        <form onSubmit={(e) => e.preventDefault()}>
        <input onChange={this.handleChange} type="text" value={this.state.tarefa} />
        <button onClick={this.add}>Add</button>
        </form>
        <div>
          {this.state.lista.map((item) => (
            <ul>
              <li>{item.tarefa}
                <button onClick={() => {this.remove(item.id)}}>⌫</button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    )
  }
}

export default toDo