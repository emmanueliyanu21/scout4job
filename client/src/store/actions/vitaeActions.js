export const createVitae = (vitae) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({ type: 'CREATE_VITAE', vitae });
    }
}