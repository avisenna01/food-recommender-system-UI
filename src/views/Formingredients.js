import style from '../styles/form.module.scss'
import logo from '../assets/logo.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Formingredients = () => {

    const [ingred1, setIngred1] = useState(null)
    const [ingred2, setIngred2] = useState(null)
    const [ingred3, setIngred3] = useState(null)
    const [ingred4, setIngred4] = useState(null)
    const [ingred5, setIngred5] = useState(null)
    const [ingred6, setIngred6] = useState(null)
    const [ingred7, setIngred7] = useState(null)

    const ing1 = (e) => {
        setIngred1(e.target.value)
    }
    const ing2 = (e) => {
        setIngred2(e.target.value)

    }
    const ing3 = (e) => {
        setIngred3(e.target.value)

    }
    const ing4 = (e) => {
        setIngred4(e.target.value)

    }
    const ing5 = (e) => {
        setIngred5(e.target.value)

    }
    const ing6 = (e) => {
        setIngred6(e.target.value)

    }
    const ing7 = (e) => {
        setIngred7(e.target.value)

    }

    return (
        <section className={style.form}>
            <div className={style.logo__container}><img alt="logo" src={logo}></img></div>
            <h1>What are the ingredients that you have?</h1>
            <div className={style.form__container}>
                <form>
                    <label >
                        Ingredient 1
                    </label>
                    <input type="text" placeholder="Ingredient 1" onChange={ing1}></input>
                    <label>
                        Ingredient 2
                </label>
                    <input type="text" placeholder="Ingredient 2" onChange={ing2}></input>
                    <label >
                        Ingredient 3
                </label>
                    <input type="text" placeholder="Ingredient 3" onChange={ing3}></input>
                    <label >
                        Ingredient 4
                </label>
                    <input type="text" placeholder="Ingredient 4" onChange={ing4}></input>
                    <label >
                        Ingredient 5
                </label>
                    <input type="text" placeholder="Ingredient 5" onChange={ing5}></input>
                    <label >
                        Ingredient 6
                </label>
                    <input type="text" placeholder="Ingredient 6" onChange={ing6}></input>
                    <label >
                        Ingredient 7
                </label>
                    <input type="text" placeholder="Ingredient 7" onChange={ing7}></input>
                </form>

            </div>
            <Link to="/result"><button >Process</button></Link>
        </section >
    )
}

export default Formingredients;