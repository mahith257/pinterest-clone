import './Home.css'
import noPoster from '../assets/no-poster.jpg'
import noPoster2 from '../assets/no-poster2.jpg'
import Singlecard from './Singlecard';

let cardArray = Array(15).fill(noPoster);
cardArray[4] = noPoster2


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
