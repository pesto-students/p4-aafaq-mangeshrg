import TodoItem from "./TodoItem";

function TodoList(props) {
    const { list, del, taskComp } = props;

    return (
        <table className="pure-table pure-table-horizontal" style={{width:'100%'}}>
            <tbody>
                {
                    list.map((item) => {
                        return <TodoItem key={item?.id} item={item} del={del} taskComp={taskComp} />
                    })
                }
            </tbody>
        </table>
    )

}

export default TodoList;