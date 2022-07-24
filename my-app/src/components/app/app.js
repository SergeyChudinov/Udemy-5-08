import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';



function App() {
    const data = [
        {name: 'John Smith',salary: 1100, increase: false, id: 1},
        {name: 'Sergey Chudinov',salary: 1500, increase: true, id: 2},
        {name: 'Al Pachino',salary: 700, increase: false, id: 3},
        {name: 'Robert De Niro',salary: 300, increase: false, id: 4}
    ];
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    )
}

export default App;