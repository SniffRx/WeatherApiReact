import React from 'react'
import PropTypes from 'prop-types'
import HeaderItem from './HeaderItem'

const styles = {ul: {listStyle: 'none',margin: 0,padding: 0}}

function Header(props) {
    return(
        <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
                return <HeaderItem todo={todo} key={todo.id} index={index}  onChange={props.onToggle}/>
            })}
        </ul>
    )
}

Header.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default Header