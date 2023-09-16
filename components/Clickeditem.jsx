"use client"
import Link from "next/link";
import Image from "next/image";
const Clickeditem = (props) => {
  let { data } = props;
  const clicked = () => {

    let receiveddata = JSON.stringify(data);
    window.localStorage.setItem("clickeditem", JSON.stringify(receiveddata));
    console.log(JSON.stringify(receiveddata));


  }
  return (
    <div className="m-3">
      <Link href="/clickeditem" onClick={clicked}>

        <h2>{data.productname}</h2>
        <p>{data.description}</p>
        <p>{data.price}</p>
        <Image
          src={`/${data.imagename}`}
          alt="My Image"
          width={300}
          height={300} />
        </Link>
    </div>
  )
}

export default Clickeditem