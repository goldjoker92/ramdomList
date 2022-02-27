import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { editUser } from '../../redux/action/users';
import './edit.css'

const Edit = () => {
    const [data, setData] = useState();
    const { id } = useParams();
    const state = useSelector(state => state.user)
    const dispatch = useDispatch();

    useEffect(() => {
        const tdata = state.users[id]
        if (tdata) {
            let temp = {
                cell: tdata.cell,
                ...tdata.dob,
                email: tdata.email,
                gender: tdata.gender,
                ...tdata.name,
                nat: tdata.nat,
                phone: tdata.phone,
                rdate: tdata.registered.date,
                rage: tdata.registered.age,
                city: tdata.location.city,
                state: tdata.location.state,
                country: tdata.location.country,
                postcode: tdata.location.postcode,
                ...tdata.location.timezone,
                ...tdata.location.coordinates,
                streetNo: tdata.location.street.number,
                streetName: tdata.location.street.name,
            }
            setData(temp)
        }
    }, [id, state.users])

    const handleSubmit = () => {
        const prevData = state.users[id]

        //formattage des datas
        let formatedData = {
            ...prevData,
            cell: data.cell,
            dob: { date: data.date, age: data.age },
            email: data.email,
            gender: data.gender,
            location: {
                street: {
                    number: data.streetNo,
                    name: data.streetName
                },
                city: data.city,
                state: data.state,
                country: data.country,
                postcode: data.postcode,
                coordinates: { latitude: data.latitude, longitude: data.longitude },
                timezone: { offset: data.offset, description: data.description },
            },
            name: { title: data.title, first: data.first, last: data.last },
            nat: data.nat,
            phone: data.phone,
        }

        dispatch(editUser({ id, data: formatedData }));
        toast.success('information updated successfully ')
    }



    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Link to='/' ><button style={{ left: 10, right: 'auto' }} className='saveBtn'>Back</button></Link>
            <button onClick={handleSubmit} className='saveBtn'>Save</button>
            <div className='form-wrapper'>
                <div>
                    <label>Title</label>
                    <input name='title' value={data?.title} placeholder='Title' onChange={onChange} />
                </div>

                <div>
                    <label>First Name</label>
                    <input name='first' value={data?.first} placeholder='First name' onChange={onChange} />
                </div>

                <div>
                    <label>Last Name</label>
                    <input name='last' value={data?.last} placeholder='Last name' onChange={onChange} />
                </div>

                <div>
                    <label>Gender</label>
                    <input name='gender' value={data?.gender} placeholder='Gender' onChange={onChange} />
                </div>

                <div>
                    <label>Email</label>
                    <input name='email' value={data?.email} placeholder='Email' onChange={onChange} />
                </div>

                <div>
                    <label>Cell</label>
                    <input name='cell' value={data?.cell} placeholder='Cell' onChange={onChange} />
                </div>

                <div>
                    <label>Phone</label>
                    <input name='phone' value={data?.phone} placeholder='Phone' onChange={onChange} />
                </div>

                <div>
                    <label>Date of birth</label>
                    {console.log('dob', data?.date)}
                    <input type='date' defaultValue={data?.date.split('T')[0]} name='date' placeholder='Date of birth' onChange={onChange} />
                </div>

                <div>
                    <label>Age</label>
                    <input readOnly value={data?.age} placeholder='Age' />
                </div>

                <div>
                    <label>nat</label>
                    <input name='nat' value={data?.nat} placeholder='Nat' onChange={onChange} />
                </div>


                <div>
                    <label>Registered Date</label>
                    <input value={data?.rdate} readOnly placeholder='Registered Date' />
                </div>

                <div>
                    <label>Registered Age</label>
                    <input value={data?.rage} readOnly placeholder='Registered Age' />
                </div>

                <h5 style={{ width: '1000%' }}>Location</h5>

                <div>
                    <label>City</label>
                    <input name='city' value={data?.city} placeholder='city' onChange={onChange} />
                </div>

                <div>
                    <label>Latitude</label>
                    <input name='latitude' value={data?.latitude} placeholder='Latitude' onChange={onChange} />
                </div>

                <div>
                    <label>Longitude</label>
                    <input name='longitude' value={data?.longitude} placeholder='Longitude' onChange={onChange} />
                </div>

                <div>
                    <label>Country</label>
                    <input name='country' value={data?.country} placeholder='Country' onChange={onChange} />
                </div>

                <div>
                    <label>Postcode</label>
                    <input name='postcode' value={data?.postcode} placeholder='Postcode' onChange={onChange} />
                </div>

                <div>
                    <label>State</label>
                    <input name='state' value={data?.state} placeholder='State' onChange={onChange} />
                </div>


                <div>
                    <label>Street Number</label>
                    <input name='streetNo' value={data?.streetNo} placeholder='streetNo' onChange={onChange} />
                </div>


                <div>
                    <label>Street Name</label>
                    <input name='streetName' value={data?.streetName} placeholder='streetName' onChange={onChange} />
                </div>

                <div>
                    <label>Timezone Offset</label>
                    <input name='offset' value={data?.offset} placeholder='Timezon Offset' onChange={onChange} />
                </div>

                <div>
                    <label>Timezone Description</label>
                    <input name='description' value={data?.description} placeholder='Timezone Description' onChange={onChange} />
                </div>

            </div>
        </>
    )
}

export default Edit;