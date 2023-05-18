import style from './Login.module.css';

const Login = () => {
  return (
    <div className="container" id={style.contenedor}>
      <div className={style.login}>
        <div className='input-group mb-3' id={style.division_email}>
          <input type="email" className='form-control' id={style.email} placeholder='Email'aria-label='Email' aria-describedby='basic-addon1' />
          <span className='input-group-text' id='basic-addon1'><i className="bi bi-at"></i></span>
        </div>
        <div className="input-group mb-3">
          <input type="password" className='form-control' placeholder='Password' aria-label='Password' aria-describedby='basic-addon2' />
          <span className='input-group-text'><i className="bi bi-key"></i></span>
        </div>
      </div>
    </div>
  )
}

export default Login