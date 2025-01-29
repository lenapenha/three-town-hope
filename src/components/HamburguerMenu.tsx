'use client';

import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface MenuProps {
    open: boolean;
  }

const MenuButton = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: right;
  align-items: center;
  cursor: pointer;
  position: relative;
  right: 1rem;
  transition: transform 0.3s ease-in-out;
`;

const Menu = styled.div<MenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #3a4540;
  text-align: center;
  padding: 2rem;
  position: fixed;
  top: 90px;
  z-index: 20;
  right: ${({ open }) => (open ? '7%' : '-100%')};
  transition: right 0.3s ease-in-out;
 
`;

const Line = styled.div`
  width: 1.5rem;
  height: 0.2rem;
  background: white;
  transition: all 0.2s ease;
  &:nth-child(2) {
    margin: 0.3rem 0;
  }
`;

export default function HamburguerMenu() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="justify-end md:hidden">
        <MenuButton id="menu-button" onClick={() => setIsOpen(!isOpen)}>
            <div>
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </div>
        </MenuButton >
        <Menu id="menu" open={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <Link href='/' className='hover:underline'>Home</Link>
            <Link href='#about' className='hover:underline' >Who we are</Link>
            <Link href='/' className='hover:underline'>Contact</Link>
            <Link href='/' className='hover:underline'>Videos</Link> 
        </Menu>
  </div>
  );
}