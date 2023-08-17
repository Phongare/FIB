import React from 'react';
import {Link, useLocation} from "react-router-dom"
import logo from '../../../images/Rectangle 76.svg'
import yandex from '../../../images/yandex.png'
import dot from '../../../images/dot.svg'
import star from '../../../images/star.png'


const Header = () => {
    const {pathname} = useLocation()
    let cart = pathname !== '/cart'
    return (
        <header className="header">
            <div className="container">
                {
                    cart ?
                        <>
                            <div className="header__row">
                                <div className="header__left">
                                    <Link className="header__link" to={'/'}><img className="header__logo" src={logo} alt=""/></Link>
                                    <div className="header__left-desc">
                                        <div className="header__up">Доставка пасты <span>Москва</span></div>
                                        <div className="header__down">
                                            <div className="header__down-left"><img src={yandex} alt=""/> Яндекс еда <img src={dot} alt=""/> 4.8 <img src={star} alt=""/></div>
                                            <div className="header__down-right">Время доставки <img src={dot} alt=""/> от 31 мин</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header__right">
                                    <button className="header__btn">Заказать звонок</button>
                                    <h1 className='header__number'>8 499 391-84-49 </h1>
                                </div>
                            </div>
                            <div className="header__links">
                                <div className="header__links-left">
                                    <Link className='header__black'   to={'/map'}>Местоположение на карте</Link>
                                    <Link className='header__black'   to={'/'}>Акции</Link>
                                    <Link className='header__black'   to={'/'}>Контакты</Link>
                                </div>
                                <div className="header__links-right">
                                    <Link className='header__register'  to={'/register'}>Войти</Link>
                                    <Link className='header__btnLink'   to={'/cart'}>
                                        <button className='header__corz'>
                                            Корзина | 1
                                        </button>
                                    </Link>
                                </div>



                            </div>
                        </>
                        :

                        <div className="header__basket">
                            <Link className="header__link" to={'/'}><img className="header__logo" src={logo} alt=""/></Link>
                            <div className="header__load">
                                <div className="header__load-up">
                                    <span className="header__load-up-main">1</span>
                                    <div className=""></div>
                                    <span className="header__load-up-not">2</span>
                                    <div className=""></div>
                                    <span className="header__load-up-not">3</span>
                                </div>
                                <div className="header__load-down">
                                    <p className="header__load-down-main">Корзина</p>
                                    <p className="header__load-down-not">Оформление заказа</p>
                                    <p className="header__load-down-not">Заказ принят</p>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </header>

    );
};

export default Header;