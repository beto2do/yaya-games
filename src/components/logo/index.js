import React from 'react';
import logoImg from '../../assets/logo.png';
import Aux from '../hoc/aux'

const logo = (props) => (
    <Aux>
        <img src={logoImg} atl="Yaya Games" width="40px"/>
    </Aux>
);

export default logo;