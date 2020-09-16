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
        <div className = "form container" onSubmit={onSubmit}>
            <h2> New User Sign-up</h2>
            <lable>
                Name
                <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={onInputChange}
                    placeholder = "Enter a username"
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
            

            <button disabled={disabled}> Summit Your Info</button>
        </div>
    )
}
export default Form;