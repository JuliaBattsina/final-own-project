import Image4 from './image4.jpg';
import Image5 from './image5.jpg';
import './Home.styles.css';
import React from 'react';
import MyImageComponent from './start.jpg';
import { data } from './data'; 
import  CartContext  from './CartContext';
import  { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
  const { addToCart } = useContext(CartContext); 

  const handleBuyNow = (item) => {
    addToCart(item);
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/shop');
  };
 
  const handlyClick = () => {
    navigate('/contact');
  };
    return (
      <div className='App'>
        <div className='images-container'>
          <img src={MyImageComponent} alt="start" />
          <div className='overlay-text'>
            <p>Plants and Pots</p>
            <p>For Your Home</p>
            <button onClick={handleClick}>Shop Now</button>
          </div>
        </div>
        <div>
          <h2>Find Your Favorite One</h2>
          <div className="favorite-images">
          
            {data.slice(0, 3).map(item => (
              <div className="image-item" key={item.id}>
                <img src={item.image} alt={item.name} /> 
                <div className="image-info">
                  <p className='text-info'>{item.name}</p>
                  <button onClick={() => handleBuyNow(item)}>Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="new-image-container">
          <img src={Image4} alt="Image4" />
        </div>
        <div className="gift-card-container">
          <div className="image-container">
            <img src={Image5} alt="Gift Card" />
            <p className="gift-card-text">GIFT CARD</p>
          </div>
          <div className="text-container">
            <h3>Give the Gift of Greenery</h3>
            <p>Plants are as thoughtful a gift as flowers and last much longer. With a gift card, you can brighten up someone’s home, office or dorm room with a potted plant of their choice. They’re available in any denomination and we’ll mail it for free!</p>
            <button onClick={handlyClick}>Get a Gift Card</button>
          </div>
        </div>
      </div>
    );
}

export default Home;
