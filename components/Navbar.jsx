import Link from "next/link"
const Navbar = () => {
    return (
        <>
            <nav className="flex border border-gray-400 dark:bg-slate-900 items-center relative justify-between bg-white px-2 py-2 w-full">
               <div>
                Sukuman lama shop
                </div>
               <ul className="flex items-center justify-between">
                <Link href="/men" className="m-3 hover:text-blue-400">Men</Link>
                <Link href="/women" className="m-3 hover:text-blue-400">Women </Link>
                <Link href="/kid" className="m-3 hover:text-blue-400">Kids</Link>
               </ul>
               <ul>
                hello 3
               </ul>
            </nav>
        </>
    )
}

export default Navbar