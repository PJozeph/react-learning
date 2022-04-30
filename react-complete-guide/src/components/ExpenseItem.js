import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import { useState } from 'react'
import Card from './Card'


const  ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('bar')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <div className='expense-item__title'>{title}</div>
                <div className='expense-item__price' >{props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;