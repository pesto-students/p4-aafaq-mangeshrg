import { CgTrash } from "react-icons/cg";
function TodoItem(props) {
    const { item, del, taskComp } = props;
    const styleTaskDone = {
        textDecoration: 'line-through'
    };
    return (
        <tr>
            <td style={{width:'10%',textAlign:'center'}}>
                <label htmlFor="multi-terms" className="pure-checkbox">
                    <input type="checkbox" checked={item?.isDone} onChange={(e) => taskComp(e, item)} />
                </label>
            </td>
            <td style={item?.isDone ? styleTaskDone: null}>{item?.name}</td>
            <td style={{width:'10%',textAlign:'center',color:'red'}} onClick={() => del(item)}><CgTrash/></td>
        </tr>
    )
}

export default TodoItem