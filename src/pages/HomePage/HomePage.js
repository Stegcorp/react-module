import React from 'react';
import css from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={css.home}>
            <div >Welcome</div>
            <img src={'https://i.gifer.com/7QUb.gif'}/>
        </div>
    );
};

export {HomePage};