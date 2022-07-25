import { Component } from 'react';
import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onValueChange = (e) => {
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    addEmployee = () => {

    }
    
    render() {
        const {name, salary, onAddEmployee} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input onChange={this.onValueChange} type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" name='name' value={name} />
                    <input onChange={this.onValueChange} type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" name='salary' value={salary} />
    
                    <button onClick={() => onAddEmployee(name, salary)} type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}


export default EmployersAddForm;