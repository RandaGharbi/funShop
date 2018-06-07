import React from "react";
import { Image, Grid, Modal, Header, Button, Icon } from "semantic-ui-react";

const categories = [
  {
    id: 1,
    title: "Déco",
    picture:
      "https://i.pinimg.com/564x/d3/24/8b/d3248bcd805555e2c7e33ff6d2f1d9f1.jpg"
  },
  {
    id: 2,
    title: "Photographie",
    picture:
      "https://i.pinimg.com/564x/44/ce/2c/44ce2cfa6267fde44790205135a78051.jpg"
  },
  {
    id: 3,
    title: "Architecture",
    picture:
      "https://i.pinimg.com/564x/b8/ea/d7/b8ead7c1ac5b77abc452ab5b984f6d02.jpg"
  },
  {
    id: 4,
    title: "Voyage",
    picture:
      "https://i.pinimg.com/564x/af/91/7e/af917e548a2441aec482478a3f3f0815.jpg"
  },
  {
    id: 6,
    title: "Look Casual femme",
    picture:
      "https://i.pinimg.com/564x/37/57/03/375703ec583817543db6b08d7bd25051.jpg"
  },
  {
    id: 7,
    title: "Chaussures femme",
    picture:
      "https://i.pinimg.com/564x/30/a7/c7/30a7c7fed5b5dc11f9e1399880d79a94.jpg"
  },
  {
    id: 8,
    title: "Tatouage",
    picture:
      "https://i.pinimg.com/564x/de/5c/ef/de5cef72b8cdb62c909f7d32ce4f0cf0.jpg"
  },
  {
    id: 9,
    title: "Humour",
    picture:
      "https://i.pinimg.com/564x/0e/67/42/0e6742338111a9e4d922b9850c17fa7f.jpg"
  },
  {
    id: 10,
    title: "Sport",
    picture:
      "https://i.pinimg.com/564x/1a/d7/19/1ad719b0c690a3c3dca221c7df7d3dc1.jpg"
  },
  {
    id: 11,
    title: "Art",
    picture:
      "https://i.pinimg.com/564x/9d/21/05/9d2105135cf89b592bfae79ced194240.jpg"
  }
];

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      categories:[]
     }
 }
 
  handleSelectCategory = (event) => {
    if (this.state.categories) {
        var categoryArr = [...this.state.categories]
    } else {
        var categoryArr = [];
    }
    categoryArr.push(event.target.value)        
    this.setState({
      categories: categoryArr
    })
} 

  handleUpdateCount = () =>
  this.setState({
    count: this.state.count + 1
  });
  render() {
    const nbClick = this.state.count;
    console.log("nbClick", nbClick);
    const isEnabled = nbClick >= 5;
    return (
      <Modal
        defaultOpen
        style={{
          top: "34rem",
          left: "30rem",
          position: "relative",
          width: "75rem",
          height: "53rem"
        }}
      >
        <Header
          content="Dites-nous ce qui vous intéresse
          Choisissez-en 5 (ou plus !) pour découvrir de nouvelles idées."
        />
        <Grid>
          {categories.map((categories, item, check) =>(
            <div
            style={{
                width: "20%",
                height: "20%",
                top: "32px",
                position: "relative"
              }}>
            <div>
              <Image src={categories.picture} label={categories.title} />
              </div>
              <div key={check} >
              <input
                onClick={this.handleUpdateCount}
                type="checkbox"
                onChange={this.handleSelectCategory}
                name={item} 
                value={item}
              />
            </div>
            </div>
          ))}
          <Button
            onClick={isEnabled}
            className={isEnabled ? "red" : "gray"}
            style={{
              position: "relative",
              left: "35rem",
              color: "white",
              width: "28rem"
            }}
          >
            Términer
          </Button>
        </Grid>
      </Modal>
    );
  }
}
export default Categories;
