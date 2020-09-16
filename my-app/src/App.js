import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from "./Form"
import User from "./User"
import Schema from "./Schema"
import axios from "axios"
import * as Yup from "yup"

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  termsofservice: false,
  
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  termsofservice: false,
 
}

const initialUsers = []
const initialDisabled = true

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data)
      })
      .catch(err => {
        console.log(err)
        debugger
      })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users.data, res.data.data])
      })
      .cath(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }
  
  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    Yup
      .reach(Schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const name = evt.target.name
    const checked = evt.target.checked
    console.log()
    Yup
      .reach(Schema, name)
      .validate()
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
    setFormValues({
      ...formValues,
      termsofservice: {
        ...formValues.termsofservice,
        [name]: checked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsofservice: formValues.termsofservice 
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    Schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])

  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>New User Onboard</h1>
      <Form 
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
