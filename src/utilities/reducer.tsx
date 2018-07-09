export const setStateItem = (state: any, item:any) => {
    if (!state || !item)
        return;
    if (!state.all)
        state.all = [];

    if (!state[item.id]) {
        state.all.push(item.id);
    }
    state[item.id] = item;
    return state;
};

export const removeStateItem = (state: any, itemId: any) => {
    if (!state || !itemId)
        return state;

    if (state[itemId]) {
        let itemIndex = state.all.findIndex((i:any) => i === itemId);
        if (itemIndex >= 0)
            state.all.splice(itemIndex, 1);
        delete state[itemId];
    }
    return state;
};

export const updateStateItem = (state:any, item:any) => {
    if (!state || !item)
        return state;

    if (state[item.id]) {
        state[item.id] = {...state[item.id], ...item};
    } else {
        setStateItem(state, item);
    }
    return state;
};
