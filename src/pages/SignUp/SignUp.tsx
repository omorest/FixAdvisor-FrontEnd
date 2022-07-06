import { useState } from 'react'
import { Button, Text } from '@chakra-ui/react'
import SingUpFormClient from '../../components/Forms/SingUpFormClient'
import SignUpFormProvider from '../../components/Forms/SignUpFormProvider'

const SignUp = () => {
  const [typeUser, setTypeUser] = useState<string>('')

  const handleClick = (event: any) => setTypeUser(event.target.value)

  const typeFormComponent: any = {
    client: <SingUpFormClient/>,
    provider: <SignUpFormProvider/>
  }

  return (
    <div className='h-[100vh]'>
      {typeUser
        ? null
        : <div className='flex flex-col items-center justify-center gap-20'>
          <Text fontSize='2xl'>¿Que tipo de usuario quieres ser?</Text>
          <div className='flex items-center justify-center gap-20'>
            <Button value='client' onClick={handleClick} >Cliente</Button>
            <Button value='provider' onClick={handleClick} >Proveedor de servicios</Button>
          </div>
        </div>}
      {typeFormComponent[typeUser] || null}

    </div>
  )
}

export default SignUp
