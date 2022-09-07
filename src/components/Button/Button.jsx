import './Button.scss'

function Button(props) {
    return (
        <button 
            className="Button"
            style={{backgroundColor: `${props.bckColor}`}}
        >
            {props.children}
        </button>
    )
}

export default Button