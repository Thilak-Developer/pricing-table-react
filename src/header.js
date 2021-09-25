import './header.css'
import head from './data';
function Header(){
    return(
        <div className="header">
            <h1>{head.name}</h1>
            <p>{head.text}</p>
        </div>
    )
}

export default Header;