import react,{Component} from "react";
import './Header.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            menus:[
                {name:"home",label:"Home"},
                {name:"about",label:"About"},
                {name:"contact",label:"Contact"},
                {name:"internships",label:"Internships"},
                {name:"reviews",label:"Reviews"},
                {name:"lms",label:"LMS"},
                {name:"e-learning",label:"E-learning"}

            ]
        }
    }
    render(){
        return(
            <div style={{marginBottom:"100px"}}>
                <header className="header">
                    <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="logo"/>
                    <nav>
                        <ul>
                            {this.state.menus.map(menu=>(
                                <li>{menu.label}</li>
                            ))
                           
                            }
                        </ul>
                    </nav>
                </header>
    
            </div>
        )

    }
}


export {Header}