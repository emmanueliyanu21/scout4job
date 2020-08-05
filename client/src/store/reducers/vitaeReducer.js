const initState = {
    vitaes:
    {
        'firstName': 'Emmanuel',
        'lastName': 'Oladejo',
    }

}

const vitaeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_VITAE':
            console.log('created vitae', action.vitae)
    }
    return state
}

export default vitaeReducer