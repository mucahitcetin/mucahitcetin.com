import React from "react";

type ContainerProps = {
    children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className="px-2 md:px-6 lg:px-10 bg-background">{children}</div>;
};

export default Container;
