import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import './MobileNav.css'
import { mens, womens, mensCollections, womensCollections, accessories, aboutUS, existingC, gifting, helps, delivery, empty } from '../NavArrays/NavArrays'
import NavItems from '../NavItems/NavItems'
import Accessories from '../NavItems/Accessories'
import { Link } from 'react-router-dom'
function MobileNav(){

    return <div>
<Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' padding={'6px'}>
         Men
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <NavItems name={'mens'} arr={mens} />
    <NavItems name={'collections'} arr={mensCollections} />
    <Accessories name={'accessories'} arr={accessories} />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' padding={'6px'}>
          Women
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <NavItems name={'womens'} arr={womens} />
    <NavItems name={'collections'} arr={womensCollections} />
    <Accessories name={'accessories'} arr={accessories} />
    </AccordionPanel>
  </AccordionItem>
  
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' padding={'6px'}>
         Gifting
        </Box>
      </AccordionButton>
    </h2>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' padding={'6px'}>
          About Us
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Accessories name={'about us'} arr={aboutUS} />
    <Accessories name={'existing customers'} arr={existingC} />
    <Accessories name={'gifting'} arr={gifting} />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' padding={'6px'}>
          Help
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Accessories name={'help'} arr={helps} />
    <Accessories name={'delivery'} arr={delivery} />
    <Accessories name={''} arr={empty} />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
   <Link to={'/profile'}>
   <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' padding={'6px'}>
         My Acount
        </Box>
      </AccordionButton>
    </h2>
   </Link>
  </AccordionItem>
</Accordion>
    </div>
}
export default MobileNav