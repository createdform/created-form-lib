import React from "react";

export type TestProps = {
    title: string;
}
const TitleField = ({title = "hello"}: TestProps) => {
    return <h1 className="text-red-500">
        {title}
    </h1>;
};
export default TitleField;
