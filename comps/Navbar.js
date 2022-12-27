import Link from "next/link";
import Image from "next/image";

const Navbar = (props) => {
    return (
       <nav>
        <div className="logo">
        <Image src="/vercel.svg" width={50} height={50} alt="A logo"/>
       </div>
       <Link href='/'>Home</Link>
       <Link href='/about'>About</Link>
       <Link href='/ninjas'>Ninja Listing</Link>
       </nav>
    );
}

export default Navbar;