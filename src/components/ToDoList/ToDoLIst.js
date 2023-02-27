import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoLIst = () => {
    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {/* <!-- todo --> */}
            <ToDoItem></ToDoItem>


        </div>
    );
};

export default ToDoLIst;