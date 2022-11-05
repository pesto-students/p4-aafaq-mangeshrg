import { useState } from 'react'
import uuid from 'react-uuid';
import Input from "./components/Input";
import TodoList from './components/TodoList';

function App() {
	const [data, setData] = useState('')
	const [list, setList] = useState([])
  
	const addToDo = () => {
		if (data.length > 0) {
			const newItem = {
				id: uuid(),
				name: data,
				isDone: false
			}
			setList([...list, newItem])
		}
		setData('')
	}

	const deleteItem = (item) => {
		let updatedList = list.filter((data) => data?.id !== item?.id)
		setList([...updatedList])
	}
	
	const taskCompleted = (e, item) => {
		let tempList = [...list]
		tempList.forEach((data, i) => {
			if (data?.id === item?.id) {
				data.isDone = e.target.checked
			}
		})
		setList([...tempList])
	}

	return (
		<>
			<div className="pure-g" style={{textAlign:'center'}}>
				<div className="pure-u-1-1"><h1>To-Do</h1></div>
			</div>
			<div className="pure-g">
				<div className="pure-u-1-3"></div>
				<div className="pure-u-1-3"><Input data={data} setData={setData} addToDo={addToDo}/></div>
				<div className="pure-u-1-3"></div>
			</div>
			<div className="pure-g">
				<div className="pure-u-1-5"></div>
				<div className="pure-u-3-5">
				<TodoList list={list} del={deleteItem} taskComp={taskCompleted}/>
				</div>
				<div className="pure-u-1-5"></div>
			</div>
		</>
	);
}

export default App;
