/**
 * Redux Action
 * Action 발생 시 state 수정
 */
import {createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

// 초기값
export const initialState = {
    isLogin: false,
    sessionId: ""
};

// (이전 state, action) ==> 다음 state
const rootReducer = (state = initialState, action) => {
    if (state === undefined) state = initialState;
    switch (action.type) {
        case "LOGIN":
            return {...state, isLogin: true};
        case "LOGOUT":
            return {...state, isLogin: false};
        case "SESSIONID":
            return {...state, sessionId: action.data};
        default:
            return state;
    }
}

// config 작성
const persistConfig = {
    key: "root", // localStorage key
    storage, // localStorage
    // whitelist: ["auth"], // target reducer name
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Action
// // 로그인 여부
// export const loginCheck = (data) => {
//     return {
//         type: 'LOGIN_CHECK',
//         data
//     }
// }

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);