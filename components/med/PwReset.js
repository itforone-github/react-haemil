/**
 * 1.3.1 비밀번호 재설정
 * TODO:기능작업필요
 */
import {useRouter} from "next/router";

const PwReset = () => {
    const router = useRouter();

    return (
        <div className="wrap_bg">
            <div className="mb_wrap">
                <div className="box2">
                    <h1><img src="/img/common/logo_w.svg" alt="해밀한의원 원외탕전실"/><span>비밀번호 재설정</span></h1>
                    <form>
                        <div className="find_form">
                            <div className="form_wrap">
                                <input type="text" placeholder="비밀번호 재설정"/>
                                <input type="text" placeholder="비밀번호 재설정 확인"/>
                                <div className="btn_wrap">
                                    <a className="btn btn_large btn_sdw btn_red" onClick={() => router.push("/")}>비밀번호 재설정</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PwReset;