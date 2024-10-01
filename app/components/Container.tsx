import React from "react";

type ContainerProps = {
    children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className="px-4 md:px-10 lg:px-20 bg-background">{children}</div>;
};

export default Container;
