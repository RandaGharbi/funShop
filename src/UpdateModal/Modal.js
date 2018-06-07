import React from "react";
import {
  Modal,
  Icon,
  Input,
  Form,
  TextArea,
  Select,
  Button
} from "semantic-ui-react";
import categoryOptions from "../Common/Common";
class UpdateModal extends React.Component {
  render() {
    return (
      <Modal
        style={{
          height: "43rem",
          marginTop: "17rem",
          width: "38rem",
          marginLeft: "48rem"
        }}
        trigger={
          <Icon
            name="pencil alternate"
            style={{ fontSize: "2em", marginTop: "6rem", marginLeft: "16rem" }}
          />
        }
        centered={false}
      >
        <Modal.Header>Modifier votre tableau</Modal.Header>
        <Modal.Content image>
          <Form>
            <Form.Field
              control={Input}
              label="Nom"
              placeholder="Opinion"
              style={{ width: "30rem" }}
            />
            <Form.Field
              control={TextArea}
              autoHeight
              label="Description"
              placeholder="Description"
            />
            <Form.Field
              control={Select}
              label="Catégories"
              placeholder="Select your category"
              options={categoryOptions}
              style={{ width: "30rem" }}
            />
            <div style={{ marginTop: "15rem", marginLeft: "19rem" }}>
              <Button positive>Enregistrer</Button>
              <Button negative>Annuler</Button>
            </div>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}
export default UpdateModal;
