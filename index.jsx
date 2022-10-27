function App() {
    

        const [quotes, setQuotes] = React.useState([]);
        const [randomQuote, setRandomQuote] = React.useState([]);
        const [color, setColor] = React.useState(["#111"]);


        React.useState( () => {
            async function fetchData(){
                const response = await fetch("https://type.fit/api/quotes")
                const data = await response.json()
                setQuotes(data)
                let randIndex = Math.floor(Math.random() * data.length)
                setRandomQuote(data[randIndex])
            }
            fetchData()
        }, [])

        const getNewQuote = () => {
            const colors = [
               "#286a6c",
               "#f4f4ea",
               "#894160",
               "#a474dc",
               "#708a44",
               "#9ab762",
               "#93831d",
               "#172e1e",
               "#e32636",
               "#000000",
            ]

            


            let randIndex = Math.floor(Math.random() * quotes.length)
            let randColorIndex = Math.floor(Math.random() * colors.length)
            setRandomQuote(quotes[randIndex])
            setColor(colors[randColorIndex])
            
        }

    return(
        <div style={{backgroundColor: color, minHeight: "100vh"}}>
            <div className="container pt-5">
                
                <div className="jumbotron mx-auto">
                    <div className="card">
                        <div className="card-header">Inspirational Quotes</div>
                        <div className="card-body">
                            {randomQuote ? (
                            <>
                            <h5 className="card-title"> {randomQuote.author || "No author"}</h5>
                            <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                            </>
                            ) : (
                                <h2>Loading</h2>
                            )}
                            <div>
                                <button onClick={getNewQuote } className="btn btn-primary ">New Quote</button>
                                
                                
                                <a 
                                href={ "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                                    encodeURIComponent(
                                        '"' + randomQuote.text + '" ' + randomQuote.author)} 
                                        target="_blank"
                                        className="btn btn-warning">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                
                                
                                <a href={ 
                                    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp=" +
                                    encodeURIComponent(randomQuote.author) + 
                                    "&content=" + 
                                    encodeURIComponent(randomQuote.text) +
                                    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
                                    }
                                        target="_blank" className="btn btn-danger" >
                                    <i className="fa fa-tumblr"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div> 
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App / >       
);
