import './Singlecard.css'

export default function Singlecard({ card, index }) {
  return (
    <div className='single-card'>
        <div className='single-image'>
            {index !== 4 && <img src={card} alt = 'card' className='card-image' style={{width:'250px',height:'350px'}} />}
            {index === 4 && <img src={card} alt = 'card' className='card-image' />}
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
        </div>
        <div style={{padding:'5px', fontWeight:'600', width: 'fit-content'}} className='title'>Title</div>
    </div>
  );
}
