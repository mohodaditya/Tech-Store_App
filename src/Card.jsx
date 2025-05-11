import './Card.css'

function Card({ 
    image = "https://via.placeholder.com/150", // Added default value for 'image' prop
    product = "Default Product",              // Added default value for 'product' prop
    dis = "Default description",              // Added default value for 'dis' prop
    link = "#" ,                              // Added default value for 'link' prop
    price = "0 INR"
}) {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                {/* Displaying the image using the 'image' prop */}
                <img src={image} className="card-img-top" alt="Image of Product" />
                <div className="card-body">
                    {/* Displaying the product title using the 'product' prop */}
                    <h className="card-title" id="title"><b></b>{product}</h>
                    {/* Displaying the description using the 'dis' prop */}
                    <p className="card-text">{dis}</p>
                    <h4>{price}</h4>
                    {/* Displaying the link using the 'link' prop */}
                    <a href={link} className="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </>
    );
}

export default Card;
