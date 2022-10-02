import React,{useState} from 'react'
import {FirebaseAuthService} from '../../FirebaseAuthService.js';
import { Link } from 'react-router-dom';
function Signup() {
  const [cred, setCred] = useState<{ email: string, password: string }>({ email: '', password: '' });
  const [user, setUser] = useState <object | null>(null);
  async function handleSubmit(e: React.MouseEvent<HTMLFormElement, MouseEvent>) {
    e.preventDefault();
    try {
      await FirebaseAuthService.registerUser(
        cred.email,
        cred.password
      );
      setCred({ email: '', password: '' });
      FirebaseAuthService.subscribeToAuthChanges(setUser);
      alert('Successfully Logged In');
    } catch (error: any) {
      alert(error.message);
    }
  }
  async function loginWithGoogle() {
    try {
      await FirebaseAuthService.loginWithGoogle();
    } catch (error: any) {
      alert(error.message);
    }
  }

  function changeHandler(e:React.ChangeEvent<HTMLInputElement>) {
    setCred({ ...cred, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <h1>This is Signup Component</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email"  name="email"
          onChange={changeHandler}
          value={cred.email}/>
        <input type="password" placeholder="password" name="password"
          onChange={changeHandler}
          value={cred.password}/>
        <button type="submit">Submit</button>
        <button type="button" className="button" onClick={loginWithGoogle}>
          Signup Using Google
        </button>
        <Link to="/login">Already Having an Account? Login</Link>
      </form>
    </div>
  )
}

export {Signup}