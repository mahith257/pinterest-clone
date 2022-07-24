import './Home.css'
import noPoster from '../assets/no-poster.jpg'
import noPoster2 from '../assets/no-poster2.jpg'
import SoloLevelling from '../assets/sololevelling.jpg'
import SoloLevelling2 from '../assets/sololevelling2.jpg'
import Picture1 from '../assets/picture.jpg'
import Singlecard from './Singlecard';

let cardArray = Array(15).fill(noPoster);
cardArray[4] = noPoster2
cardArray[3] = SoloLevelling
cardArray[0] = Picture1
cardArray[6] = SoloLevelling2



export default function Home() {
    return (
        <div className='container'>
            <div className='home'>
                {cardArray && cardArray.map((card, index) => (
                    <Singlecard card={card} index = {index} key = {index} />
                ))}
            </div>
            <div className='question-mark'><i className="bi bi-question-lg"></i></div>
        </div>
    );
}
