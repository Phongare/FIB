import React from 'react';
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from "react-router-dom"
import 'swiper/css';
import 'swiper/css/navigation';
import pizza from "../../images/pizza.png"
import close from "../../images/close.svg"
import {BsChevronLeft} from "react-icons/bs"
import {FaChevronRight} from "react-icons/fa"


const Cart = () => {

    return (
        <section className="cart">
            <div className="container">
                <div className="cart__row">
                    <h1 className="cart__title">
                        Корзина
                    </h1>
                    <div className="cart__orders">
                        <div className="cart__order">
                            <img className="cart__order-img" src={pizza} alt=""/>
                            <div className="cart__order-text">
                                <h2 className="cart__order-title">С креветками и трюфелями</h2>
                                <p className="cart__order-desc">Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г</p>
                            </div>
                            <h2 className="cart__order-price">120 ₽</h2>
                            <div className="cart__order-count">
                                <span className="cart__order-plus">-</span>
                                <span className="cart__order-number">1</span>
                                <span className="cart__order-plus">+</span>
                            </div>
                            <img className="cart__order-close" src={close} alt=""/>
                        </div>
                        <div className="cart__order">
                            <img className="cart__order-img" src={pizza} alt=""/>
                            <div className="cart__order-text">
                                <h2 className="cart__order-title">С креветками и трюфелями</h2>
                                <p className="cart__order-desc">Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г</p>
                            </div>
                            <h2 className="cart__order-price">120 ₽</h2>
                            <div className="cart__order-count">
                                <span className="cart__order-plus">-</span>
                                <span className="cart__order-number">1</span>
                                <span className="cart__order-plus">+</span>
                            </div>
                            <img className="cart__order-close" src={close} alt=""/>
                        </div>
                    </div>
                    <h3 className="cart__dob">
                        Добавить к заказу?
                    </h3>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={0}
                        navigation
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="miniCard miniCardcart">
                                <img className="miniCard__img" src={pizza} alt=""/>
                                <div className="miniCard__right">
                                    <h2 className="miniCard__name">Карбонара</h2>
                                    <p className="miniCard__desc">от 120 ₽</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="miniCard miniCardcart">
                                <img className="miniCard__img" src={pizza} alt=""/>
                                <div className="miniCard__right">
                                    <h2 className="miniCard__name">Карбонара</h2>
                                    <p className="miniCard__desc">от 120 ₽</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="miniCard miniCardcart">
                                <img className="miniCard__img" src={pizza} alt=""/>
                                <div className="miniCard__right">
                                    <h2 className="miniCard__name">Карбонара</h2>
                                    <p className="miniCard__desc">от 120 ₽</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="miniCard miniCardcart">
                                <img className="miniCard__img" src={pizza} alt=""/>
                                <div className="miniCard__right">
                                    <h2 className="miniCard__name">Карбонара</h2>
                                    <p className="miniCard__desc">от 120 ₽</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="miniCard miniCardcart">
                                <img className="miniCard__img" src={pizza} alt=""/>
                                <div className="miniCard__right">
                                    <h2 className="miniCard__name">Карбонара</h2>
                                    <p className="miniCard__desc">от 120 ₽</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <h3 className="cart__dob cart__dob-sauce">
                        Соусы к бортикам и закускам
                    </h3>
                    <div className="cart__sauces">
                        <div className="sauceCard">
                            <img className="sauceCard__img" src={pizza} alt=""/>
                            <div className="sauceCard__right">
                                <h2 className="sauceCard__name">Карбонара</h2>
                                <p className="sauceCard__desc">от 120 ₽</p>
                            </div>
                        </div>
                        <div className="sauceCard">
                            <img className="sauceCard__img" src={pizza} alt=""/>
                            <div className="sauceCard__right">
                                <h2 className="sauceCard__name">Карбонара</h2>
                                <p className="sauceCard__desc">от 120 ₽</p>
                            </div>
                        </div>
                        <div className="sauceCard">
                            <img className="sauceCard__img" src={pizza} alt=""/>
                            <div className="sauceCard__right">
                                <h2 className="sauceCard__name">Карбонара</h2>
                                <p className="sauceCard__desc">от 120 ₽</p>
                            </div>
                        </div>
                        <div className="sauceCard">
                            <img className="sauceCard__img" src={pizza} alt=""/>
                            <div className="sauceCard__right">
                                <h2 className="sauceCard__name">Карбонара</h2>
                                <p className="sauceCard__desc">от 120 ₽</p>
                            </div>
                        </div>
                        <div className="sauceCard">
                            <img className="sauceCard__img" src={pizza} alt=""/>
                            <div className="sauceCard__right">
                                <h2 className="sauceCard__name">Карбонара</h2>
                                <p className="sauceCard__desc">от 120 ₽</p>
                            </div>
                        </div>
                        <div className="sauceCard">
                            <img className="sauceCard__img" src={pizza} alt=""/>
                            <div className="sauceCard__right">
                                <h2 className="sauceCard__name">Карбонара</h2>
                                <p className="sauceCard__desc">от 120 ₽</p>
                            </div>
                        </div>
                        <div className="sauceCard">
                            <img className="sauceCard__img" src={pizza} alt=""/>
                            <div className="sauceCard__right">
                                <h2 className="sauceCard__name">Карбонара</h2>
                                <p className="sauceCard__desc">от 120 ₽</p>
                            </div>
                        </div>
                    </div>
                    <h3 className="cart__prom">Промокод</h3>
                    <div className="cart__promo">
                        <form action="" className="cart__form">
                            <input type="text" placeholder="Введите промокод"/>
                            <button className="cart-form-btn" type="submit">Применить</button>
                        </form>
                        <p className="cart__promo-price">Сумма заказа: <span>1 048 ₽</span></p>
                    </div>
                    <div className="cart__end">
                        <div className="cart__end-left">
                            <BsChevronLeft/>
                            <Link to={`/`} className="cart__end-text">Вернуться в магазин</Link>
                        </div>

                        <button className="cart__end-right">Оформить заказ <FaChevronRight/></button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Cart;