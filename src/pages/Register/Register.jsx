import React from 'react';

const Register = () => {
    return (
        <section className="register">
            <div className="container">
                <div className="register__row">
                    <form action="" className="register__form">
                        <input className="register__input" name="Имя" placeholder="Имя" type="text" />
                        <input className="register__input" placeholder="Почта" type="email"/>
                        <input className="register__input" placeholder="Номер телефона" type="tel"/>
                        <input className="register__input" placeholder="Пароль" type="password"/>
                        <button type="submit">Продолжить</button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Register;