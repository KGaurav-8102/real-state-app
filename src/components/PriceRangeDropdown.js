import React, {useState,useContext} from 'react';

import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext'

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);


  const prices = [
    {
      value: 'Price Range (any)'
    },
    {
      value: '100000-1300000'
    },
    {
      value: '1300000-1600000'
    },
    {
      value: '1600000- 1900000'
    },
    {
      value: '1900000-2200000'
    },
    {
      value: '10000-30000'
    },
    {
      value: '30000-40000'
    }
  ]

  return(
     <Menu as='div' className='dropdown relative'>
      <Menu.Button
       onClick={() => setIsOpen(!isOpen)}
       className='dropdown-btn w-full text-left'>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose Price Range</div>
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
        {prices.map((price, index) => {
          return(
            <Menu.Item className='cursor-pointer hover:text-violet-700 transition' onClick={() => setPrice(price.value)} as='li' key={index}>
              {price.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>
     </Menu>
  )
};

export default PriceRangeDropdown;
