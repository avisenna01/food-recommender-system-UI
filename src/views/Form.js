import style from '../styles/form.module.scss'
import logo from '../assets/logo.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {

    return (
        <section className={style.form}>
            <div className={style.logo__container}><img alt="logo" src={logo}></img></div>
            <h1>We need to know your information in order to give best suit recommendation...</h1>
            <div className={style.form__container}>
                <form>
                    <label for="age">
                        How old are you?
                    </label>
                    <select id="age" name="age">
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                        <option value={21}>21</option>
                        <option value={22}>22</option>
                    </select>
                    <label for="gender">
                        Your prefered gender?
                </label>
                    <select id="gender" name="gender">
                        <option value='L'>L</option>
                        <option value='P'>P</option>
                    </select>
                    <label for="color">
                        Choose what color you like the most?
                </label>
                    <select id="color" name="color">
                        <option value="RED">RED</option>
                        <option value="GREEN">GREEN</option>
                        <option value="BLUE">BLUE</option>
                    </select>
                    <label for="taste">
                        What taste do you like?
                </label>
                    <select id="taste" name="taste">
                        <option value='Manis'>Manis</option>
                        <option value='Pahit'>Pahit</option>
                        <option value='Asam'>Asam</option>
                        <option value='Pedas'>Pedas</option>
                        <option value='Asin'>Asin</option>
                        <option value='Hambar'>Hambar</option>
                    </select>
                    <label for="blood">
                        Choose your blood type?
                </label>
                    <select id="blood" name="blood">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                    </select>
                    <label for="eat">
                        How many times you eat in a day?
                </label>
                    <select id="eat" name="eat">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <label for="zone">
                        Your time zone?
                </label>
                    <select id="zone" name="zone">
                        <option value="WIB">WIB</option>
                        <option value="WITA">WITA</option>
                        <option value="WIT">WIT</option>
                    </select>
                </form>

            </div>
            <Link to="/formingredients"> <button >Submit</button></Link>
        </section >
    )
}

export default Form;