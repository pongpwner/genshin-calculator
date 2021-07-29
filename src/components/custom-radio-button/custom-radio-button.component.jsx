import React from 'react';

import './custom-radio-button.styles.css';

const CustomRadioButton=({option,label,name,value,onChange})=>(
    <div className='custom-radio-button'> 
    <label>{label}</label>
    <input type='radio' name={name} value={option.value} checked={Number(value)===option.value} onChange={onChange}></input>
    </div>
)
export default CustomRadioButton;