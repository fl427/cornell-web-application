import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import DiseaseItem from './DiseaseItem';
import Button from '../../shared/components/FormElements/Button';
import './DiseaseList.css';

const DiseaseList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No diseases found. Maybe create one?</h2>
          <Button to="/diseases/new">Share disease</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="disease-list">
      {props.items.map(disease => (
        <DiseaseItem
          key={disease.id}
          id={disease.id}
          image={disease.image}
          title={disease.title}
          description={disease.description}
          creatorId={disease.creator}
          onDelete={props.onDeletedisease}
        />
      ))}
    </ul>
  );
};

export default DiseaseList;
