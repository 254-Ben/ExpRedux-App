import expenseReducer from '../../reducers/expense';
import expenses from '../fixtures/expenses';

test('should set the default state', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-13',
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const trip = {
        id: '5',
        description: 'Amboseli visit',
        note: 'great',
        createdAt: 9700,
        amount: 15000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: trip
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, trip]);
});

test('should edit an expense', () => {
    const description = 'visit new york'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state[2].description).toBe(description);
});

test('should edit an expense if id not found', () => {
    const note = 'lively'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-13',
        updates: {
            note
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});