import './app-filter.css'

const AppFilter = (props) => {
    const buttonData = [
        {name: 'all', label: 'Все сотрудники', colored: false},
        {name: 'rise', label: 'На повышение', colored: false},
        {name: 'moreThen1000', label: 'З/П больше 1000$', colored: false},
        {name: 'lessThen1000', label: 'З/П меньше 1000$', colored: true}
    ];
    const buttons = buttonData.map(({name, label, colored}) => {
        const active = props.filter === name;
        const clazz = active ? "btn btn-light" : "btn btn-outline-light";
        const red = colored ? 'red' : '';
        return (
            <button 
            onClick={() => props.onFilterSelect(name)}
                className={clazz}
                type="button"
                key={name}
                style={{color: red}}>
                {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;