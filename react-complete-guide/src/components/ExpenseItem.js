import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import { useState } from 'react'


const  ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('bar')
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <div className='expense-item__title'>{title}</div>
                <div className='expense-item__price' >{props.amount}</div>
            </div>
            <button onClick={clickHandler} >Change Title</button>
        </div>
    )
}

export default ExpenseItem;