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
                {name: 'John Smith',salary: 1100, increase: false, rise: false, id: 2},
                {name: 'Sergey Chudinov',salary: 1500, increase: false, rise: false, id: 1},
                {name: 'Al Pachino',salary: 700, increase: false, rise: false, id: 3},
                {name: 'Robert De Niro',salary: 300, increase: false, rise: false, id: 4}
            ],
        }
        this.maxId = 5;
    }
    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter((item) => {
                return item.id !== id
            })
        }))
    }
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }
    // onToggleIncrease = (id) => {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(el => el.id === id);
    //         const old = data[index];
    //         const newItem = {...old, increase: !old.increase};
    //         const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //         return {
    //             data: newArray
    //         }
    //     })
    // }
    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }
    //             return item
    //         })
    //     }))
    // }
    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees}
                    increased={increased}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    // onToggleIncrease={this.onToggleIncrease}
                    // onToggleRise={this.onToggleRise}
                    onToggleProp={this.onToggleProp}/>
                <EmployersAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;

// awardWillBeReceived={awardWillBeReceived}