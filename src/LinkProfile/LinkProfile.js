import React from "react";
import { Image, Menu, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Anime from '../images/Anime.jpg';
class LinkProfile extends React.Component {
  render() {
    return (
      <div >
        <Menu.Item
          content="Épingles"
          as={Link}
          to="/Acceuil"
          style={{ color: "gray", left: "15rem", position: "relative" , fontWeight:"bold", fontSize:"2rem"}}
        />
        <Menu.Item
          content="Tests"
          as={Link}
          to="/randa"
          style={{ color: "gray", left: "17rem", position: "relative" , fontWeight:"bold", fontSize:"2rem"}}
        />
        <Menu.Item
          content="Thèmes"
          as={Link}
          to="/randa"
          style={{ color: "gray", left: "21rem", position: "relative", fontWeight:"bold", fontSize:"2rem" }}
        />
        <div>
        <Button style={{color:"#E1E6FA", width: '20rem', height: '16rem', marginTop: "8rem", marginLeft: "12rem"}}>
        <Icon name='plus circle' style={{color:'red'}}/>
      </Button>
      <span  style={{ color: "gray", left: "-18rem", position: "relative", fontWeight:"bold", fontSize:"2rem", top: '11rem' }}>creer un tableau</span>
        </div>
        <div>
       <Image src={Anime} size='medium' circular  style={{position: 'relative',left: '87rem',bottom: '31rem',height: '21rem'}}/>
       </div>
        </div>
     
    );
  }
}
export default LinkProfile;
