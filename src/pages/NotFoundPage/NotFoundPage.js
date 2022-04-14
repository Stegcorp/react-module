import React from 'react';

import css from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <div className={css.center}>
            <div className={css.not}><b><span className={css.big}>NotFoundPage</span></b></div>
            <img  src={'https://i.gifer.com/origin/b8/b842107e63c67d5674d17e0f576274fa_w200.gif'} width={'400px'}/>
        </div>
    );
};

export  {NotFoundPage}