import React from 'react'

function Heading() {
    return (
        <div className="header-bar">
            <div className="search">
                <h3>Работа найдется для каждого</h3>
                <input placeholder="Профессия, должность или компания" />
                <a href="">Я ищу сотрудника</a>
            </div>
        </div>
    )
}

export default Heading