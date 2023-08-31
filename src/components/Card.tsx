import {ReactNode} from 'react'
import "./card.css";

const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvr2AtD6BT26TvEKYTHcFM1hsY4ztMy6I2UbugjSNMHBQYPL6Ak6K48lhuCoxrmXyMq4&usqp=CAU"

export interface CardProps {
    /**
     * Title contents
     */
    title: string;
    /**
    * SubTitle contents
    */
    subTitle: string;
    /**
    * Font-Family contents
    */
    font?: "Arial" | "Helvetica" | "SantSerif"
    /**
    * Image contents - SVG
    */
    img?: string;
    /**
    * Children contents
    */
    children: ReactNode
  }


/**
 * Primary UI component for user interaction
 */
export const Card = ({
    title = "Title",
    subTitle = "subTitle",
    font = "Arial",
    img= "",
    children=""
  }: CardProps) => {
    return (
        <div className="cardContainer" style={{fontFamily: font}}>
            <div className={`cardHeader ${children ? "body" : "inbody"}`}>
                <div className={`cardText ${!img ? "complete" : "incomplete"}`}>
                    <h1>{title}</h1>
                    <h3>{ subTitle }</h3>
                </div>
                <div className={`cardImage ${ !img && 'disabled' }`}>
                    <img src={img} />
                </div>
            </div>
            <div className={`cardBody ${ !children && 'disabled' }`}>
                {children}
            </div>
        </div>
    );
  };
  
  export default Card;