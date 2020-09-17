import React from "react"

function Form(props){
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
    } = props
    return(
        <div className = "form container">
            <h2> New User Sign-up</h2>
            <lable>
                First Name
                <input
                    type="text"
                    name="first_name"
                    value={values.first_name}
                    onChange={onInputChange}
                    placeholder = "Enter first name"
                />
                
            </lable><br></br>
            <lable>
                Last Name
                <input
                    type="text"
                    name="last_name"
                    value={values.last_name}
                    onChange={onInputChange}
                    placeholder = "Enter last name"
                />
                
            </lable><br></br>

            <lable>
                Email
                <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={onInputChange}
                    placeholder = "Enter your Email"/>
                
            </lable><br></br>

            <lable>
                Password
                <input
                    type="text"
                    name="password"
                    value={values.password}
                    onChange={onInputChange}
                    placeholder = "Enter your password"
                />
                
            </lable><br></br>

            <lable>
                Terms of Service
                <input
                    type="checkbox"
                    name="termsofservice"
                    onChange={onCheckboxChange}
                    checked ={values.termsofservice}
                />
                
            </lable><br></br>

            <div>{errors.username}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.termsofservice}</div>
            

            <button disabled={disabled} onClick={onSubmit}> Submit Your Info</button>
        </div>
    )
}
export default Form;