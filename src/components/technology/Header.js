import React from 'react';

const Header = ({technologyName, percent}) => (
    <div className="technology__header">
        <h2 className="technology__title">{technologyName} {percent}%</h2>
        <div className="technology__progress">
            <div
                className="technology__progress-inner"
                style={{
                    width: `${percent}%`
                }}
            ></div>
        </div>
    </div>
);

export default Header;