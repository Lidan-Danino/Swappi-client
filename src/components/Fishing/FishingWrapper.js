import React, { useEffect } from 'react';
import Fishing from './Fishing';

const FishingWrapper = () => {
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    setModalShow(true);
  }, []);

  return <Fishing show={modalShow} onHide={() => setModalShow(false)} />;
};

export default FishingWrapper;
