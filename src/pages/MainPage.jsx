import { StarIcon } from '@chakra-ui/icons'
import { Box, Button, 
    ButtonGroup
    , Card
    , CardBody,
     CardFooter
     , Center
     , Divider
     , Flex,
      Grid
      , GridItem
      , Heading
      , Square
      ,Stack
      ,Text
      ,Image
      , HStack,Input,
       Select, VStack
       , Checkbox, 
     
        
     } from '@chakra-ui/react'


import React from 'react'



function MainPage() {
 


  
  return (
   
<Box>
  <HStack>
  <Box w='20%' bg='yellow.100'minHeight='100vh' >

    <VStack>
        {/* Sort by Price  */}
        <Box>
          
        <Select placeholder='Sort By Price '>
  <option value='option1'>Low To High</option>
  <option value='option2'>High To Low</option>
</Select>
        </Box>

   {/* Brand Search  */}
<Box>
<Text mb='8px'>Search Brands</Text>
<Input variant='outline' placeholder='Serch Products by Brand' />
</Box>

<Box>
<VStack>
<Checkbox defaultChecked>Brand Name</Checkbox>
<Checkbox defaultChecked>Brand Name</Checkbox>
<Checkbox defaultChecked>Brand Name</Checkbox>
<Checkbox defaultChecked>Brand Name</Checkbox>
<Checkbox defaultChecked>Brand Name</Checkbox>
</VStack>
</Box>
{/* product Search  */}
<Box>
<Box>
<Text mb='8px'>PRODUCT TAGS</Text>
<Input variant='outline' placeholder='Search Products by Tag' />
</Box>

<Box>
<VStack>
<Checkbox defaultChecked>Brand Name</Checkbox>
<Checkbox defaultChecked>Brand Name</Checkbox>
<Checkbox defaultChecked>Brand Name</Checkbox>
<Checkbox defaultChecked>Brand Name</Checkbox>
<Checkbox defaultChecked>Brand Name</Checkbox>
</VStack>
</Box>
</Box>
</VStack>


  </Box>


  <Box w='80%' bg='tomato' minHeight='100vh'>

  <Grid templateColumns='repeat(3, 1fr)' gap={6}>

  <GridItem  bg='white' borderRadius={10} p='5'm={5}  >
  <VStack>
  <Heading size='md'> Product Name</Heading>
  <Image
    // boxSize='100%'
    width='100%'
    objectFit='cover'
    src='https://bit.ly/dan-abramov'
    alt='Dan Abramov'
  />
  <Heading size='xs'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ipsam.
  </Heading>
  <Heading size='sm'>Brand Name</Heading>
  <Heading size='sm'>Price ₹</Heading>

 <Box display='flex' justifyContent='center' alignContent='center ' bg='green' color='white' p={2} borderRadius={10}>
    
 <Heading size='xs'  letterSpacing={2} > 4  
  </Heading>
    <StarIcon w={4} h={4} />
 </Box>
  <Divider />
  <HStack p={4} >
    <Button   _hover={{
    background: "blue.300",
    color: "white",
  }}>Buy Now</Button>
    <Button
    _hover={{
        background: "lightgreen",
        color: "black.500",
      }}
      >Add To Cart</Button>
  </HStack>
  </VStack>
  </GridItem>
 
  
</Grid>
  </Box>
  </HStack >
</Box> 
)
}

  


export default MainPage
