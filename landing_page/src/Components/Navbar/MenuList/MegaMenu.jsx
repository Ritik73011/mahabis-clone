import NavItems from '../NavItems/NavItems';
import Accessories from '../NavItems/Accessories';
import ImageMenu from '../NavItems/ImageMenu';

import { mens, womens, mensCollections, womensCollections, accessories, aboutUS, existingC, gifting, helps, delivery, empty } from '../NavArrays/NavArrays'
import { ChevronDownIcon } from '@chakra-ui/icons';

import {
    Flex,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Button,
  } from '@chakra-ui/react'
import './MegaMenu.css';

function MegaMenu({Layout}){
    const img1m = 'https://cdn.shopify.com/s/files/1/0238/5795/files/2_72fb26be-e2da-4153-ab1b-bed4caf9ac3d.jpg?v=1668504600';
    const img2c = 'https://cdn.shopify.com/s/files/1/0238/5795/files/3_9441f258-ec1d-4485-a5ad-16e9085b789d.jpg?v=1668504819';
    const img3w = 'https://cdn.shopify.com/s/files/1/0238/5795/files/1_146e9e0b-ba25-44f2-9862-52954aa3a1c9.jpg?v=1668504600';
    const name1m = 'mahabis rewards'
    const name2c = 'Sale slippers - shop outlet'
    const name3w = 'Gift mahabis'
    return <Layout>
        <Popover isLazy>
          <PopoverTrigger>
            <Button bg='none' padding='3' fontWeight='normal' fontSize='14px' _hover={{ bg: 'none', color: 'black', fontWeight: '600' }} className='menuBtn'>Men <ChevronDownIcon ml='4px' /></Button>
          </PopoverTrigger>
          <PopoverContent pos='absolute' top='2' width='100%' bg='#f5f5f5'>
            <PopoverBody>
              <Flex gap='70px' justifyContent='center' padding='20px 16px'>
                <NavItems name={'mens'} arr={mens} />
                <NavItems name={'collections'} arr={mensCollections} />
                <Accessories name={'accessories'} arr={accessories} />
                <ImageMenu name1={name1m} name2={name2c} img1={img1m} img2={img2c} />
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover isLazy>
          <PopoverTrigger>
            <Button bg='none' padding='3' fontWeight='normal' fontSize='14px' _hover={{ bg: 'none', color: 'black', fontWeight: '600' }} className='menuBtn'>Women<ChevronDownIcon ml='4px' /></Button>
          </PopoverTrigger>
          <PopoverContent pos='absolute' top='2' width='100%' bg='#f5f5f5'>
            <PopoverBody>
              <Flex gap='70px' justifyContent='center' padding='20px 16px'>
                <NavItems name={'womens'} arr={womens} />
                <NavItems name={'collections'} arr={womensCollections} />
                <Accessories name={'accessories'} arr={accessories} />
                <ImageMenu name1={name1m} name2={name2c} img1={img3w} img2={img2c} />
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover isLazy>
          <Button bg='none' padding='3' fontWeight='normal' fontSize='14px' _hover={{ bg: 'none' }} className='menuBtn'>Gifting</Button>
        </Popover>

        <Popover isLazy>
          <PopoverTrigger>
            <Button bg='none' padding='3' fontWeight='normal' _hover={{ bg: 'none', color: 'black', fontWeight: '600', }} fontSize='14px' className='menuBtn'>About Us<ChevronDownIcon ml='4px' /></Button>
          </PopoverTrigger>
          <PopoverContent pos='absolute' top='2' width='100%' bg='#f5f5f5'>
            <PopoverBody>
              <Flex gap='70px' justifyContent='center' padding='20px 16px'>
                <Accessories name={'about us'} arr={aboutUS} />
                <Accessories name={'existing customers'} arr={existingC} />
                <Accessories name={'gifting'} arr={gifting} />
                <ImageMenu name1={name3w} name2={name2c} img1={img3w} img2={img2c} />
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover isLazy>
          <PopoverTrigger>
            <Button bg='none' padding='3' fontWeight='normal' _hover={{ bg: 'none', color: 'black', fontWeight: '600' }} fontSize='14px' className='menuBtn'>Help<ChevronDownIcon ml='4px' /></Button>
          </PopoverTrigger>
          <PopoverContent pos='absolute' top='2' width='100%' bg='#f5f5f5'>
            <PopoverBody>
              <Flex gap='70px' justifyContent='center' padding='20px 16px'>
                <Accessories name={'help'} arr={helps} />
                <Accessories name={'delivery'} arr={delivery} />
                <Accessories name={''} arr={empty} />
                <ImageMenu name1={name3w} name2={name2c} img1={img1m} img2={img2c} />
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
    </Layout>
}

export default MegaMenu;