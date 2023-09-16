// export const GET = async (req, res) => {
//     res.json({ name: 'John Doe' })
//   }
  
import { NextResponse,NextRequest } from "next/server";
export const GET = async () => {
  try {
    const data = { name: 'John Doe' };
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Error on '/api/register': " + error,
      status: 400
    });
  }
}
