/*회원가입*/
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className="wrap_bg">
            <div className="mb_wrap">
                <div className="box2">
                    <h1><img src="/img/common/logo_w.svg" alt="해밀한의원 원외탕전실"/><span>회원가입</span></h1>

                    <form>
                        <div className="sign_form">
                            <div>
                                <p>회원 정보</p>
                                <div className="form_wrap">
                                    <div>
                                        <input type="text" placeholder="아이디"/>
                                        <input type="text" placeholder="성명"/>
                                    </div>
                                    <div>
                                        <input type="password" placeholder="비밀번호"/>
                                        <input type="password" placeholder="비밀번호 확인"/>
                                    </div>
                                    <div>
                                        <input type="date" data-placeholder="생년월일" required aria-required="true"/>
                                        <input type="text" placeholder="휴대폰번호"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>한의원 정보</p>
                                <div className="form_wrap">
                                    <div>
                                        <input type="text" placeholder="한의원명"/>
                                        <input type="text" placeholder="사업자등록번호"/>
                                        <input type="text" placeholder="기본주소"/>
                                        {/*주소 필드 클릭시 우편번호 찾기*/}
                                        <input type="text" placeholder="상세주소"/>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="대표자명"/>
                                        <input type="text" placeholder="업태"/>
                                        <input type="text" placeholder="대표전화"/>
                                        <input type="text" placeholder="팩스번호"/>
                                    </div>
                                    <div>
                                        <input type="email" placeholder="이메일"/>
                                        <dl className="file_wrap">
                                            <dt>사업자등록증(면허증)</dt>
                                            <dd><a className="btn btn_black">파일첨부</a> 파일을 선택하세요..</dd>
                                        </dl>
                                        <dl className="file_wrap">
                                            <dt>원외탕전실 계약서</dt>
                                            <dd><a className="btn btn_black">파일첨부</a> 파일을 선택하세요..</dd>
                                        </dl>
                                        <a className="btn btn_large btn_red">계약서 파일 다운로드</a>
                                    </div>
                                </div>
                            </div>
                            <div className="btn_wrap">
                                <Link to="/signUpReq" className="btn btn_small2 btn_sdw btn_red">회원가입요청</Link>
                                <Link to="/" className="btn btn_small2 btn_sdw btn_gray">취소하기</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;