import React from "react";
import { Image, Header, Input, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import UpdateModal from "../UpdateModal/Modal";
import LinkProfile from '../LinkProfile/LinkProfile';
class Profile extends React.Component {
  render() {
    return (
      <div>
      <Header as="h3" block>
        <input
          autocomplete="off"
          aria-autocomplete="false"
          maxlength="500"
          icon="search"
          placeholder="Search..."
          style={{
            backgroundColor: "#E1E6FA",
            border: "0",
            borderRadius: "4px",
            boxShadow: "none",
            boxSizing: "borderBox",
            color: "#555",
            fontSize: "16px",
            fontWeight: "600",
            height: "4rem",
            lineHeight: "20px",
            outline: "none",
            padding: " 0 40px 0 52px",
            width: "98rem",
            position: "relative"
          }}
        />
        <Menu.Item
          content="Acceuil"
          as={Link}
          to="/Acceuil"
          icon="home"
          style={{ color: "gray", left: "5rem", position: "relative" }}
        />
        <Menu.Item
          content="Profile"
          as={Link}
          to="/randa"
          icon="user"
          style={{ color: "gray", left: "17rem", position: "relative" }}
        />
      </Header>
      <div>
      <UpdateModal />
      </div>
      <div>
        <h1 style={{fontWeight: 'bold', fontSize: '4rem', marginLeft: '15rem'}}>Gharbi Randa </h1>
        </div>
        <div>
        <Icon name="upload" style={{marginLeft: '15rem', top: '1rem', position: 'relative'}}/>
        <h4 style={{ marginLeft: '17rem', top: '-2rem', position: 'relative'}}>0 abonnés 5 abonnements</h4>
        </div>
        <LinkProfile />
      </div>
    );
  }
}
export default Profile;
