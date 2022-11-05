function Input(props) {
    const { data, setData, shortURL } = props

    return (
        <form className="pure-form splash-subhead" onSubmit={(e) => e.preventDefault()}>
            <fieldset>
                <input type="text" className="pure-input-2-3" placeholder="Enter URL" onChange={(e) => setData(e.target.value)} value={data}/>
                <p>
                    <button className="pure-button pure-button-primary" onClick={() => shortURL()}>Shorten</button>
                </p>
            </fieldset>
        </form>
    )
}

export default Input