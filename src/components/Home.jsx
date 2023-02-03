import Footer from "./Footer"
import Header from "./Header"
import URLShortener from "./URLShortener"
import heroIllustration from "../images/illustration-working.svg"
import advancedBrandRecogIllustration from "../images/icon-brand-recognition.svg"
import advancedDetailedRecordsIllustration from "../images/icon-detailed-records.svg"
import advancedFullyCustomizedIllustration from "../images/icon-fully-customizable.svg"

const Home=()=>{
    return (
        <>
            <Header />
            <main>
                <section className="section section__hero">
                    <div className="container">
                        <div className="section__hero-text">
                            <h1>More than just shorter links</h1>
                            <p>Build your brand’s recognition and get detailed insights 
                                on how your links are performing.</p>
                            <button className='btn btn-primary'>Get Started</button>
                        </div>
                        <div className="section__hero-img">
                            <img src={heroIllustration} alt="Illustration of a person working" />
                        </div>
                    </div>
                </section>
                <URLShortener />
                <section className="section section__advancedStat">
                    <div className="container">
                        <div className="section__advancedStat-text">
                            <h2>Advanced Statistics</h2>
                            <p>  Track how your links are performing across the web with our advanced statistics dashboard.</p>
                        </div>
                        <div className="section__advancedStat-grid">
                            <div className="section__advancedStat-gridItem section__advancedStat-gridItem-1">
                                <div className="icon__wrapper">
                                    <div className="icon__bg"><img src={advancedBrandRecogIllustration} alt="" /></div>
                                </div>
                                <h3>Brand Recognition</h3>
                                <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                            </div>
                            <div className="section__advancedStat-gridItem section__advancedStat-gridItem-2">
                                <div className="icon__wrapper">
                                    <div className="icon__bg"><img src={advancedDetailedRecordsIllustration} alt="" /></div>
                                </div>
                                <h3>Detailed Records</h3>
                                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                            </div>
                            <div className="section__advancedStat-gridItem section__advancedStat-gridItem-3">
                                <div className="icon__wrapper">
                                    <div className="icon__bg"><img src={advancedFullyCustomizedIllustration} alt="" /></div>
                                </div>
                                <h3>Fully Customizable</h3>
                                <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer /> 
        </>
    )
}

export default Home