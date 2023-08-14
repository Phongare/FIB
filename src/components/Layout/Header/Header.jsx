import React from 'react';
import {Link} from "react-router-dom"
import logo from '../../../images/Rectangle 76.svg'
import yandex from '../../../images/yandex.png'
import dot from '../../../images/dot.svg'
import star from '../../../images/star.png'

const Header = () => {
    return (
        <header>
            <div className="container">
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
                        <Link className='header__btnLink'   to={'/register'}>
                            <button className='header__corz'>
                                Корзина | 1
                            </button>
                        </Link>
                    </div>



                </div>
            </div>
        </header>
    );
};

export default Header;