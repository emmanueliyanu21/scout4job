const initState = {
    covers:
    {
        'firstName': 'Emmanuel',
        'lastName': 'Oladejo',
    }

}

const coverReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_COVER':
            console.log('created cover', action.cover)
    };
    return state
}

export default coverReducer