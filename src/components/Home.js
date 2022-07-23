import './Home.css'
import noPoster from '../assets/no-poster.jpg'
import noPoster2 from '../assets/no-poster2.jpg'

let cardArray = Array(15).fill(noPoster);
cardArray[2] = noPoster2


export default function Home() {
    return (
        <>
        <div className='home'>
            {cardArray && cardArray.map((card, index) => (
                <div key={index} className="single-card">
                    {index !== 2 && <img src={card} alt = 'card' className='card-image' style={{width:'250px',height:'350px'}} />}
                    {index === 2 && <img src={card} alt = 'card' className='card-image' />}
                    <div className='card-overlay'>
                        <button className='save-btn'>Save</button>
                        <div className='bottom-icons'>
                            <div className="redirect">
                                <i className="bi bi-arrow-up-right"></i>
                                <span> google</span>
                            </div>
                            <div style={{backgroundColor: 'lightgray', padding:'10px 12px',borderRadius:'50%',cursor:'pointer'}} className="download">
                                <i className="bi bi-download"></i>
                            </div>
                            <div style={{backgroundColor: 'lightgray', padding:'10px 12px',borderRadius:'50%',marginLeft:'5px',cursor:'pointer', marginRight:'10px'}} className="options">
                                <i className="bi bi-three-dots"></i>
                            </div>
                        </div>
                    </div>
                    <div style={{padding:'5px', fontWeight:'600'}}>Title</div>
                </div>
            ))}
        </div>
        <div className='question-mark'><i className="bi bi-question-lg"></i></div>
        </>
    );
}
