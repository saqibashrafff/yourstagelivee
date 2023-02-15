import './globals.css'

import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap'
// import React, { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // useEffect(() => {
  //   import('bootstrap/dist/js/bootstrap');
  // }, []);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-secondary'>{children}</body>
    </html>
  )
}
