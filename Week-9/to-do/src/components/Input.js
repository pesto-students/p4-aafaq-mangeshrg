function Input(props) {
    const { data, setData, addToDo } = props

    return (
        <form className="pure-form" onSubmit={(e) => e.preventDefault()}>
            <fieldset>
                <input type="text" className="pure-input-2-3" placeholder="New Task" onChange={(e) => setData(e.target.value)} value={data}/>
                <button type="submit" className="pure-button pure-button-primary" onClick={() => addToDo()} disabled={!data}>Add</button>
            </fieldset>
        </form>
    )
}

export default Input