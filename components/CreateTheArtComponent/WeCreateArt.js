import './WeCreateArt.css'
import image from '../../assets/Image.svg'

function WeCreateArt(){
    return (
        <div className='font_and_image'>
            <div className='left_portion'>
                <div className='head_and_para'>
                    <div className='head_portion'>
                        <h1>We Create The Art Of Stylish Living Stylishly</h1>
                    </div>
                    <div className='para_portion'> <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p></div>
                </div>
            </div>
            <div className='right_portion'>
                <img src={image} alt='right_image'/>
            </div>
        </div>
    )
}
export default WeCreateArt