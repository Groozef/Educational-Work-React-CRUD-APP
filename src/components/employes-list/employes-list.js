import './employes-list.css';

import EmployesListItem from "../employes-list-item/employes-list-item";


const EmployesList = ({data, onDelete, onToggleProp}) => {
    // const newArr = data.map((obj, objIndex, data) => <EmployesListItem name={obj.name} salary={obj.salary}/> );
    // *OR with Spread Operator
    const newArr = data.map((item, i) => {
        const {id, ...itemProps} = item;
        return (
            <EmployesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    });
    // console.log(newArr)

    return (
        <ul className="app-list list-group">
            {newArr}
        </ul>
    );
}

export default EmployesList;