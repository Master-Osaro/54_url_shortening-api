const URLShortener=()=>{
    return <section className="section section__URL">
        <div className="container">
            <form action="">
                <div className="form-group">
                    <input type="text" placeholder="Shorten a link here..."/><button className="btn btn-shorten">Shorten It!</button>
                </div>
                <p className="error">this is error</p>
                
            </form>
            <div className="url__list">
                <div className="url__item">
                    <div className="url">http://goallz.com</div>
                    <div className="url__btn-group">
                        <p>http://goallz.com</p>
                        <button className="btn btn-shorten">Copy</button>
                    </div>
                </div>
            
            </div>
            
        </div>
    </section>
}

export default URLShortener