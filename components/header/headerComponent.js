import './header.css'
import image from '../../assets/Logo.svg'
import searchingimg from '../../assets/Vector.svg'
function Header(){
    return(
        <div className="header">
            <div className="left_inside_header">
                <div className="logo">
                    <img src={image} alt="inferno_logo"/>
                </div>

                <div className="interno">
                    <h1>Interno</h1>
                </div>
            </div>
            <div className="right_inside_header">
                <div className='non_logo_part'>
                    <p>Home </p><p>Pages</p><p>Services</p><p>Project</p><p>Blog</p><p>Contact</p>
                </div>
                <div className='logo_part'>
                    <img src={searchingimg} alt='search logo'/>
                </div>
            </div>

        </div>
    )
}
export default Header























