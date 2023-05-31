import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";
import axios from '../registration/api/axios';
import './style.Login.scss'


const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Je bent ingelogd</h1>
                    <br />
                    <p>
                        <a href="/Screen">Ga naar het portaal</a>
                    </p>
                </section>
            ) : (
                <div className="loginbg">
                    <div className="containerbox">
                <section classname= "box1">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className='inloggen'>Bestaand account</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Gebruikersnaam</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Gebruikersnaam"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Wachtwoord</label>
                        <input
                            type="password"
                            placeholder="Wachtwoord"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button className='inlogbutton'>Inloggen</button>
                    </form>
                
                </section>
                <div className="box2">
            
                    <div className="text1">
                        <p>Heb je nog geen account?</p>
                        <a className='inloggentekst' href='/register'>Nieuw account</a>
                    </div>
                    {/* <div className="loginbutton">
                    <a href="/register"><button className="loginknop">Klik hier om te aanmelden</button></a>
                    </div> */}
                </div>
                </div>
                </div>
            )}
        </>
    )
}

export default Login




