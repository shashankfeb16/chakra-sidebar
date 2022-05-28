import React from 'react'
import{BiHomeAlt,BiTrendingUp} from 'react-icons/bi'
import {MdOutlineExplore} from 'react-icons/md'
import {AiOutlineStar} from 'react-icons/ai'
import {AiOutlineSetting} from 'react-icons/ai'
import {  
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    RadioGroup,
    Stack,
    Radio,
    Button,
  } from '@chakra-ui/react'

const Leftdrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
        {/* <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='4'>
            <Radio value='top'>Top</Radio>
            <Radio value='right'>Right</Radio>
            <Radio value='bottom'>Bottom</Radio>
            <Radio value='left'>Left</Radio>
          </Stack>
        </RadioGroup>
        <Button colorScheme='blue' onClick={onOpen}>
          Open
        </Button> */}
        <Drawer placement={placement} onClose={onClose} isOpen={onOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Logo</DrawerHeader>
            <DrawerBody display="flex" flexDirection="column">
            <Button colorScheme='white' size='lg' marginTop="40px" color="black" _hover={{backgroundColor: "#55a0dd"}} marginLeft="20px">
            <BiHomeAlt style={{ marginRight: 20 }}></BiHomeAlt><p>Home</p>
            </Button>
            <Button colorScheme='white' size='lg' marginTop="40px" color="black" _hover={{backgroundColor: "#55a0dd"}} marginLeft="20px">
                <BiTrendingUp style={{ marginRight: 20 }}></BiTrendingUp>Trending
            </Button>
            <Button colorScheme='white' size='lg' marginTop="40px" color="black" _hover={{backgroundColor: "#55a0dd"}} marginLeft="20px">
                <MdOutlineExplore style={{ marginRight: 20 }}></MdOutlineExplore>Explore
            </Button>
            <Button colorScheme='white' size='lg' marginTop="40px" color="black" _hover={{backgroundColor: "#55a0dd"}} marginLeft="20px">
                <AiOutlineStar style={{ marginRight: 20 }}></AiOutlineStar>Favourites
            </Button>
            <Button colorScheme='white' size='lg' marginTop="40px" color="black" _hover={{backgroundColor: "#55a0dd"}} marginLeft="20px">
                <AiOutlineSetting style={{ marginRight: 20 }}></AiOutlineSetting>Settings
            </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default Leftdrawer