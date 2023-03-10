/**
 * Redux Action
 * 로그인 인증 관련
 * Action 발생 시 state 수정
 */
// 초기값
export const initialState = {
    isLogin: false
};

// Action
// 로그인 여부
export const loginCheck = (data) => {
    return {
        type: 'LOGIN_CHECK',
        data
    }
}

// (이전 state, action) ==> 다음 state
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_CHECK':
            return {
                ...state, // initialState
                isLogin: action.data
            }
        default: {
            return {...state}
        }
    }
}

export default authReducer;