import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import Modal from "../../shared/components/UIElements/Modal";
import { AuthContext } from "../../shared/context/auth-context";

import "./DiseaseItem.css";

const DiseaseItem = props => {
  const auth = useContext(AuthContext);

  const [showDiseaseDetail, setShowDiseaseDetail] = useState(false);

  const openDiseaseHandler = () => setShowDiseaseDetail(true);

  const closeDiseaseHandler = () => setShowDiseaseDetail(false);

  return (
    <React.Fragment>
      <Modal
        show={showDiseaseDetail}
        onCancel={closeDiseaseHandler}
        header={props.title}
        contentClass="disease-item__modal-content"
        footerClass="disease-item__modal-actions"
        footer={<Button onClick={closeDiseaseHandler}>Close</Button>}
      >
        <div className="map-container">
          <h2>THE DISEASE DETAIL</h2>
        </div>
      </Modal>
      

      <li className="disease-item">
        <Card className="disease-item__content">
          <div className="disease-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="disease-item__info">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
          <div className="disease-item__actions">
            <Button inverse onClick={openDiseaseHandler}>VIEW</Button>

            {auth.isLoggedIn && <Button to={`/diseases/${props.id}`}>EDIT</Button>}
              
            {auth.isLoggedIn && <Button danger>DELETE</Button>}
            

          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default DiseaseItem;
