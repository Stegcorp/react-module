import React from 'react';

const Car = ({car}) => {
    const {id,model,year,price}=car
    return (
        <div>
            {id}--{model}--{price}--{year}
        </div>
    );
};

export {Car};