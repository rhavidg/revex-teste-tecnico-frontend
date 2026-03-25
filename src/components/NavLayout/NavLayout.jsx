'use client';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

export default function NavLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
