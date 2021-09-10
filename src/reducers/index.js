const reducer = (state,action)=> {
    switch (action.type) {
        case 'SAVE_CLIENT_TOKEN':
            return{
                ...state,
                token: action.payload.access_token,
            };
        case 'SAVE_PAGES':
              return{
                ...state,
                pages: action.payload.data, 
            };
            case 'SAVE_APP_TOKEN':
                return{
                  ...state,
                  pages: action.payload.data, 
              };
            case 'SAVE_POSTS':
                console.log('si estoy guardando los posts de FB')
                 return{
                     ...state,
                     facebook_posts: action.payload.data, 
                 };
                 case 'SAVE_IG_POSTS':
                     return{
                         ...state,
                         ig_posts:[...state.ig_posts,action.payload ], 
                     };
        default:
            return state;
    }
}

export default reducer;
