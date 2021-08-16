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


function RegisterPage()
{
    const [gender, setGender] = useState('Laki-laki');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');

    return (
        <div>
            <div className="container mt-5 w-50">
                <GlobalInput title="Nama Depan" onChange={() => console.log('tes')} />
                <GlobalInput title="Nama Belakang" onChange={() => console.log('tes')} />
                <GlobalInput title="Email" onChange={() => console.log('tes')} />
                <GlobalInput title="Password" type="password" onChange={() => console.log('tes')} />
                <div>
                    <label className="my-1">Jenis Kelamin :</label>
                    <RadioButtonComponent label="laki laki" id="gender1" name="gender" onChange={() => setGender('Laki-laki')} checked={gender === 'Laki-laki'} value="Laki-Laki" />
                    <RadioButtonComponent label="Perempuan" id="gender2" name="gender" onChange={() => setGender('Perempuan')} checked={gender === 'Perempuan'} value="Perempuan" />
                </div>
                <Gap height={30} />
                <div>
                    <label  className="my-1">Provinsi :</label>
                    <select className="form-select" aria-label="" onChange={e => setProvince(e.currentTarget.value)} defaultValue={0} >
                        <option >Pilih provinsi</option>
                        {Province.map((data) => { return <option value={data.key} key={data.key}>{data.name}</option> })}
                    </select>
                </div>
                <Gap height={30} />
                <div>
                    <label className="my-1">Kota :</label>
                    <select className="form-select" aria-label="" onChange={e => setCity(e.currentTarget.value)} defaultValue={0}>
                        <option >Pilih Kota</option>
                        {City.map((data) => { return province == data.id_province ? <option value={data.key} key={data.key}>{data.name}</option> : null })}
                    </select>
                </div>
                <Gap height={30} />
                <div style={{ padding: '0 0 0 0' }}>
                    <GlobalButton variant="info" type="outline" onClick={()=>console.log('tes')} >Daftar</GlobalButton>
                </div>
                <div className="text-center my-3">
                    <span> Tidak Punya Akun?    <Link to="/register">Buat Akun</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
