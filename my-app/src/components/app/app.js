import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John Smith',salary: 1100, increase: false, id: 2},
                {name: 'Sergey Chudinov',salary: 1500, increase: false, id: 1},
                {name: 'Al Pachino',salary: 700, increase: false, id: 3},
                {name: 'Robert De Niro',salary: 300, increase: false, id: 4}
            ]
        }
    }
    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter((item) => {
                return item.id !== id
            })
        }))
    }
    onAddEmployee = (name, salary) => {
        const object = {
            name: {name},salary: {salary}, increase: false, id: 5
        }
        this.setState(({data}) => {
            let newData = data;
            newData.push(object);
            return {
                data: newData
            }
        })
    }
    render() {
        const {data} = this.state;
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList 
                    data={data}
                    onDelete={this.deleteItem}/>
                <EmployersAddForm
                    onAddEmployee={this.onAddEmployee}/>
            </div>
        )
    }
}

export default App;

// onDelete={id => {data.splice(id - 1, 1)}}/>
// cartData.contents = cartData.contents.filter((item) => {
//     return item.id_product !== +req.params.id
// });