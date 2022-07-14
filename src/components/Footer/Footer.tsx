import { Text } from '@chakra-ui/react'
import { BsTwitter, BsLinkedin, BsGithub, BsSuitHeartFill } from 'react-icons/bs'

const Footer = () => {
  const style = 'h-[15vh] bg-[#1f2937] flex flex-col gap-5 justify-center items-center'

  return (
    <div className={style}>
      <div className='flex gap-5 text-2xl text-white'>
        <a href='https://twitter.com/oscarmoreira1' target="_blank" rel="noreferrer"> <BsTwitter/></a>
        <a href='https://www.linkedin.com/in/oscarmoreira/' target="_blank" rel="noreferrer"> <BsLinkedin/></a>
        <a href='https://github.com/omorest' target="_blank" rel="noreferrer"> <BsGithub/></a>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <Text color='white'>Made with</Text>
        <div className='text-[#ff595e]'>
          <BsSuitHeartFill/>
        </div>
        <Text color='white'>by Óscar Moreira</Text>
      </div>
    </div>
  )
}

export default Footer
