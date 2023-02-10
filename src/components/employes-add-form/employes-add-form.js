import { Component } from 'react';
import './employes-add-form.scss';

class EmployesAddForm extends Component  {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    // onSubmit = (e) => {
    //     e.preventDefault();
    //     const {onAdd} = this.props;
    //     const {name, salary} = this.state;

    //     if(name.length <= 3 || salary === '') return;
        
    //     onAdd(name, salary);
    // };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }
// test static
    static sayHello = (name) => {
        console.log('Hi ' + name);
    };
    
    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}
                >
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        onChange={this.onInputChange}
                        value={name}
                    />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary'
                        onChange={this.onInputChange}
                        value={salary} 
                    />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                    >
                        Добавить
                    </button>
                </form>
            </div>
        );   
    }
}

EmployesAddForm.sayHello('Tima');

export default EmployesAddForm;