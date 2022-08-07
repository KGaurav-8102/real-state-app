import React, {useState, useContext} from 'react';

import { RiHome2Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext'

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  console.log(properties);
  return(
     <Menu as='div' className='dropdown relative'>
      <Menu.Button
       onClick={() => setIsOpen(!isOpen)}
       className='dropdown-btn w-full text-left'>
        <RiHome2Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
          <div className='text-[13px]'>Select your place</div>
        </div>
        {
            isOpen ? (
              <RiArrowUpSLine className='dropdown-icon-secondary' />
            ) : (
              <RiArrowDownSLine className='dropdown-icon-secondary' />
            )
          }
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => {
          return(
            <Menu.Item className='cursor-pointer hover:text-violet-700 transition' onClick={() => setProperty(property)} as='li' key={index}>
              {property}
            </Menu.Item>
          )
        })}
      </Menu.Items>
     </Menu>
  )
};

export default PropertyDropdown;
