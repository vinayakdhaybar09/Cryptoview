import { Button, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Stack direction={['column', 'row']} p={'4'} shadow={'base'} bgColor={'blackAlpha.900'} justifyContent={['center', 'space-between']} >
      <HStack justifyContent={['center','flex-start']} >
        <Button variant={'unstyled'} color={'white'} fontFamily={'Barlow'} letterSpacing={3} fontSize={'large'}  >
          <Link to={'/'} >Cryptoview</Link>
        </Button>
      </HStack>
      <HStack gap={'8'} >
        <Button variant={'unstyled'} color={'white'} >
          <Link to={'/'}>Home</Link>
        </Button>

        <Button variant={'unstyled'} color={'white'} >
          <Link to={'/exchanges'}>Exchanges</Link>
        </Button>

        <Button variant={'unstyled'} color={'white'} >
          <Link to={'/coins'}>Coins</Link>
        </Button>

        <Button variant={'unstyled'} color={'white'} >
          <a href="mailto:someone@example.com">Contact us</a>
        </Button>
      </HStack>
    </Stack>
  )
}

export default Header