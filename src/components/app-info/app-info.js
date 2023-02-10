import './app-info.css';

const AppInfo = (props) =>{

    return (
        <div className="app-info">
            <h1>Учет сотрудников компании N:</h1>
            <h2>Общее число сотрудников: {props.countEmployes}</h2>
            <h2>Премию получат: {props.countIncrease}</h2>
        </div>
    );
};

export default AppInfo;