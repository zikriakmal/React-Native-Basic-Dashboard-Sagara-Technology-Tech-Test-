import React from 'react'
import { Link } from 'react-router-dom'
import Gap from '../component/atoms/GapComponent/Gap'
import GlobalButton from '../component/atoms/GlobalButton/GlobalButton'
import GlobalInput from '../component/atoms/GlobalInput/GlobalInput'

function LoginPage()
{
    return (
        <div className="container mt-5 w-50">
            <GlobalInput title="Email" onChange={() => console.log('tes')} />
            <GlobalInput title="Password" type="password" onChange={() => console.log('tes')} />
            <Gap height={30}/>
            <div style={{ padding: '0 0 0 0' }}>
                <GlobalButton variant="info" type="outline" >Masuk</GlobalButton>
            </div>
            <div className="text-center my-3">
                <span> Tidak Punya Akun?    <Link to="/register">Buat Akun</Link>
                </span>
            </div>
        </div>
    )
}

export default LoginPage
