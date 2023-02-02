const Footer=()=>{
    return <footer>
        <section className="section section__boost">
            <div className="container">
                <h1>Boost your links today</h1>
                <button>Get Started</button>
            </div>
        </section>
        <section className="section section__mainFooter">
            <div className="container">
                <div className="logo"></div>
                <div className="feature-list">
                    <h3>Features Resources</h3>
                    <a href="">Link Shortening</a>
                    <a href="">Branded Links</a>
                    <a href="">Analytics</a>
                </div>
                <div className="resource-list">
                    <h3>Resources</h3>
                    <a href="">Blog</a>
                    <a href="">Developers</a>
                    <a href="">Support</a>
                </div>
                <div className="company-list">
                    <h3>Company</h3>
                    <a href="">About</a>
                    <a href="">Our Team</a>
                    <a href="">Careers</a>
                    <a href="">Contact</a>
                </div>
                
                <div className="socials"></div>
            </div>
        </section>
    </footer>
}

export default Footer