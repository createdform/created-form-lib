import React from "react";

export type TestProps = {
    title: string;
}
const TitleField = ({title}: TestProps) => {
    return <h1>
        {title}
    </h1>;
};
export default TitleField;
