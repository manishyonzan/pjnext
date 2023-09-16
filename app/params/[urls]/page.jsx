import path from 'path';
import { promises as fs } from 'fs';
export default async function URLS({ params }) {
    const { urls } = params;


    const jsonDirectory = path.join(process.cwd(), 'public');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    let data = JSON.parse(fileContents);
    return (
        <div>hello {urls}
            {data.men.map((item) => (
                <li key={item.productname}>
                    <h2>{item.productname}</h2>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </li>
            ))}
            
            </div>
    )

}