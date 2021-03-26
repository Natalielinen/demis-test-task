import React from 'react';
import styles from './FormControls.module.css';



const FormControl = ({
    input,
    label,
    type,
    meta: { touched, error}
  }) => 
  
 { 
    const showError = touched && error;
     return (
    <div>
      
      <div className={styles.formControl + " " + (showError ? styles.error : " ")}>
      <label>{label}</label>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>))}
      </div>
    </div>
  )}




  export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}


