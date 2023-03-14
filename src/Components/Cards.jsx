function Cards({ news }) {

    const { title, urlToImage, url, description } = news
    return (
        <>
            <div className="card  col-lg-3  p-2 bg-dark text-light   border border-secondary-subtle" >
                <img src={urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <marquee behavior="" scrollamount="2" direction="up"><p className="card-text">{description}</p></marquee>
                    <a href={url} rel="noreferrer" target="_blank" className="btn btn-success w-100 rounded-0">Read More</a>
                </div>
            </div>

        </>
    )
}

export default Cards
