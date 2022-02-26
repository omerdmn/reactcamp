import React, { useState } from 'react'

import { Button, Input } from 'semantic-ui-react'

export default function SearchForm() {
    const [value, setValue] = useState("")

    function Tık() {
        if (value.length !== 0) {
            window.location.assign("http://localhost:3000/filter/" + value)
            console.log(value);
        }
    }

    return (
        <div> <Input action={<Button onClick={Tık}>Ara</Button>}
            icon='search' iconPosition="left"
            onChange={e => setValue(e.target.value)}
            placeholder={value}>
        </Input></div>
    )
}
