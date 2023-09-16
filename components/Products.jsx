import Link from "next/link"
import Image from "next/image"
export default function Products() {
    return (
        <div>
            <div className="flex  justify-center border border-gray-400">
                <div className="p-3">
                    <Link href="/">
                        <h2>Products</h2>
                        <Image
                            src="/product.png"
                            alt="My Image"
                            width="300"
                            height="600"
                        />
                        <h5>See more</h5>
                    </Link>
                </div>
                <div className="p-3 ">
                    <Link href="/kid">
                        <h2>Kids</h2>
                        <Image 
                            src="/kid.jpg"
                            alt="My Image"
                            width="300"
                            height="600"
                        />
                        <h5>See more</h5>
                    </Link>
                </div>
                <div className="p-3">
                    <Link href="/women">
                        <h2>Female</h2>
                        <Image
                            src="/women2.jpg"
                            alt="My Image"
                            width="300"
                            height="600"
                        />
                        <h5>See more</h5>
                    </Link>
                </div>
                <div className="p-3">
                    <Link href="/men">
                        <h2>Male</h2>
                        <Image
                            src="/men2.jpg"
                            alt="My Image"
                            width="300"
                            height="600"
                        />
                        <h5>See more</h5>
                    </Link>
                </div>
            </div>
            <div className="flex  justify-center border border-gray-400">
                <div className="p-3">
                    <h2>Products 1</h2>
                    <Image
                        src="/product.png"
                        alt="My Image"
                        width="300"
                        height="600"
                    />
                    <h5>See more</h5>
                </div>
                <div className="p-3">
                    <h2>Products 1</h2>
                    <Image
                        src="/product.png"
                        alt="My Image"
                        width="300"
                        height="600"
                    />
                    <h5>See more</h5>
                </div>
                <div className="p-3">
                    <h2>Products 1</h2>
                    <Image
                        src="/product.png"
                        alt="My Image"
                        width="300"
                        height="600"
                    />
                    <h5>See more</h5>
                </div>
                <div className="p-3">
                    <h2>Products 1</h2>
                    <Image
                        src="/product.png"
                        alt="My Image"
                        width="300"
                        height="600"
                    />
                    <h5>See more</h5>
                </div>
            </div>
        </div>
    )
}