import React, { useState } from 'react';
import stylus from "./home.module.css";
import emptyCart from './public/illustration-empty-cart.svg';
import addCart from './public/icon-add-to-cart.svg';
import waffle from './public/image-waffle-desktop.jpg';
import creme from './public/image-creme-brulee-desktop.jpg';
import macaron from './public/image-macaron-desktop.jpg';
import tiramisu from './public/image-tiramisu-desktop.jpg';
import baklava from './public/image-baklava-desktop.jpg';
import pie from './public/image-meringue-desktop.jpg';
import cake from './public/image-cake-desktop.jpg';
import brownie from './public/image-brownie-desktop.jpg';
import panna from './public/image-panna-cotta-desktop.jpg';
import decrease from './public/icon-decrement-quantity.svg';
import increase from './public/icon-increment-quantity.svg';

export const Home = () => {
  const desserts = [
    { id: 1, name: "waffle", title: "Waffle with Berries", price: 6.50, img: waffle },
    { id: 2, name: "Creme Brulle", title: "Vanilla Bean Creme Btulee", price: 7.00, img: creme },
    { id: 3, name: "Macaron", title: "Macaron Mix of Five", price: 8.00, img: macaron },
    { id: 4, name: "Tiramisu", title: "Clasic Tiramisu", price: 5.50, img: tiramisu },
    { id: 5, name: "Baklava", title: "Pistachio Baklava", price: 4.00, img: baklava },
    { id: 6, name: "Pie", title: "Lemon Merigue Pie", price: 5.00, img: pie },
    { id: 7, name: "Cake", title: "Red Velvet Cake", price: 4.50, img: cake },
    { id: 8, name: "Brownie", title: "Salted Caramel Brownie", price: 6.50, img: brownie },
    { id: 9, name: "Panna Cotta", title: "Vanilla Panna Cotta", price: 6.50, img: panna }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (dessert) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === dessert.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === dessert.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...dessert, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === id);
      if (!existingItem) return prevCart;
      
      if (existingItem.quantity === 1) {
        return prevCart.filter(item => item.id !== id);
      } else {
        return prevCart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={stylus.container}>
      {/* marcena mxarie */}
      <div className={stylus.Title}>
        <div className={stylus.mainTitle} style={{ paddingBottom: '20px', fontSize: '30px', fontWeight: 700, textTransform: 'capitalize' }}>
          desserts
        </div>
        <div className={stylus.cards} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '40px', width: '800px' }}>
          {desserts.map(dessert => (
            <div key={dessert.id} className={stylus.card} style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div className={stylus.img}>
                <img src={dessert.img} style={{ width: '230px', height: '220px', borderRadius: '10px' }} alt={dessert.name} />
              </div>
              <button 
                onClick={() => addToCart(dessert)}
                className={stylus.addButton}
                style={{ 
                  fontWeight: 500, 
                  display: 'flex', 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  padding: '7px 20px', 
                  borderRadius: '30px', 
                  border: '1px gray solid', 
                  backgroundColor: 'white', 
                  cursor: 'pointer', 
                  position: 'absolute', 
                  top: '203px', 
                  right: '45px', 
                  gap: '5px'
                }}
              >
                <img src={addCart} alt="Add to cart" /> Add to Cart
              </button>
              <div className={stylus.text} style={{ fontWeight: 300, color: 'gray', paddingTop: '15px', paddingBottom: '3px', fontSize: '16px' }}>
                {dessert.name}
              </div>
              <div className={stylus.para} style={{ fontWeight: 500, fontSize: '18px' }}>
                {dessert.title}
              </div>
              <div className={stylus.price} style={{ color: '#ca3c0c', fontWeight: 500, fontSize: '18px' }}>
                ${dessert.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>



      
      {/*es mere mxare*/}

          









      <div className={stylus.product} style={{ minHeight: `330px`, padding: '20px', backgroundColor: 'white', width: '400px', height: '300px', borderRadius: '10px' }}>
        <div className={stylus.productTitle} style={{ color: '#ca3c0c', fontWeight: 700, textTransform: 'capitalize', fontSize: '24px' }}>
          your cart({totalItems})
        </div>                                                                                                              
        
        {cart.length === 0 ? (
          <div className={stylus.productImage} style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
            <img src={emptyCart} alt="Empty cart" style={{ width: '150px', marginTop: '20px' }} />
            <p className={stylus.teqsti}>Your added items will appear here</p>
          </div>
        ) : (
          <div style={{ marginTop: '20px', maxHeight: '200px', overflowY: 'auto' }}>
            {cart.map(item => (
              <div key={item.id} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '15px',
                padding: '10px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px'
              }}>
                <div style={{ width: '60%' }}>
                  <div style={{ fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</div>
                  <div style={{ color: '#ca3c0c', fontWeight: 500 }}>${item.price.toFixed(2)}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{ 
                      width: '30px', 
                      height: '30px', 
                      borderRadius: '50%', 
                      border: '1px solid #ca3c0c', 
                      backgroundColor: 'white', 
                      color: '#ca3c0c', 
                      cursor: 'pointer',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    -
                  </button>
                  <span style={{ minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                  <button 
                        onClick={() => addToCart(item)}
                        style={{ 
                            width: '30px', 
                            height: '30px', 
                            borderRadius: '50%', 
                            border: '1px solid #ca3c0c', 
                            backgroundColor: 'white', 
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 0
                        }}
                        >
                       +
                        </button>

                </div>
              </div>
            ))}
            <div style={{ 
              marginTop: '20px', 
              fontWeight: 700, 
              borderTop: '1px solid #ccc', 
              paddingTop: '10px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};