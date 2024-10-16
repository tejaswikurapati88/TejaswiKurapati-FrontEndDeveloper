import './index.css'

const NavBar=()=>{
    return (
        <div className='navContainer'>
            <div className='dis-none-small'></div>
                <img className='nav-img'
                 src='https://res.cloudinary.com/dkvptcm7q/image/upload/v1729060871/Container_h6dvr7.png'
                 alt='nav-img' 
                />
                <img className='nax-bars-img'
                 src='https://res.cloudinary.com/dkvptcm7q/image/upload/v1729060942/Container_1_bcwzle.png'
                 alt='bars'
                />
                <div className='nav-mid-cont'>
                    <p className='nav-cont-p'>Features</p>
                    <p className='nav-cont-p'>Why Us</p>
                    <p className='nav-cont-p'>Tokenomics</p>
                    <p className='nav-cont-p'>Roadmap</p>
                </div>
                <div className='login-cont'>
                    <button className='login-btn'>Log in</button>
                    <button className='while-butn' >Whitepaper</button>
                </div>
            </div>
    )
}

export default NavBar