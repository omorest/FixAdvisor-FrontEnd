import { Button, Link, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SingUpFormClient from '../../components/Forms/SingUpFormClient'
import Navbar from '../../components/Navbar/Navbar'

const SignUp = () => {
  const [typeUser, setTypeUser] = useState<string>('')
  const [typeForm, setTypeForm] = useState(null)

  const handleClick = (event: any) => setTypeUser(event.target.value)

  const typeFormComponent: any = {
    client: <SingUpFormClient/>,
    provider: <SingUpFormClient/>
  }

  useEffect(() => {
    setTypeForm(typeFormComponent[typeUser] || null)
  }, [typeUser])

  return (
    <>
      <Navbar />

      {typeUser
        ? null
        : <div className='flex flex-col items-center justify-center gap-20'>
          <Text fontSize='2xl'>¿Que tipo de usuario quieres ser?</Text>
          <div className='flex items-center justify-center gap-20'>
            <Button value='client' onClick={handleClick} >Cliente</Button>
            <Button value='provider' onClick={handleClick} >Proveedor de servicios</Button>
          </div>
        </div>}
      {typeForm || null}
      <Link onClick={() => { setTypeUser('') }}>Atrás</Link>

    </>
  )
}

export default SignUp
