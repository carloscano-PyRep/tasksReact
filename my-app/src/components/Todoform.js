import React from "react";


class Todoform extends React.Component {
    constructor() {
        super();
        this.state = {
            "number": '',
            "title": '',
            "description": '',
            "priority": '',
            "responsible": ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e) {
        const {value,name} = e.target;
        this.setState({
            [name]: value 
        })
        /* console.log(e.target.value, e.target.name); */
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('Enviando datos')
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="card">
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="title"
                                onChange={this.handleInput}
                                className="form-control"
                                placeholder="Título" />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="responsible"
                                onChange={this.handleInput}
                                className="form-control"
                                placeholder="Responsable" />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="description"
                                onChange={this.handleInput}
                                className="form-control"
                                placeholder="Descripción" />
                        </div>
                        <div className="form-group mb-3">
                            Prioridad
                            <select
                            name="priority"
                            className="form-control"
                            onChange={this.handleInput}
                            >
                                <option>Bajo</option>
                                <option>Medio</option>
                                <option>Alto</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success">Guardar</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Todoform;