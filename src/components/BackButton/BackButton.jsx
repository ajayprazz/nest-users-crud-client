import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

const BackButton = () => {
  const history = useHistory();

  return <Button onClick={() => history.goBack()}>Back</Button>;
};

export default BackButton;
