import { useState } from "react";

function useTextInput(){
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return{
        value,
        setValue,
        handleChange,
    }
}

export {useTextInput};