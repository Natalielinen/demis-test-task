import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./Form.module.css";
import { connect } from "react-redux";
import FormDataTable from "./FormDataTable";
import {email, phoneNumber, required} from "../../validators/validators";
import { Input } from "../formControls/FormControls";


function FormPage(props) {
  return (
    <div>

      <ContactForm onSubmit={(values) => props.handleInputSubmit(values)} />
      <FormDataTable />

    </div>
  );
}

let ContactForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.contactForm}>
      <div className={styles.inputs}>
        <div>
    
          <Field
            component={Input}
            type="text"
            name="fullName"
            label = "Ф. И. О."
            validate = {[required]}
            
          />
        </div>
        <div>
          
          <Field
            component={Input}
            type="text"
            name="address"
            label ="Адрес"
          />
        </div>
        <div>
          <Field
            component={Input}
            type="tel"
            name="phone"
            label="Телефон"
            validate = {[required, phoneNumber]}
          />
        </div>
        <div>
          <Field
            component={Input}
            type="email"
            name="email"
            label="e-mail"
            validate = {[required, email]}
          />
        </div>
      </div>

      <div className={styles.formBtns}>
        <button className={`${styles.btn} ${styles.sendBtn}`}>Отправить</button>
      </div>
    </form>
  );
};

ContactForm = reduxForm({
  form: "contact",
})(ContactForm);

const mapDispatchToProps = (dispatch) => ({
  handleInputSubmit: (value) =>
    dispatch({ type: "INPUT_SUBMIT", payload: value }),
});

export default connect(null, mapDispatchToProps)(FormPage);
