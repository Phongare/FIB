import React from 'react';
import {Link} from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import image1 from '../../images/image 31.png';
import image2 from '../../images/image 5.png';
import akcii from '../../images/akcii.png';
import pizza from "../../images/pizza.png";

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="home__swiper">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, EffectCoverflow]}
                        grabCursor={true}
                        spaceBetween={10}
                        slidesPerView={2}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        effect={'coverflow'}
                        navigation
                        coverflowEffect={
                          {
                              rotate: 0,
                              stretch: 0,
                              depth: 100,
                              modifier: 2.5,
                              slideShadows: false
                            }
                        }
                    >
                        <SwiperSlide><img src={image1} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={image2} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={image1} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={image2} alt=""/></SwiperSlide>
                    </Swiper>
                </div>
                <h2 className="home__nov">Новинки</h2>
                <div className="home__novinki">
                    <div className="miniCard">
                        <img src={pizza} alt=""/>
                        <Link to={`/product`} className="miniCard__right">
                            <h2 className="miniCard__name">Карбонара</h2>
                            <p className="miniCard__desc">от 120 ₽</p>
                        </Link>
                    </div>
                    <div className="miniCard">
                        <img src={pizza} alt=""/>
                        <Link to={`/product`} className="miniCard__right">
                            <h2 className="miniCard__name">Карбонара</h2>
                            <p className="miniCard__desc">от 120 ₽</p>
                        </Link>
                    </div>
                    <div className="miniCard">
                        <img src={pizza} alt=""/>
                        <Link to={`/product`} className="miniCard__right">
                            <h2 className="miniCard__name">Карбонара</h2>
                            <p className="miniCard__desc">от 120 ₽</p>
                        </Link>
                    </div>
                    <div className="miniCard">
                        <img src={pizza} alt=""/>
                        <Link to={`/product`} className="miniCard__right">
                            <h2 className="miniCard__name">Карбонара</h2>
                            <p className="miniCard__desc">от 120 ₽</p>
                        </Link>
                    </div>
                    <div className="miniCard">
                        <img src={pizza} alt=""/>
                        <Link to={`/product`} className="miniCard__right">
                            <h2 className="miniCard__name">Карбонара</h2>
                            <p className="miniCard__desc">от 120 ₽</p>
                        </Link>
                    </div>
                    <div className="miniCard">
                        <img src={pizza} alt=""/>
                        <Link to={`/product`} className="miniCard__right">
                            <h2 className="miniCard__name">Карбонара</h2>
                            <p className="miniCard__desc">от 120 ₽</p>
                        </Link>
                    </div>
                </div>
                <div className="home__filter">
                    <p className="home__type">Показать всё</p>
                    <p className="home__type">Пицца</p>
                    <p className="home__type">Паста</p>
                    <p className="home__type">Супы</p>
                    <p className="home__type">Салаты</p>
                    <p className="home__type">Напитки</p>
                    <p className="home__type">Десерты</p>
                </div>
                <div className="home__catalog">
                    <div className="home__card">
                    <img src={pizza} alt=""/>
                    <h2 className="home__card-title">С креветками и трюфелями</h2>
                    <p className="home__card-desc">Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г</p>
                    <div className="home__card-down">
                        <h2 className="home__card-price">от 600 ₽</h2>
                        <button className="home__card-btn"><Link className="home__card-link" to={`/product`}>В корзину</Link></button>
                    </div>
                    </div>

                </div>
                <h2 className="home__akc">Наши <span>акции</span> </h2>
                <div className="home__akcii">
                    <div className="home__akcii-left">
                        <img className="home__akcii-img1" src={akcii} alt=""/>
                    </div>
                    <div className="home__akcii-right">
                        <img className="home__akcii-img" src={akcii} alt=""/>
                        <img className="home__akcii-img" src={akcii} alt=""/>
                        <img className="home__akcii-img" src={akcii} alt=""/>
                        <img className="home__akcii-img" src={akcii} alt=""/>
                    </div>
                </div>
                <div className="home__akcii-link">
                    <Link to={'/'}>
                        <button className="home__akcii-btn">
                            Все акции
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;