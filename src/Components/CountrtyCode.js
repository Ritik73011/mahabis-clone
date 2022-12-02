import React from 'react'
import { MuiTelInput } from 'mui-tel-input'

const CountryCode = () => {
    const [phone, setPhone] = React.useState('')

    const handleChange = (newPhone) => {
        setPhone(newPhone)
    }

    return (
        <MuiTelInput size="big" sx={{ marginLeft: 1.2, marginTop:2, width:'90%' }} label='Mobile Phone' variant="outlined" value={phone} onChange={handleChange} />
    )
}

export {CountryCode};