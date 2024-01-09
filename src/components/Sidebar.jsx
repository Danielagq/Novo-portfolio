import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/Daniela.jpg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Daniela Garcia Quintino" />
            <p className="title">Desenvolvedora</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">
               Download curriculo
            </a>
        </aside>
    );
};

export default Sidebar;