/*로그인*/
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Username: ", username);
        console.log("Password: ", password);
        // alert("Username/Password: "+username+"/"+password);
    };
    return (
        <div className="wrap_bg">
            <div className="mb_wrap">
                <div className="box1">
                    <h1><img src="/img/common/logo_w.svg" alt="해밀한의원 원외탕전실"/></h1>

                    <div className="login_form">
                        <form>
                            <div className="form_wrap">
                                <input type="text" placeholder="아이디" onChange={(event) => setUsername(event.target.value)}/>
                                <input type="password" placeholder="비밀번호" onChange={(event) => setPassword(event.target.value)}/>
                                {/*<Link onClick={handleSubmit} className="btn btn_sdw btn_large btn_red">로그인</Link>*/}
                                <Link to="/main" className="btn btn_sdw btn_large btn_red">로그인</Link> {/*TODO: 기능 구현 후 수정*/}
                            </div>

                            <div className="btn_wrap">
                                <Link to="/findPw" className="btn btn_sdw btn_white2">아이디 비밀번호 찾기</Link>
                                <Link to="/signUp" className="btn btn_sdw btn_black">회원 가입</Link>
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