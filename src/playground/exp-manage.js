/*states to create
///expenses::filters
*/
import { createStore,combineReducers } from 'redux';
import uuid from 'uuid';

// const getVisibleExpenses = (expenses,filters) => {
//     return expenses.filter((expense) => {
//         const startDateMatch = typeof filters.startDate !== 'number' || expense.createAt >= filters.startDate;
//         const endDateMatch = typeof filters.endDate !== 'number' || expense.createAt <= filters.endDate;
//         const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());

//         return startDateMatch && endDateMatch && textMatch;
//     })
// };
//store creation

// store.subscribe(() => {
//     console.log(store.getState());
// });

// const expenseOne = store.dispatch(addExpense({
//     description: 'vacation',
//     amount: 500
// }))

// const expenseTwo = store.dispatch(addExpense({
//     description: 'Coffee',amount: 600
// }))

// const expenseThree = store.dispatch(addExpense('vehicle'))

// const expenseFour = store.dispatch(addExpense({}));

// store.dispatch(removeExpense({ id: expenseThree.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id,{
//     description: 'tea'
// }))

// store.dispatch(setText('hello'))
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(5000));
// store.dispatch(setEndDate(3000));