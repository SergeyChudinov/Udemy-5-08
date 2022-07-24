import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';


const EmployersList = ({data}) => {
    const elements = data.map((item, i) => {
        const {id, ...itemProps} = item;
        return (
            // <EmployersListItem key={item.id} name={item.name} salary={item.salary} increase={item.increase}/>
            <EmployersListItem key={id} {...itemProps}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
} 

export default EmployersList;