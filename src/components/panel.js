import React from 'react';
import '../styles/panel.css';

const Panel = ({nameSound}) => (
    <div className="panel mt-3 px-4"><h6>LAST SOUND: {nameSound}</h6></div>
);

export default Panel;
