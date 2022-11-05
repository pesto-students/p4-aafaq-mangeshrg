const Output = (props) => {
    const { shortenedURL } = props
    if(shortenedURL && shortenedURL !== "Generating") {
        return (
            <>
                <p className="content-head-ribbon">{shortenedURL ? "Your short url: " + shortenedURL : ''}</p>
                <button className="pure-button pure-button-primary" onClick={() => {navigator.clipboard.writeText(shortenedURL)}}>Copy</button>
            </>
        )
    } else if (shortenedURL === "Generating") {
        return (
            <p className="content-head-ribbon">Generating URL...</p>
        )
    } else {
        return (
            <></>
        )
    }
}

export default Output;