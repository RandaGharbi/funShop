import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const Home = () => (
  <Modal defaultOpen style={{top: '34rem',left: '35rem', position: 'relative',width: '75rem',height: '53rem'}}>
    <Header  content='Dites-nous ce qui vous intéresse
        Choisissez-en 5 (ou plus !) pour découvrir de nouvelles idées.' />
    <Modal.Actions>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)
export default Home;
