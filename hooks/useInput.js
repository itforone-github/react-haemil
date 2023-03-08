/**
 * input 제어
 * @param initValue: 초기값
 * @return value: 입력받은값
 */
import {useState} from "react";

const useInput = (initValue) => {
    const [value, setValue] = useState(initValue);
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const setInputValue = (newValue) => {
        setValue(newValue)
    }
    return {value, onChange, setInputValue};
}

export default useInput;