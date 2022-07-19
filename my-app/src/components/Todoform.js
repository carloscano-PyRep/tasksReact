import React from "react";


class Todoform extends React.Component {
    constructor() {
        super();
        this.state = {
            "number": '',
            "title": '',
            "description": '',
            "priority": 'low',
            "responsible": ''
        };
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e) {
        const {value,name} = e.target;
        this.setState({
            [name]: value 
        })
        /* console.log(e.target.value, e.target.name); */
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="title"
                                onChange={this.handleInput}
                                className="form-control"
                                placeholder="Title" />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="responsible"
                                onChange={this.handleInput}
                                className="form-control"
                                placeholder="Responsible" />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="description"
                                onChange={this.handleInput}
                                className="form-control"
                                placeholder="Description" />
                        </div>
                        <div className="form-group mb-3">
                            <select
                            name="priority"
                            className="form-control"
                            onChange={this.handleInput}
                            >
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-success">Save</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Todoform;