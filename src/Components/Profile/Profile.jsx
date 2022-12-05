import {Flex,Box, Tabs, TabList, Tab, TabPanels, TabPanel, Button, useToast} from '@chakra-ui/react'
import './Profile.css'
import {webAuth} from '../AuthFirbase'
import SingleCart from '../Cart/SingleCart'
import { useState } from 'react';
import { useEffect } from 'react';
import OrderH from './OrderH';
import {signOut } from "firebase/auth";

function Profile() {
    let [data,setData] = useState({});
    const user = webAuth.currentUser;

    let toast = useToast();
    const logOut = () =>{
      signOut(webAuth).then(() => {
        toast({
          title: `${'logout successfully...'}`,
          position: "top",
          icon: " ",
          isClosable: true,
        })
      }).catch((error) => {
        // An error happened.
      });
    }
   const gettinfProfileData = ()=>{
    if (user !== null) {
        user.providerData.forEach((profile) => {
          let obj = {
            name:profile.displayName,
            email:profile.email,
            img:profile.photoURL
          }
          setData(obj);
        });
      }
   }
   useEffect(()=>{
    gettinfProfileData();
   },[])

   let order = JSON.parse(localStorage.getItem("ordered"))||[];
  return (
    <Flex justifyContent={'center'}>
      <Box maxWidth="1240px" width="100%" m='16px 0'>
        <Tabs variant='soft-rounded' colorScheme='blackAlpha'>
          <TabList>
            <Tab>Profile info</Tab>
            <Tab>Order history</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
                <img className='profileUrl' src={data.img} alt="" />
                <p style={{marginTop:"10px"}}>{data.name}</p>
                <p style={{marginTop:"10px"}}>{data.email}</p>
                <Button onClick={logOut} mt={'24px'} bg='lightblue'>LOGOUT</Button>
            </TabPanel>
            <TabPanel>
              {
                order.map((ele,idx)=>{
                    return <OrderH key={idx+1} ele={ele}/>
                })
              }
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
export default Profile;
