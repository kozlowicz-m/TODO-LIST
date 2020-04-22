import * as React from "react";
import { shallow } from 'enzyme';
import ToDoList from '../ToDoList';
import { IToDoListState } from '../../interfaces/IToDoListState'


const commonProps = {
    id: 2,
    input: "string",
    currentId: 2,
    list: [],
    activeFilter: 'all'
};

describe('<ToDoList />', () => {

    it('renders correctly', () => {
       const wrapper = shallow(<ToDoList {...commonProps}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders button - all', () => {
        const props: IToDoListState = { ...commonProps };
        props.activeFilter = 'all';

        const wrapper = shallow(<ToDoList {...commonProps}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders button - done', () => {
        const props: IToDoListState = { ...commonProps };
        props.activeFilter = 'done';

        const wrapper = shallow(<ToDoList {...commonProps}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders button - active', () => {
        const props: IToDoListState = { ...commonProps };
        props.activeFilter = 'active';

        const wrapper = shallow(<ToDoList {...commonProps}/>);
        expect(wrapper).toMatchSnapshot();
    });

});


