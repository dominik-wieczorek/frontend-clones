import './Navbar.css';
import { ReactComponent as AbstractLogo } from '../assets/abstract_logo.svg';
import LinkButton from "./LinkButton";

function Navbar() {
    return (
        <header className="navbar">
            <div className="wrapper">
                <div className="logo_wrapper"><AbstractLogo className="logo"></AbstractLogo>
                    <a className="helpcenter" href="#">Help Center</a>
                    <div className="button_wrapper">
                        <LinkButton class="submit_button" text={"Submit a request"}></LinkButton>
                        <LinkButton class="signin_button" text={"Sign in"}></LinkButton>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Navbar