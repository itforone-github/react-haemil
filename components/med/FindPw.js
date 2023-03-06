/**
 * 1.3 아이디/비밀번호 찾기
 * TODO:기능작업필요
 */
import Link from "next/link";
import Swal from "sweetalert2";

const FindPw = () => {
    function message() {
        Swal.fire({
            html: '회원님의 정보와 일치하는 아이디는<br> <strong>○○○○</strong>입니다.',
            confirmButtonText: '확인'
        });
    }

    return (
        <div className="wrap_bg">
            <div className="mb_wrap">
                <div className="box2">
                    <h1><img src="/img/common/logo_w.svg" alt="해밀한의원 원외탕전실"/><span>아이디/비밀번호 찾기</span></h1>
                    <form>
                        <div className="find_form">
                            <div className="form_wrap">
                                <div role="tabpanel">

                                    {/*Nav tabs*/}
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li role="presentation" className="active"><a href={"#find_id"} aria-controls="find_id" role="tab" data-toggle="tab">ID찾기</a></li>
                                        <li role="presentation"><a href={"#find_pw"} aria-controls="find_pw" role="tab" data-toggle="tab">비밀번호 찾기</a></li>
                                    </ul>

                                    {/*Tab panes*/}
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane active" id="find_id">
                                            {/*아이디찾기*/}
                                            <input type="text" placeholder="직장/한의원명"/>
                                            <input type="text" placeholder="사업자등록번호"/>

                                            <div className="btn_wrap">
                                                <a className="btn btn_large btn_sdw btn_red" onClick={message}>조회하기</a>
                                            </div>
                                        </div>
                                        <div role="tabpanel" className="tab-pane" id="find_pw">
                                            {/*비밀번호찾기*/}
                                            <input type="text" placeholder="아이디"/>
                                            <input type="text" placeholder="사업자등록번호"/>

                                            <div className="btn_wrap">
                                                <Link href={"/pwReset"}><a className="btn btn_large btn_sdw btn_red">비밀번호 재설정</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FindPw;