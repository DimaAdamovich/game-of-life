import React from "react";



export const About: React.FC = () => {
    return <div className="jumbotron">
        <div className="container">
                <h1 className="display-4">Game of Life</h1>
            <p className="lead"> Версия приложения 1.0.1 &nbsp;
                <a href="https://ru.wikipedia.org/wiki/%D0%98%D0%B3%D1%80%D0%B0_%C2%AB%D0%96%D0%B8%D0%B7%D0%BD%D1%8C%C2%BB"
                   className='badge badge-secondary'
                   target="_blank"
                >Read more</a> </p>
        </div>
    </div>
}