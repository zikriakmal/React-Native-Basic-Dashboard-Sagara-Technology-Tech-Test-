import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Gap from '../component/atoms/GapComponent/Gap'
import GlobalButton from '../component/atoms/GlobalButton/GlobalButton'
import GlobalInput from '../component/atoms/GlobalInput/GlobalInput'


function LoginPage()
{
    const [email, setEmail] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const submitLogin = () =>
    {
        email === "" ? setEmailVal("Email Tidak boleh kosong") : setEmailVal("")
        password === "" ? setPasswordVal("Password Tidak boleh kosong") : setPasswordVal("")

        if (email !== '' && password !== '') alert("validasi berhasil login sukses");
    }

    return (
        <div className="row justify-content-center m-0 ">
            <div className="col-lg-4 col-md-4 col-10 m-0 card shadow p-2 py-5 my-3" style={{ borderRadius: '14px' }}>
                <div className="container mt-5">
                    <h1 className="text-center text-info" style={{ fontWeight: "bold" }}>LOGIN</h1>
                    <GlobalInput title="Email" onChange={(e) => setEmail(e.currentTarget.value)} val={emailVal} />
                    <GlobalInput title="Password" type="password" onChange={(e) => setPassword(e.currentTarget.value)} val={passwordVal} />
                    <Gap height={10} />
                    <div style={{ padding: '0 0 0 0' }}>
                        <GlobalButton variant="info" type="outline" onClick={submitLogin} >Masuk</GlobalButton>
                    </div>
                    <div className="text-center my-3">
                        <span> Tidak Punya Akun?    <Link to="/register" className="text-info">Buat Akun</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
