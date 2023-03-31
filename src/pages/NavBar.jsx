import React from 'react'
import {  DeleteIcon, SearchIcon } from '@chakra-ui/icons'
import {
     Avatar, 
     Box ,
     Button
     ,ButtonGroup
     ,Center
     ,Container
     ,Flex
     ,Heading
     ,IconButton
     ,Input
     ,Link
     ,Spacer
     , Stack
      } from '@chakra-ui/react';
import Login from './Login';
      

function NavBar() {
  return (
<Center >
<Box w='100%'  color='white'  boxShadow='2xl' p='2' rounded='md' bg='white'  display='flex' justifyContent='space-between' alignItems='center' >


<Box p='4' bg='red.400' >
<Flex minWidth='max-content' alignItems='center' gap='2'>

  {/* logo div */}
<Box p='2' >
  <Heading size='md'>HealthHub</Heading>
</Box>
{/* navbar links */}
</Flex>
</Box >
<Box color='black'   >
<Link to=''>MEDICINE</Link>
</Box>
<Box color='black' >
<Link to=''>MEDICINE</Link>
</Box>
<Box color='black' >
<Link to=''>MEDICINE</Link>
</Box>
<Box color='black'  display='flex'>
<Input variant='filled' placeholder='Search' />
<IconButton
  colorScheme='blue'
  aria-label='Search database'
  icon={<SearchIcon />}
/>
</Box>

<Box p='4' >
<ButtonGroup gap='2'>
<Button colorScheme='teal' >Sign Up</Button>
  <Button colorScheme='teal'>Log in</Button>
  {/* <Button colorScheme='teal'>Log out</Button> */}
</ButtonGroup>

</Box>
<Box color='black'  >
<DeleteIcon w='5' h='5' color="green.400"/>
</Box>

<Box>
<Stack direction='row'>

<Avatar name='Omkar Walavalkar' src='https://bit.ly/broken-link'/>

</Stack>
</Box>


</Box>
</Center>
  )
}

export default NavBar
