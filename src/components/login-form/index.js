import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

function LoginForm (props) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
  
    function handleEmailChange(event) {
        setUserEmail(event.target.value);
    }

    function handlePwdChange(event) {
        setUserPassword(event.target.value);
    }
  
    function handleSubmit(event) {
      console.log(`userEmail: ${userEmail}`);
      console.log(`userPassword: ${userPassword}`);
      event.preventDefault();
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <FormControl variant="filled" fullWidth={true}>
                <InputLabel htmlFor="email-input">Email</InputLabel>
                <Input id="email-input" aria-describedby="helper-email" autoFocus={true} onChange={handleEmailChange}/>
                <FormHelperText id="helper-email">Type your email.</FormHelperText>
            </FormControl>
            <FormControl variant="filled" fullWidth={true}>
                <InputLabel htmlFor="password-input">Password</InputLabel>
                <Input id="password-input" aria-describedby="helper-pwd" type="password" onChange={handlePwdChange}/>
                <FormHelperText id="helper-pwd">Type your password.</FormHelperText>
            </FormControl>
            <Button variant="outlined" color="primary" type="submit" fullWidth={true}>Log in</Button>
        </form>
    );
  }

  export default LoginForm;