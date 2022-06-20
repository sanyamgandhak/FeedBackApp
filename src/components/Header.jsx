import PropTypes from 'prop-types'

function Header({name,bgColor,textColor}){

    const headerStyles={
        backgroundColor:bgColor,
        color:textColor
    }
    return  (
        <header style={headerStyles}>
            <div className="container"> 
            <h2>Hello {name}</h2>
            </div>
        </header>
    )
}

Header.defaultProps={
    text:"FeedBack UI",
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95'
}

Header.propTypes={
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string
}


export default Header