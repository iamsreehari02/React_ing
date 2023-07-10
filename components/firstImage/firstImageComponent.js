import './firstImageComponent.css'
import arrow from '../../assets/Vector (1).svg'

function Image(){
    return(

        <div className='image_and_heading'>
            <div className='inside_image_para'>
                <div className='only_para_part'>
                    <div className='heading_of_para'>
                        <h1>Let Your Home Be Unique</h1>
                    </div>
                    <div className='para_part'>
                        <p>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
                    </div>
                </div>
                <div className='button_para_1'>
                    Get Started
                    <img src={arrow} alt='arrow'/>
                </div>
            </div>
        </div>
    )
}
export default Image