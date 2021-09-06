const reducer = (state,action)=> {
    switch (action.type) {
        case 'SAVE_TOKEN':
            return{
                ...state,
                token: action.payload.response.accessToken,
                userid: action.payload.response.userID
            };

        case 'SAVE_PAGES':
              return{
                ...state,
                pages: action.payload.data, 
            };
            case 'SAVE_POSTS':
                console.log('si estoy guardando los posts')
                 return{
                     ...state,
                     posts: action.payload.data, 
                 };
        default:
            return state;
    }
}

export default reducer;
