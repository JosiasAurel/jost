import React, { FunctionComponent } from "react";

interface FeatureCardProps {
    title: string,
    description: string,
    color: string,
    rotate: string
}

const FeatureCard: FunctionComponent<FeatureCardProps> = ({ title, description, color, rotate }): JSX.Element => {
    return (
        <div style={{color: `${color}`}} className={`flex flex-col m-5 bg-${color}-500 rounded-md p-9 h-60 max-w-xs shadow-md rotate-${rotate}`}>
            <h2 className="text-white font-bold text-2xl"> { title } </h2>
            <p className="text-white">
                { description }
            </p>
        </div>
    )
}

export default FeatureCard;