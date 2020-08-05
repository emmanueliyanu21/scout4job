export const createCover = (cover) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({ type: 'CREATE_COVER', cover });
    }
}