import react,{Component} from "react";
import './Footer.css';


class Footer extends Component{
    constructor(props){
        super(props);
        this.state={
            menus:[
                {name:"home",label:"Home"},
                {name:"placements",label:"Placements"},
                {name:"corporatetraining",label:"Corporate Training"},
                {name:"contactus",label:"Contact Us"}
          

            ],
            items:[
                {name:"UI Development Course",label:"UI Development Course"},
                {name:"Angular JS Course",label:"Angular JS Course"},
                {name:"React JS Course",label:"React JS Course"},
                {name:"Digital Marketing Course",label:"Digital Marketing Course"},
                {name:"Python Course",label:"Python Course"}

            ]
        }
    }
    render(){
        return(
            <div>
                <header className="footer">
                    <div classNmae="div1">
                    <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="logo"/>
                    <p>AchieversIT - Provides a wide group <br/>of opportunities for freshers and <br/>Experienced candidate who can <br/>
                    develop their skills and build their <br/>career opportunities across multiple<br/> Companies.</p>
                    </div>
                    <div>
                        <h2 style={{paddingTop: "50px"}}>COMPANY</h2>
                    <nav>
                        <ul>
                            {this.state.menus.map(menu=>(
                                <li>{menu.label}</li>
                            ))
                           
                            }
                        </ul>
                    </nav>
                    </div>
                    <div>
                    <h2 style={{paddingTop: "50px"}}>TRENDING COURSES</h2>
                    <nav>
                        <ul>
                            {this.state.items.map(item=>(
                                <li>{item.label}</li>
                            ))
                           
                            }
                        </ul>
                    </nav>
                    </div>
                    <div>
                        <h2 style={{paddingTop: "50px"}}>
                        CONTACT INFO
                    #63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore, India - 560029
                    <br/>India : +91 8431-040-457
                    info@achieversit.com
                        </h2>
               
                    </div>
                    
                </header>
    
            </div>
        )

    }
}


export {Footer}