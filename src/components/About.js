import React  from 'react'

function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // });
    let myStyle = {
        color: props.mode === "dark"?"white":"#1e272e",
        backgroundColor: props.mode === "dark"?'#1e272e':'white'
    }

    // const [btnText, setBtnText] = useState("Enable Dark Mode")
    // const enbDark = ()=>{
    //     if (myStyle.color === "black") {
    //         setMyStyle({color: "white",
    //         backgroundColor: "black"
    //     })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({color: "black",
    //         backgroundColor: "white"})
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
    return (
        <div className="container" style={myStyle}>
            <h2 className= 'my-3' style= {{color: props.mode === "dark"?"white":"#1e272e"}}>About Us</h2>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   Analyze Your Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   Free to Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                TextUtils is a set of utility functions that perform operations on string objects.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It shuits to count characters in facebook blog, books, excel documents, essays, etc.
                </div>
                </div>
             </div>
            </div>
        </div>
    )
}

export default About
