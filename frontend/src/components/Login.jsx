import { Formik } from 'formik';
import * as yup from 'yup';

export default function Login () {
  const validationSchema = yup.object().shape({
    username: yup.string().required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty
        }) => 
          <div>
            <p>
              <label htmlFor='username'>Имя пользователя</label>
              <input
                type='text'
                name='username'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
            </p>
            {touched.username && errors.username && <p>{errors.username}</p>}
            <p>
              <label htmlFor='password'>Пароль</label>
              <input
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <button 
              type='submit'
              disabled={!isValid && !dirty}
              onSubmit={handleSubmit}
            >Войти</button>
          </div>
        }
      </Formik>
    </div>
  );
};