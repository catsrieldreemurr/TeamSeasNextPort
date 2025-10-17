import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar(){
    return(
        <nav className="bg-ts-light p-4 flex justify-between items-center text-ts-blue font-bold text-2xl">
            <Image src="/TeamSeasLogo_Round.png" height={50} width={50} alt="roundLogo" className="sm:hidden"></Image>
            <Image src="/TeamSeasLogo_Big.png" height={400} width={400} alt="bigLogo" className="hidden sm:block"></Image>

            <button className="sm:hidden"> <Image src={"/hamburber.svg"} height={35} width={35} alt="hamburber"></Image> </button>
            
            <div className="hidden flex gap-10 sm:flex">
                <Link href={"https://youtube.com"} className="hover:bg-ts-lighterblue p-2 rounded-xl">Om Oss</Link>
                <Link href={"https://youtube.com"} className="hover:bg-ts-lighterblue p-2 rounded-xl">Bli Frivillig</Link>
                <Link href={"https://youtube.com"} className="hover:bg-ts-lighterblue p-2 rounded-xl">Donasjoner</Link>
                <Link href={"https://youtube.com"} className="hover:bg-ts-lighterblue p-2 rounded-xl">Arrangementer</Link>
                <Link href={"https://youtube.com"} className="hover:bg-ts-lighterblue p-2 rounded-xl">Logg inn</Link>
            </div>
        </nav>
    )
}