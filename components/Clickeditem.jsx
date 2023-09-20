"use client"
import Link from "next/link";
const Clickeditem = (props) => {
  let { data } = props;
  const clicked = () => {

    let receiveddata = JSON.stringify(data);
    window.localStorage.setItem("clickeditem", JSON.stringify(receiveddata));
    console.log(JSON.stringify(receiveddata));


  }
  return (
    <div className="m-3 block clickedshow p-5">
      <Link href="/clickeditem" onClick={clicked}>

        <h2>{data.productname}</h2>
        <p>{data.description}</p>
        <p>{data.price}</p>
          <img alt="burger" className="h-60 w-60" src={`/${data.imagename}`} />
        </Link>
    </div>
  )
}

export default Clickeditem