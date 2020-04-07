import moment from 'moment';
import { setTextFilter, setStartDate, setEndDate } from '../../actions/filters';


test('should generate set text filter with text value', () => {
    const text = 'seattle';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate set text filter with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate set start date action object', () => {
    const action = setStartDate(moment(350));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(350)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(450));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(450)
    });
});

// test('should generate action object for sort by date', () => {});

// test('should generate action object for sort by amount', () => {})