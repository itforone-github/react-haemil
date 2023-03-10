/**
 * 1.1 로그인
 */
import {useRouter} from "next/router";
import {swalMsg} from "@utils/sweetAlert";
import {signIn} from "next-auth/react";
import {useDispatch} from "react-redux";

const Login = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    // 로그인
    const handleLogin = async (e) => {
        e.preventDefault();
        let id = e.target.id.value;
        let password = e.target.password.value;
        if(id.length == 0) return swalMsg("아이디를 입력해 주세요.");
        if(password.length == 0) return swalMsg("비밀번호를 입력해 주세요.");

        // 로그인 인증
        // [...nextauth].js에 정의된 Provider 호출
        const response = await signIn('id-password-credential', {
            id,
            password,
            redirect: false,
            callbackUrl: "/main" // 로그인 완료 후 이동 페이지
        });
        if(response.ok) {
            dispatch({type: "LOGIN"});
            await router.replace(response.url);
        }
        else {
            await swalMsg("아이디 비밀번호를 확인해 주세요.");
        }
    };

    return (
        <div className="wrap_bg">
            <div className="mb_wrap">
                <div className="box1">
                    <h1><img src="/img/common/logo_w.svg" alt="해밀한의원 원외탕전실"/></h1>

                    <div className="login_form">
                        <form onSubmit={handleLogin}>
                            <div className="form_wrap">
                                <input type="text" name={"id"} placeholder="아이디"/>
                                <input type="password" name={"password"} placeholder="비밀번호"/>
                                <button type={"submit"} className="btn btn_sdw btn_large btn_red">로그인</button>
                            </div>

                            <div className="btn_wrap">
                                <a className="btn btn_sdw btn_white2" onClick={() => router.push("/findPw")}>아이디 비밀번호 찾기</a>
                                <a className="btn btn_sdw btn_black" onClick={() => router.push("/signUp")}>회원 가입</a>
                            </div>

                        </form>
                    </div>
                </div>
                <section className="login_ft">
                    ※ 해밀한의원 원외탕전실에서는 개인에게 한약재를 판매하지 않으며, <br className="hidden-xs"/>
                    한의사 면허를 취득한 한의사의 처방에 의한 조제 의뢰를 받고 있습니다.
                </section>
            </div>
            <div className="ft_copy">
                Copyright ©2022 haemilwon.kr
            </div>
        </div>
    );
}

export default Login;