import React from 'react'
import stylus from "./home.module.css"
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

export const Home = () => {
    return(
        <div className={stylus.container}>
            <div className={stylus.Title}>
                <div className={stylus.mainTitle} style={{paddingBottom: `20px`, fontSize: `30px`, fontWeight: `700`,textTransform: `capitalize`,}}>
                desserts
                </div>
                <div className={stylus.cards} style={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap`, gap: `40px`, width: `800px`}}>
                    <div className={stylus.card} style={{position: `relative`,display: `flex`, flexDirection: `column`,}}>
                        <div className={stylus.img} >
                        <img src={waffle} style={{ width: '230px', height: '220px',  borderRadius: '10px'  }} alt='hahahahahahab'/>
                        </div>
                        <div className={stylus.link} >
                        <button style={{ fontWeight: `500`, display: `flex`, flexDirection: `row`, alignItems: `center`, justifyContent: `center`, padding: `7px 20px`, borderRadius: `30px`, border: `1px gray solid`, backgroundColor: `white`, cursor: `pointer`, position: `absolute`, top: `203px`, right: `45px`, gap: `5px`}}><img src={addCart} alt='lololoololololololololol'/> Add to Cart</button>
                        </div>
                        <div className={stylus.text} style={{fontWeight: `300`, color: `gray`, paddingTop: `15px`, paddingBottom: `3px`, fontSize: `16px`}}>
                        waffle
                        </div>
                        <div className={stylus.para} style={{fontWeight: `500`, fontSize: `18px`}}>
                            Waffle with Berries
                        </div>
                        <div className={stylus.price} style={{color: `#ca3c0c`, fontWeight: `500`, fontSize: `18px`}}>
                        $6.50
                        </div>
                    </div>
                    <div className={stylus.card} style={{position: `relative`,display: `flex`, flexDirection: `column`,}}>
                        <div className={stylus.img} >
                        <img src={creme} style={{ width: '230px', height: '220px',  borderRadius: '10px'  }} alt='hahahahahahab'/>
                        </div>
                        <div className={stylus.link} >
                        <button style={{ fontWeight: `500`, display: `flex`, flexDirection: `row`, alignItems: `center`, justifyContent: `center`, padding: `7px 20px`, borderRadius: `30px`, border: `1px gray solid`, backgroundColor: `white`, cursor: `pointer`, position: `absolute`, top: `203px`, right: `45px`, gap: `5px`}}><img src={addCart} alt='lololoololololololololol'/> Add to Cart</button>
                        </div>
                        <div className={stylus.text} style={{fontWeight: `300`, color: `gray`, paddingTop: `15px`, paddingBottom: `3px`, fontSize: `16px`}}>
                        Creme Brulle
                        </div>
                        <div className={stylus.para} style={{fontWeight: `500`, fontSize: `18px`}}>
                            Vanilla Bean Creme Btulee
                        </div>
                        <div className={stylus.price} style={{color: `#ca3c0c`, fontWeight: `500`, fontSize: `18px`}}>
                        $7.00
                        </div>
                    </div>
                    <div className={stylus.card} style={{position: `relative`,display: `flex`, flexDirection: `column`,}}>
                        <div className={stylus.img} >
                        <img src={macaron} style={{ width: '230px', height: '220px',  borderRadius: '10px'  }} alt='hahahahahahab'/>
                        </div>
                        <div className={stylus.link} >
                        <button style={{ fontWeight: `500`, display: `flex`, flexDirection: `row`, alignItems: `center`, justifyContent: `center`, padding: `7px 20px`, borderRadius: `30px`, border: `1px gray solid`, backgroundColor: `white`, cursor: `pointer`, position: `absolute`, top: `203px`, right: `45px`, gap: `5px`}}><img src={addCart} alt='lololoololololololololol'/> Add to Cart</button>
                        </div>
                        <div className={stylus.text} style={{fontWeight: `300`, color: `gray`, paddingTop: `15px`, paddingBottom: `3px`, fontSize: `16px`}}>
                        Macaron
                        </div>
                        <div className={stylus.para} style={{fontWeight: `500`, fontSize: `18px`}}>
                            Macaron Mix of Five
                        </div>
                        <div className={stylus.price} style={{color: `#ca3c0c`, fontWeight: `500`, fontSize: `18px`}}>
                        $8.00
                        </div>
                    </div>
                    <div className={stylus.card} style={{position: `relative`,display: `flex`, flexDirection: `column`,}}>
                        <div className={stylus.img} >
                        <img src={tiramisu} style={{ width: '230px', height: '220px',  borderRadius: '10px'  }} alt='hahahahahahab'/>
                        </div>
                        <div className={stylus.link} >
                        <button style={{ fontWeight: `500`, display: `flex`, flexDirection: `row`, alignItems: `center`, justifyContent: `center`, padding: `7px 20px`, borderRadius: `30px`, border: `1px gray solid`, backgroundColor: `white`, cursor: `pointer`, position: `absolute`, top: `203px`, right: `45px`, gap: `5px`}}><img src={addCart} alt='lololoololololololololol'/> Add to Cart</button>
                        </div>
                        <div className={stylus.text} style={{fontWeight: `300`, color: `gray`, paddingTop: `15px`, paddingBottom: `3px`, fontSize: `16px`}}>
                        Tiramisu
                        </div>
                        <div className={stylus.para} style={{fontWeight: `500`, fontSize: `18px`}}>
                            Clasic Tiramisu
                        </div>
                        <div className={stylus.price} style={{color: `#ca3c0c`, fontWeight: `500`, fontSize: `18px`}}>
                        $5.50
                        </div>
                    </div>
                    <div className={stylus.card} style={{position: `relative`,display: `flex`, flexDirection: `column`,}}>
                        <div className={stylus.img} >
                        <img src={baklava} style={{ width: '230px', height: '220px',  borderRadius: '10px'  }} alt='hahahahahahab'/>
                        </div>
                        <div className={stylus.link} >
                        <button style={{ fontWeight: `500`, display: `flex`, flexDirection: `row`, alignItems: `center`, justifyContent: `center`, padding: `7px 20px`, borderRadius: `30px`, border: `1px gray solid`, backgroundColor: `white`, cursor: `pointer`, position: `absolute`, top: `203px`, right: `45px`, gap: `5px`}}><img src={addCart} alt='lololoololololololololol'/> Add to Cart</button>
                        </div>
                        <div className={stylus.text} style={{fontWeight: `300`, color: `gray`, paddingTop: `15px`, paddingBottom: `3px`, fontSize: `16px`}}>
                        Baklava
                        </div>
                        <div className={stylus.para} style={{fontWeight: `500`, fontSize: `18px`}}>
                            Pistachio Baklava
                        </div>
                        <div className={stylus.price} style={{color: `#ca3c0c`, fontWeight: `500`, fontSize: `18px`}}>
                        $4.00
                        </div>
                    </div>
                    <div className={stylus.card} style={{position: `relative`,display: `flex`, flexDirection: `column`,}}>
                        <div className={stylus.img} >
                        <img src={pie} style={{ width: '230px', height: '220px',  borderRadius: '10px'  }} alt='hahahahahahab'/>
                        </div>
                        <div className={stylus.link} >
                        <button style={{ fontWeight: `500`, display: `flex`, flexDirection: `row`, alignItems: `center`, justifyContent: `center`, padding: `7px 20px`, borderRadius: `30px`, border: `1px gray solid`, backgroundColor: `white`, cursor: `pointer`, position: `absolute`, top: `203px`, right: `45px`, gap: `5px`}}><img src={addCart} alt='lololoololololololololol'/> Add to Cart</button>
                        </div>
                        <div className={stylus.text} style={{fontWeight: `300`, color: `gray`, paddingTop: `15px`, paddingBottom: `3px`, fontSize: `16px`}}>
                        Pie
                        </div>
                        <div className={stylus.para} style={{fontWeight: `500`, fontSize: `18px`}}>
                            Lemon Merigue Pie
                        </div>
                        <div className={stylus.price} style={{color: `#ca3c0c`, fontWeight: `500`, fontSize: `18px`}}>
                        $5.00
                        </div>
                    </div>
                    <div className={stylus.card} style={{position: `relative`,display: `flex`, flexDirection: `column`,}}>
                        <div className={stylus.img} >
                        <img src={cake} style={{ width: '230px', height: '220px',  borderRadius: '10px'  }} alt='hahahahahahab'/>
                        </div>
                        <div className={stylus.link} >
                        <button style={{ fontWeight: `500`, display: `flex`, flexDirection: `row`, alignItems: `center`, justifyContent: `center`, padding: `7px 20px`, borderRadius: `30px`, border: `1px gray solid`, backgroundColor: `white`, cursor: `pointer`, position: `absolute`, top: `203px`, right: `45px`, gap: `5px`}}><img src={addCart} alt='lololoololololololololol'/> Add to Cart</button>
                        </div>
                        <div className={stylus.text} style={{fontWeight: `300`, color: `gray`, paddingTop: `15px`, paddingBottom: `3px`, fontSize: `16px`}}>
                        Cake
                        </div>
                        <div className={stylus.para} style={{fontWeight: `500`, fontSize: `18px`}}>
                            Red Velvet Cake
                        </div>
                        <div className={stylus.price} style={{color: `#ca3c0c`, fontWeight: `500`, fontSize: `18px`}}>
                        $4.50
                        </div>
                    </div>
                    <div className={stylus.card} style={{position: `relative`,display: `flex`, flexDirection: `column`,}}>
                        <div className={stylus.img} >
                        <img src={brownie} style={{ width: '230px', height: '220px',  borderRadius: '10px'  }} alt='hahahahahahab'/>
                        </div>
                        <div className={stylus.link} >
                        <button style={{ fontWeight: `500`, display: `flex`, flexDirection: `row`, alignItems: `center`, justifyContent: `center`, padding: `7px 20px`, borderRadius: `30px`, border: `1px gray solid`, backgroundColor: `white`, cursor: `pointer`, position: `absolute`, top: `203px`, right: `45px`, gap: `5px`}}><img src={addCart} alt='lololoololololololololol'/> Add to Cart</button>
                        </div>
                        <div className={stylus.text} style={{fontWeight: `300`, color: `gray`, paddingTop: `15px`, paddingBottom: `3px`, fontSize: `16px`}}>
                        Brownie
                        </div>
                        <div className={stylus.para} style={{fontWeight: `500`, fontSize: `18px`}}>
                            Salted Caramel Brownie
                        </div>
                        <div className={stylus.price} style={{color: `#ca3c0c`, fontWeight: `500`, fontSize: `18px`}}>
                        $6.50
                        </div>
                    </div><div className={stylus.card} style={{position: `relative`,display: `flex`, flexDirection: `column`,}}>
                        <div className={stylus.img} >
                        <img src={panna} style={{ width: '230px', height: '220px',  borderRadius: '10px'  }} alt='hahahahahahab'/>
                        </div>
                        <div className={stylus.link} >
                        <button style={{ fontWeight: `500`, display: `flex`, flexDirection: `row`, alignItems: `center`, justifyContent: `center`, padding: `7px 20px`, borderRadius: `30px`, border: `1px gray solid`, backgroundColor: `white`, cursor: `pointer`, position: `absolute`, top: `203px`, right: `45px`, gap: `5px`}}><img src={addCart} alt='lololoololololololololol'/> Add to Cart</button>
                        </div>
                        <div className={stylus.text} style={{fontWeight: `300`, color: `gray`, paddingTop: `15px`, paddingBottom: `3px`, fontSize: `16px`}}>
                        Panna Cotta
                        </div>
                        <div className={stylus.para} style={{fontWeight: `500`, fontSize: `18px`}}>
                            Vanilla Panna Cotta
                        </div>
                        <div className={stylus.price} style={{color: `#ca3c0c`, fontWeight: `500`, fontSize: `18px`}}>
                        $6.50
                        </div>
                    </div>

                    

                </div>


            </div>
            <div className={stylus.product} style={{ padding: `20px`, backgroundColor: `white`, width: `400px`, height: `300px`, borderRadius: `10px`}}>
                <div className={stylus.productTitle} style={{color: `#ca3c0c`, fontWeight: `700`, textTransform: `capitalize`, fontSize: `24px`}}>
                    your cart(0)
                </div>
                <div className={stylus.productImage} style={{display: `flex`, flexDirection: `column`, gap: `20px`, alignItems: `center`, justifyContent: `center`}}>
                <img src={emptyCart} alt="lalalalalala" style={{width: `150px`, marginTop: `20px`}} />
                <p1 className={stylus.teqsti} >Your added items will be appeared here</p1>
                </div>

            </div>

        </div>
    )
}