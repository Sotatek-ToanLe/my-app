import React from "react";
import Header from "../layout/header";
const AppTemplate: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default AppTemplate;
