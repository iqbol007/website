import { Reducer } from "react"
import { Ipost, IpostActions, PostsActions } from "../../actions/Posts/interface"

export interface IinitialPostsState {
    posts: Ipost[]
    postById: Ipost | null
    loading: boolean
    error: Error | string | null
}
const initialPostsState: IinitialPostsState = {
    posts: [], postById: null, loading: false, error: null
}
export const postsReducer: Reducer<IinitialPostsState, IpostActions> = (state = initialPostsState, action: IpostActions) => {
    switch (action.type) {
        case PostsActions.GET_ALL_POSTS_REQUEST:
            return { ...state, loading: true }
        case PostsActions.GET_ALL_POSTS_SUCCESS:
            return { ...state, posts: [...action.payload.posts], loading: false }
        case PostsActions.GET_ALL_POSTS_FAILURE:
            return { ...state, error: action.payload.error, loading: false }
        case PostsActions.GET_POST_BY_ID_REQUEST:
            return state
        case PostsActions.GET_POST_BY_ID_SUCCESS:
            return state
        case PostsActions.GET_POST_BY_ID_FAILURE:
            return state
        case PostsActions.CREATE_POST_REQUEST:
            return { ...state, loading: true }
        case PostsActions.CREATE_POST_SUCCESS:
            return { ...state, posts: [{ ...action.payload.post }, ...state.posts] }
        case PostsActions.CREATE_POST_FAILURE:
            return { ...state, loading: false }
        case PostsActions.UPDATE_POST_REQUEST:
            return state
        case PostsActions.UPDATE_POST_SUCCESS:
            return state
        case PostsActions.UPDATE_POST_FAILURE:
            return state
        case PostsActions.REMOVE_POST_REQUEST:
            return state
        case PostsActions.REMOVE_POST_SUCCESS:
            return { ...state, posts: [...state.posts.filter(item => item.id != action.payload.id)] }
        case PostsActions.REMOVE_POST_FAILURE:
            return state
        default:
            return state
    }
}