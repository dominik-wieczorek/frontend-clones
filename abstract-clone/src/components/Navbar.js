import './Navbar.css';
import {ReactComponent as AbstractLogo} from '../assets/abstract_logo.svg';
import LinkButton from "./LinkButton";

function Navbar() {
    return (
        <header className="navbar">
            <div className="wrapper">
                <div className="logo_wrapper"><AbstractLogo className="logo"></AbstractLogo>
                    <a className="helpcenter" href="#">Help Center</a>
                    <LinkButton class="submit_button" text={"Submit a request"}></LinkButton>
                </div>
            </div>
        </header>
    )

}

export default Navbar