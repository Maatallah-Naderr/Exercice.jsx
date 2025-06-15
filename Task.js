import { useState } from "react"
import "./index.css"
export default function Task (){

    return (
        <div>
    <TextExpender >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum
    optio numquam dicta iusto at mollitia ad quasi debitis, explicabo nam
    recusandae repellat, non ab cum facilis. Qui, velit numquam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum
    optio numquam dicta iusto at mollitia ad quasi debitis, explicabo nam
    recusandae repellat, non ab cum facilis. Qui, velit numquam!
    </TextExpender>
    <TextExpender  buttonColor="purple"  collapseNumwords={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum
    optio numquam dicta iusto at mollitia ad quasi debitis, explicabo nam
    recusandae repellat, non ab cum facilis. Qui, velit numquam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum
    optio numquam dicta iusto at mollitia ad quasi debitis, explicabo nam
    recusandae repellat, non ab cum facilis. Qui, velit numquam!
    </TextExpender>

        <TextExpender
        collapseNumwords={20} 
        expanderButtonText="Show text" 
        collapseButtonText= "Collapse Text" 
        buttonColor='#ff6622'
       
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum
    optio numquam dicta iusto at mollitia ad quasi debitis, explicabo nam
    recusandae repellat, non ab cum facilis. Qui, velit numquam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum
    optio numquam dicta iusto at mollitia ad quasi debitis, explicabo nam
    recusandae repellat, non ab cum facilis. Qui, velit numquam!
    </TextExpender>


        <TextExpender className="textStyle"  expanded = {true} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum
    optio numquam dicta iusto at mollitia ad quasi debitis, explicabo nam
    recusandae repellat, non ab cum facilis. Qui, velit numquam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum
    optio numquam dicta iusto at mollitia ad quasi debitis, explicabo nam
    recusandae repellat, non ab cum facilis. Qui, velit numquam!
    </TextExpender>

    </div>

    )
    
}


function TextExpender (    { children,
        collapseNumwords = 10  , expanderButtonText = "show more" , 
        collapseButtonText ="show less" ,
        buttonColor = "blue"
         ,className,
          expanded = false, 
    }) {
       const [isexpanded ,setIsExpanded] = useState(expanded);

       const displayText= isexpanded ? children : children.split(" ").slice(0 , collapseNumwords).join(" ")+"..." ;
       const btnStyle = {
        cursor : "pointer" ,
        marginLeft : "6px" ,
        color : buttonColor ,

       }
        return (
            <div className={className}>
    <span>{displayText}</span>
    <button style={btnStyle}  onClick={()=>setIsExpanded((isexpanded)=>!isexpanded)}>{isexpanded? collapseButtonText : expanderButtonText }</button>

            </div>
        )
}