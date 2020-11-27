export enum PostsActions {
    GET_ALL_POSTS_REQUEST = 'GET_ALL_POSTS_REQUEST',
    GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS',
    GET_ALL_POSTS_FAILURE = 'GET_ALL_POSTS_FAILURE',
    UPDATE_POST_REQUEST = 'GET_ALL_POSTS_REQUEST',
    UPDATE_POST_SUCCESS = 'GET_ALL_POSTS_SUCCESS',
    UPDATE_POST_FAILURE = 'GET_ALL_POSTS_FAILURE',
    REMOVE_POST_REQUEST = 'GET_ALL_POSTS_REQUEST',
    REMOVE_POST_SUCCESS = 'GET_ALL_POSTS_SUCCESS',
    REMOVE_POST_FAILURE = 'GET_ALL_POSTS_FAILURE',
    GET_POST_BY_ID_REQUEST = 'GET_ALL_POSTS_REQUEST',
    GET_POST_BY_ID_SUCCESS = 'GET_ALL_POSTS_SUCCESS',
    GET_POST_BY_ID_FAILURE = 'GET_ALL_POSTS_FAILURE',
}
export interface Ipost {
    content: string
    owner_id: string | number
    post_id: string | number
    media_type: string
    media: string
}
export interface IgetAllPostsRequest { type: PostsActions.GET_ALL_POSTS_REQUEST }
export interface IgetAllPostsSuccess { type: PostsActions.GET_ALL_POSTS_SUCCESS, payload: { posts: Ipost[] } }
export interface IgetAllPostsFailure { type: PostsActions.GET_ALL_POSTS_FAILURE, payload: Error | string | null }

export interface IgetPostByIdRequest { type: PostsActions.GET_POST_BY_ID_REQUEST }
export interface IgetPostByIdSuccess { type: PostsActions.GET_POST_BY_ID_SUCCESS, payload: { post: Ipost } }
export interface IgetPostByIdFailure { type: PostsActions.GET_POST_BY_ID_FAILURE, payload: Error | string | null }

export interface IupdatePostRequest { type: PostsActions.UPDATE_POST_REQUEST }
export interface IupdatePostSuccess { type: PostsActions.UPDATE_POST_SUCCESS, payload: { post: Ipost } }
export interface IupdatePostFailure { type: PostsActions.UPDATE_POST_FAILURE, payload: Error | string | null }

export interface IremovePostRequest { type: PostsActions.REMOVE_POST_REQUEST }
export interface IremovePostSuccess { type: PostsActions.REMOVE_POST_SUCCESS, payload: { post: Ipost } }
export interface IremovePostFailure { type: PostsActions.REMOVE_POST_FAILURE, payload: Error | string | null }

export type IpostActions =
    IgetAllPostsRequest |
    IgetAllPostsSuccess |
    IgetAllPostsFailure |
    IgetPostByIdRequest |
    IgetPostByIdSuccess |
    IgetPostByIdFailure |
    IupdatePostRequest |
    IupdatePostSuccess |
    IupdatePostFailure |
    IremovePostRequest |
    IremovePostSuccess |
    IremovePostFailure