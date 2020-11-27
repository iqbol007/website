import { Reducer } from "react"
import { Ipost, IpostActions, PostsActions } from "../../actions/Posts/interface"

export interface IinitialPostsState {
    posts: Ipost[] | null
    postById: Ipost | null
    loading: boolean
    error: Error | string | null
}
const initialPostsState: IinitialPostsState = {
    posts: null, postById: null, loading: false, error: null
}
export const postsReducer: Reducer<IinitialPostsState, IpostActions> = (state = initialPostsState, action: IpostActions) => {
    switch (action.type) {
        case PostsActions.GET_ALL_POSTS_REQUEST:
            return state
        case PostsActions.GET_ALL_POSTS_SUCCESS:
            return { ...state, posts: [...action.payload.posts] }
        case PostsActions.GET_ALL_POSTS_FAILURE:
            return state
        case PostsActions.GET_POST_BY_ID_REQUEST:
            return state
        case PostsActions.GET_POST_BY_ID_SUCCESS:
            return state
        case PostsActions.GET_POST_BY_ID_FAILURE:
            return state
        case PostsActions.CREATE_POST_REQUEST:
            return state
        case PostsActions.CREATE_POST_SUCCESS:
            return state
        case PostsActions.CREATE_POST_FAILURE:
            return state
        case PostsActions.UPDATE_POST_REQUEST:
            return state
        case PostsActions.UPDATE_POST_SUCCESS:
            return state
        case PostsActions.UPDATE_POST_FAILURE:
            return state
        case PostsActions.REMOVE_POST_REQUEST:
            return state
        case PostsActions.REMOVE_POST_SUCCESS:
            return state
        case PostsActions.REMOVE_POST_FAILURE:
            return state
        default:
            return state
    }
}