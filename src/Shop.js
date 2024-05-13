import React, { useState } from 'react';
import { useCart } from './CartContext';
import Buttons from './Buttons'; // Вернули Buttons
import { data } from './data'; // Вернули data
import './Shop.styles.css';
import Swal from 'sweetalert2';

function Shop() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [plants, setPlants] = useState(data);
  const { addToCart } = useCart();

  const chosenPlants = (searchTerm) => {
    const newPlants = data.filter((element) => element.searchTerm === searchTerm);
    setPlants(newPlants);
  };

  const handleBuyNow = (item) => {
    addToCart(item);
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Add to the Cart",
        showConfirmButton: false,
        timer: 1500
      });
  };

  return (
    <div>
      <Buttons filteredPlants={chosenPlants} addToCart={addToCart} />
      <div className='products'>
        {plants && plants.map((element) => {
          const { id, name, price, image, image1 } = element;

          return (
            <div className="product-card" key={id}>
              <img
                src={hoveredImage === image ? image1 : image}
                width="400px"
                height="500px"
                alt='plant'
                onMouseEnter={() => setHoveredImage(image)}
                onMouseLeave={() => setHoveredImage(null)}
              />
              <div className="product-info">
                <div className='app'>
                  <h3>{name}</h3>
                  <h4>${price}</h4>
                  <button onClick={() => handleBuyNow(element)}>Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
