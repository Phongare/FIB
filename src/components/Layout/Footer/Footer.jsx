import React from 'react';
import logo from '../../../images/Rectangle 76.svg'
import icon1 from '../../../images/image 17.png'
import icon2 from '../../../images/image 18.png'
import icon3 from '../../../images/image 19.png'
import icon4 from '../../../images/image 20.png'
import icon5 from '../../../images/image 21.png'
import icon6 from '../../../images/image 22.png'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__left">
                        <img src={logo} alt=""/>
                        <div className="footer__info">
                            <p className="footer__infos">Калорийность и состав</p>
                            <p className="footer__infos">Правовая информация</p>
                        </div>
                        <p className="footer__miv">Мы в соцсетях</p>
                        <div className="footer__social">

                            <div className="footer__card">
                                <p className='footer__card-names'>YouTube</p>
                                <p className='footer__card-names'>Instagram</p>
                            </div>
                            <div className="footer__card">
                                <p className='footer__card-names'>Facebook</p>
                                <p className='footer__card-names'>ВКонтакте</p>
                            </div>
                            <div className="footer__card">
                                <p className='footer__card-names'>Москва ул. Проспект </p>
                                <p className='footer__card-names'>Вернадского 86В</p>
                            </div>

                        </div>
                        <p className="footer__yabao">YaBao Все праав защищены © 2021</p>
                    </div>
                    <div className="footer__right">
                        <h1 className="footer__title">
                            Остались вопросы? А мы всегда на связи:
                        </h1>
                        <div className="footer__icons">
                            <Link className="footer__icon"><img src={icon1} alt=""/></Link>
                            <Link className="footer__icon"><img src={icon2} alt=""/></Link>
                            <Link className="footer__icon"><img src={icon3} alt=""/></Link>
                            <Link className="footer__icon"><img src={icon4} alt=""/></Link>
                            <Link className="footer__icon"><img src={icon5} alt=""/></Link>
                            <Link className="footer__icon"><img src={icon6} alt=""/></Link>
                            <Link className="footer__icon">Написать нам</Link>
                        </div>
                        <h1 className='footer__number'>8 499 391-84-49 </h1>
                        <Link className='header__btnLink'   to={'/register'}>
                            <button className="footer__btn">Заказать звонок</button>
                        </Link>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;