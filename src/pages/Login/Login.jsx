import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';



const Login = () => {



    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
      } = useForm({
        mode: "onBlur"
      });


     const loginUser = ()=> {
         let user = {
             email: getValues('email'),
             password: getValues('password'),
         }
         console.log(user);
         
     }
   
     
 
    return (
        <div className='login'>
            <div className="container">
                <div className="content">
                    <form noValidate className='form' action="" onSubmit={handleSubmit(loginUser)}>
                        <h2 className='form__title'>Вход на ROMSEM</h2>
                        <label   className='form__label'>
                            <input  {...register( 'email', {
                                required: {
                                    message: "Поле email, обязательно к заполнению",
                                    value: true
                                },
                                pattern: {
                                    message: 'Введите email верно',
                                    value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                                },

                            })} className='form__field' type="email" placeholder='Введите Email' />
                            <p className='form__error'>{errors.email && errors.email.message}</p>
                        </label>
                     
                        <label  className='form__label'>
                            <input {...register('password', {
                                required: {
                                    message: "Поле password, обязательно к заполнению",
                                    value: true,
                                },
                                maxLength: {
                                    message: "Максимальная длина 20 символов",
                                    value: 20,
                                },
                                minLength: {
                                    message: "Минимальная длина 7 символа",
                                    value: 7
                                },
                                pattern: {
                                    message: 'Пароль должен содержать хотя бы одну заглавную букву и одну цифру',
                                    value: /(?=.*[0-9])(?=.*[a-z]){6,}/g,
                                },
                            })} className='form__field' type="password" placeholder='Придумайте пароль' />
                            <p className='form__error'>{errors.password && errors.password.message}</p>
                        </label>
                    
                        <button className='form__btn' type='submit'>Войти</button>

                        <p className='form__text'>У меня еще нет
                            <Link to="/register" className='form__text-link' > аккаунта</Link>
                        </p>
                    </form>
                </div>
              
            </div>
        </div>
    );
};

export default Login;