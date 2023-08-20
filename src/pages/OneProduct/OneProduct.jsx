import React from 'react';
import pizza from "../../images/pizza.png";

const OneProduct = () => {
    return (
        <section className="oneProduct">
            <div className="container">
                <div className="oneProduct__row">
                    <div className="oneProduct__left">
                        <img src={pizza} alt=""/>
                    </div>
                    <div className="oneProduct__right">
                        <h1 className="oneProduct__title">С креветками и трюфелями</h1>
                        <p className="oneProduct__desc">25 см, традиционное тесто, 360г</p>
                        <div className="oneProduct__sizes">
                            <button className="oneProduct__size">Маленький</button>
                            <button className="oneProduct__size">Средний</button>
                            <button className="oneProduct__size">Большой</button>
                        </div>
                        <div className="oneProduct__doughs">
                            <button className="oneProduct__dough">Традиционное</button>
                            <button className="oneProduct__dough">Тонкое</button>
                        </div>
                        <div className="oneProduct__peppers">
                            <div className="oneProduct__pepper">
                                <img className="oneProduct__pepper-img" src={pizza} alt=""/>
                                <h3 className="oneProduct__pepper-name">Острый халапенью</h3>
                                <p className="oneProduct__pepper-price">120 ₽</p>
                            </div>
                            <div className="oneProduct__pepper">
                                <img className="oneProduct__pepper-img" src={pizza} alt=""/>
                                <h3 className="oneProduct__pepper-name">Острый халапенью</h3>
                                <p className="oneProduct__pepper-price">120 ₽</p>
                            </div>
                            <div className="oneProduct__pepper">
                                <img className="oneProduct__pepper-img" src={pizza} alt=""/>
                                <h3 className="oneProduct__pepper-name">Острый халапенью</h3>
                                <p className="oneProduct__pepper-price">120 ₽</p>
                            </div>
                            <div className="oneProduct__pepper">
                                <img className="oneProduct__pepper-img" src={pizza} alt=""/>
                                <h3 className="oneProduct__pepper-name">Острый халапенью</h3>
                                <p className="oneProduct__pepper-price">120 ₽</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OneProduct;