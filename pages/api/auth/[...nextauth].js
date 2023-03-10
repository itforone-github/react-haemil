/**
 * NextAuth
 * [...nextauth].js 경로 변경 X
 */
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Api from "@api/index";

export default NextAuth({
    providers: [
        Credentials({
            id: "id-password-credential",
            type: "credentials",
            // credentials: {
            //     id: {type: "text", placeholder: "아이디"},
            //     password: {type: "password", placeholder: "비밀번호"}
            // },
            async authorize(credentials, _req) {
                const {id, password} = credentials;
                const user = await Api.post("/api/signIn", {
                    id: id,
                    password: password,
                });
                if (user.data.result) return {id: id}
                return null;
            }
        })
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        // 로그인 세션 처리
        session: async ({session, token}) => {
            session.user.id = token.sub; // 입력 아이디 (sub: 고유식별자)
            return Promise.resolve(session);
        },
    },
})