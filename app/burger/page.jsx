import path from 'path';
import { promises as fs } from 'fs';
import Clickeditem from '@/components/Clickeditem';
export default async function KIDS() {


    const jsonDirectory = path.join(process.cwd(), 'public');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    let data = JSON.parse(fileContents);
    return (
        <div>
            <div className='flex w-full justify-around flex-wrap'>
                {data.burger.map((item) => (

                    <Clickeditem key={item.productname} data={item} />
                ))}
            </div>
            
            </div>
    )

}