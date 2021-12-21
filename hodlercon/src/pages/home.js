import React from "react";
import logo from '../images/logo.png';
import discordIcon from '../images/discord-mascot.png';

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <>
        <img src={logo} alt="logo"/>
        <h2>
            When?
        </h2>
        <p>
            June 17 - 26 2022
        </p>
        <h2>
            Where?
        </h2>
        <p>
            The Outrigger Reef Hotel in Honolulu, Hawaii
        </p>

        <a href="https://discord.gg/7dW8e3wqZC">
            <img className={"small-img"} src={discordIcon}>
            
            </img>
        </a>
        </>;
    }
}