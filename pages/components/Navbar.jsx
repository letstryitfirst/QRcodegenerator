import React from 'react';
import Link from 'next/link';
import { Span } from 'next/dist/trace';

function Navbar() {
  return (
    <nav>
    <a href="https://github.com/letstryitfirst?tab=repositories" target='_blank' id='navtop'>PrathmeshSarwdnya</a>
    <span id="cntr-nav">
    <Link href = {"/Body"} >Home</Link>
      <a href="#QR-Generator">QR Generator</a>
       <a href="#scanner">Scanner </a>
    </span>
</nav>
  )
}

export default Navbar