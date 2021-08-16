import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Gap from '../component/atoms/GapComponent/Gap'
import GlobalButton from '../component/atoms/GlobalButton/GlobalButton'
import GlobalInput from '../component/atoms/GlobalInput/GlobalInput'
import RadioButtonComponent from '../component/atoms/RadioButtonComponent/RadioButtonComponent'

const Province = [
    { 'key': 1, 'name': 'Sumatera Utara' },
    { 'key': 2, 'name': 'Aceh' }
]

const City = [
    { 'key': 1, 'id_province': 1, 'name': 'Medan' },
    { 'key': 2, 'id_province': 1, 'name': 'Tebing tinggi' },
    { 'key': 3, 'id_province': 1, 'name': 'Siantar' },
    { 'key': 4, 'id_province': 2, 'name': 'Banda Aceh' },
    { 'key': 5, 'id_province': 2, 'name': 'Langsa' },
    { 'key': 6, 'id_province': 2, 'name': 'Takengon' },
]

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function RegisterPage()
{

    const [gender, setGender] = useState('Laki-laki');
    const [email, setEmail] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const [firstNameVal, setFirstNameVal] = useState('');
    const [lastNameVal, setLastNameVal] = useState('');
    const [provinceVal, setProvinceVal] = useState('');
    const [cityVal, setCityVal] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');

    const submitRegister= ()=>{
        firstName === "" ? setFirstNameVal("Nama depan tidak boleh kosong") : setFirstNameVal("")
        lastName === "" ? setLastNameVal("Nama belakang boleh kosong") : setLastNameVal("")
        email === "" ? setEmailVal("Email Tidak boleh kosong") : setEmailVal("")
        password === "" ? setPasswordVal("Password Tidak boleh kosong") : setPasswordVal("")
        province === "" ? setProvinceVal("Provinsi Tidak boleh kosong") : setProvinceVal("")
        city === "" ? setCityVal("Kota Tidak boleh kosong") : setCityVal("")


        !validateEmail(email) ? setEmailVal("Format Email Tidak valid"): setEmailVal("")
        
        if(email !== '' && password !== '' && firstName !== '' && lastName !== '' && province !== '' && city !== '' && validateEmail(email)) alert("validasi berhasil registrasi sukses");
   
    }

    return (
        <div>
            <div className="container mt-5 w-50">
                <GlobalInput title="Nama Depan" onChange={(e) =>setFirstName(e.currentTarget.value) } val={firstNameVal} />
                <GlobalInput title="Nama Belakang" onChange={(e) =>setLastName(e.currentTarget.value) } val={lastNameVal}/>
                <GlobalInput title="Email" onChange={(e) =>setEmail(e.currentTarget.value) } val={emailVal} />
                <GlobalInput title="Password" type="password" onChange={(e) =>setPassword(e.currentTarget.value) } val={passwordVal}/>
                <div>
                    <label className="my-1">Jenis Kelamin :</label>
                    <RadioButtonComponent label="laki laki" id="gender1" name="gender" onChange={() => setGender('Laki-laki')} checked={gender === 'Laki-laki'} value="Laki-Laki" />
                    <RadioButtonComponent label="Perempuan" id="gender2" name="gender" onChange={() => setGender('Perempuan')} checked={gender === 'Perempuan'} value="Perempuan" />
                </div>
                <Gap height={30} />
                <div>
                    <label  className="my-1">Provinsi :</label>
                    <select className="form-select" aria-label="" onChange={e => setProvince(e.currentTarget.value)} defaultValue={""}  >
                        <option >Pilih provinsi</option>
                        {Province.map((data) => { return <option value={data.key} key={data.key}>{data.name}</option> })}
                    </select>
                    <p style={{color:"red",fontSize:12}}>{provinceVal}</p>
                </div>
                <Gap height={30} />
                <div>
                    <label className="my-1">Kota :</label>
                    <select className="form-select" aria-label="" onChange={e => setCity(e.currentTarget.value)} defaultValue={""} >
                        <option >Pilih Kota</option>
                        {City.map((data) => { return province == data.id_province ? <option value={data.key} key={data.key}>{data.name}</option> : null })}
                    </select>
                    <p style={{color:"red",fontSize:12}}>{cityVal}</p>
                </div>
                <Gap height={30} />
                <div style={{ padding: '0 0 0 0' }}>
                    <GlobalButton variant="info" type="outline" onClick={submitRegister} >Daftar</GlobalButton>
                </div>
                <div className="text-center my-3">
                    <span> Sudah punya akun?    <Link to="/login">Masuk disini</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
