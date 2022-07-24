import './employers-list-item.css';
import {Component} from 'react';

// = ({name, salary, increase}) => 
class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: this.props.increase,
            premium: false
        }
    }
    // classNames = () => {
    //     if (this.state.increase) {
    //         return this.state.classNames + ' increase';
    //     }
    //     return this.state.classNames;
    // }
    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }
    premium = () => {
        this.setState(({premium}) => ({
            premium: !premium
        }))
    }
    render() {
        const {name, salary} = this.props; 
        const {increase, premium} = this.state;
        let classNames = `list-group-item d-flex justify-content-between`;
        if (increase) {
            classNames += ' increase';
        }
        if (premium) {
            classNames += ' like';
        }
        return (    
            // <li className={`list-group-item d-flex justify-content-between` + (increase ? ' increase' : '')}>
            <li className={classNames}>
                <span onClick={this.premium} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={this.onIncrease} type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployersListItem;

