import React, { FunctionComponent } from "react";

interface FeatureCardProps {
    title: string,
    description: string,
    color: string
}

const FeatureCard: FunctionComponent<FeatureCardProps> = ({ title, description, color }): JSX.Element => {
    return (
        <div className={`flex flex-col m-5 bg-${color}-500 rounded-md p-5`}>
            <h2> { title } </h2>
            <p>
                { description }
            </p>
        </div>
    )
}

export default FeatureCard;