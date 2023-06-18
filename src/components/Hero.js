import './Hero.css';

function Hero(){
    return(
        <>
        <main className="hero">
            <section className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
                <div className="hero-shopping">
                    <p>Also Available On</p>
                    <div className="hero-brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo"></img>
                        <img src="/images/flipkart.png"alt="flipkart-logo"></img>
                    </div>
                </div>
            </section>
            <section className="hero-image">
                <img src="/images/shoe_image.png" alt="shoe"></img>
            </section>
        </main>
        </>
    )
}
export default Hero;
