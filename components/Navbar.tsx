import React, { useContext } from 'react';
import Link from "next/link";
import Mode from "./Mode";


const Navbar = () => {
    
    return ( 
        <nav>
            <div className="logo">
                <h1>Conference</h1>
            </div>
            <div>
                <Mode  />
            </div>
            <Link href="/">Home</Link>
            <Link href="/speakers">Speakers</Link>
            <Link href="/sessions">Sessions</Link>
        </nav>
    );
}
 
export default Navbar;