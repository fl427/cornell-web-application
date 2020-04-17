import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import DiseaseList from '../components/DiseaseList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

const UserDiseases = () => {
  const auth = useContext(AuthContext);
  const [loadedDiseases, setLoadedDiseases] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = auth.userId;
  
  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/diseases/user/${userId}`
        );
        setLoadedDiseases(responseData.diseases);
      } catch (err) {}
    };
    fetchDiseases();
  }, [sendRequest, userId]);

  const diseaseDeletedHandler = deletedDiseaseId => {
    setLoadedDiseases(prevDiseases =>
      prevDiseases.filter(disease => disease.id !== deletedDiseaseId)
    );
  };

  return (    
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedDiseases && (
        <DiseaseList items={loadedDiseases} onDeleteDisease={diseaseDeletedHandler} />
      )}
    </React.Fragment>
  );
};

export default UserDiseases;
