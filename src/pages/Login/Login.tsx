import SignInForm from '../../components/Forms/SignInForm'
import Navbar from '../../components/Navbar/Navbar'

const Login = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center mt-[100px]'>
        <SignInForm />
        {/* <SingUpForm /> */}
      </div>
    </>
  )
}

export default Login
