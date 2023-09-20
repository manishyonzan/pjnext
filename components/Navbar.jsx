import Link from "next/link"
const Navbar = () => {
    return (
        <>
            <nav className="flex border border-gray-400 dark:bg-slate-900 items-center relative justify-between bg-white px-2 py-2 w-full">
               <div>
                Sukuman lama shop
                </div>
               <ul className="flex items-center justify-between">
                <Link href="/params/momo" className="m-3 hover:text-blue-400">Momo</Link>
                <Link href="/burger" className="m-3 hover:text-blue-400">Burger </Link>
                <Link href="/chowmein" className="m-3 hover:text-blue-400">Chowmein</Link>
               </ul>
               <ul>
                hello 3
               </ul>
            </nav>
        </>
    )
}

export default Navbar