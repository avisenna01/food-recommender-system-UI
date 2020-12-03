import style from '../styles/login.module.scss'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className={style.login}>
            <img src={logo} alt="logo"></img>
            <h1 className={style.login_title}>Whala!</h1>
            <p>Feel overwhelmed about what to cook?</p>
            <Link to='/form'><button>I'm ready to feel free!</button></Link>
        </section>
    )
}

export default Login;