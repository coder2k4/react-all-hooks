import React from "react";

export const counterReducer = (state, action) => {

    switch (action.type) {
        case 'inc':
            return {...state, count: state.count+1}
        case 'dec':
            return {...state, count: state.count-1}
        default:
            return state
    }
    
}
