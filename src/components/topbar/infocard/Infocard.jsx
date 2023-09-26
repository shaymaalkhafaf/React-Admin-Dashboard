import './infocard.css';
import TitleIcon from '@mui/icons-material/Title';

export default function Infocard() {
  return (
    <div className='infocard-container'>
        <div className='infocard-item'>
            <span className='infocard-title'>
                <TitleIcon />title 01</span>
            <p className='infocard-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus beatae fugiat unde obcaecati asperiores velit, magni iure libero ipsam vitae officia quas cum commodi nam eos veritatis et inventore? Perspiciatis!</p>
        </div>

        <div className='infocard-item'>
            <span className='infocard-title'>
                <TitleIcon />title 02</span>
            <p className='infocard-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus beatae fugiat unde obcaecati asperiores velit, magni iure libero ipsam vitae officia quas cum commodi nam eos veritatis et inventore? Perspiciatis!</p>
        </div>

        <div className='infocard-item'>
            <span className='infocard-title'>
                <TitleIcon />title 03</span>
            <p className='infocard-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus beatae fugiat unde obcaecati asperiores velit, magni iure libero ipsam vitae officia quas cum commodi nam eos veritatis et inventore? Perspiciatis!</p>
        </div>
    </div>
  )
}
