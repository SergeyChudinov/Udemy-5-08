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
            term: '',
            filter: 'all'
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
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.name.indexOf(term) > -1
        })
    }
    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }
    filtePost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            case 'lessThen1000':
                return items.filter(item => item.salary < 1000);    
            default:
                return items;             
        }
    }
    onFilterSelect = (filter) => {
        this.setState({
            filter: filter
        })
    }
    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filtePost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo employees={employees}
                    increased={increased}/>
                <div className="search-panel">
                    <SearchPanel term={term}
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployersList 
                    data={visibleData}
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