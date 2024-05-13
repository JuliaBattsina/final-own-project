import React from 'react';

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <li className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <div className="cart-item-actions">
          <button onClick={() => onIncrease(item)}>+</button>
          <button onClick={() => onDecrease(item)}>-</button>
          <button onClick={() => onRemove(item)}>Remove</button> {/* Добавляем кнопку для удаления товара */}
        </div>
      </div>
    </li>
  );
}

export default CartItem;