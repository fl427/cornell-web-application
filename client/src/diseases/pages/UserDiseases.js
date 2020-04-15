import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DiseaseList from '../components/DiseaseList';


const DUMMY_DISEASES = [
    {
        id: 'd1',
        title: 'Empire State',
        description: 'One of the famous disease',
        imageUrl: 'https://images.unsplash.com/photo-1561228921-4c89f1218e87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&q=80',
        creator: 'u1'
    },
    {
        id: 'd2',
        title: 'Empire State',
        description: 'One of the famous disease',
        imageUrl: "https://images.unsplash.com/photo-1561228921-4c89f1218e87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&q=80",
        creator: 'u2'
    }
]

const UserDiseases = () => {
  const userId = useParams().uid;
  
  const loadedDiseases = DUMMY_DISEASES.filter(disease => disease.creator === userId);

  return (
    
    <React.Fragment>
      
      <DiseaseList items={loadedDiseases} />
    </React.Fragment>
  );
};

export default UserDiseases;
