/**
 * 1.2 회원가입
 * TODO: 주소검색팝업 CSS 및 파일첨부 X 버튼 필요
 */
import {useRouter} from "next/router";
import useInput from "@hooks/useInput";
import SearchAddress from "@components/med/SearchAddress";
import {useState} from "react";
import {hyphenFomatChk, emailFormatChk, errMsg} from "@utils/common";
import api from "@api/index";

const SignUp = () => {
    const router = useRouter();
    const memberId = useInput("");
    const password = useInput("");
    const passwordRe = useInput("");
    const memberName = useInput("");
    const birth = useInput("");
    const hp = useInput("");
    const clinicName = useInput("");
    const repName = useInput("");
    const brno = useInput("");
    const addrDetail = useInput("");
    const zipCode = useInput("");
    const bizType = useInput("");
    const tel = useInput("");
    const fax = useInput("");
    const email = useInput("");
    const addr = useInput("");
    const lat = useInput("");
    const lng = useInput("");
    const [popup, setPopup] = useState(false); // 주소검색 컴포넌트 노출여부
    const [bizRegFile, setBizRegFile] = useState("");
    const [contractFile, setContractFile] = useState("");

    // 주소검색완료
    const handlerSearchCompete = (address) => {
        addr.setInputValue(address);

        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, function(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                lat.setInputValue(result[0].y); // 위도
                lng.setInputValue(result[0].x); // 경도
            }
        });
    }

    // 파일업로드 트리거
    const handleClickFile = (e) => {
        let fileBtn = document.getElementById(e);
        fileBtn.click();
    }
    // 파일 선택
    const handleChangeFile = (e) => {
        let id = e.target.id;
        let files = e.target.files[0];
        let fileName = files.name;
        if(id == "contractFile") setContractFile(files);
        else setBizRegFile(files);
        document.querySelector("#"+id+"Name").textContent = fileName;
    }
    // 계약서 파일 다운로드
    const handlerFileDownload = async () => {
        await api.get('/api/download/contract', {
            headers: {
                'Content-Type': 'application/jso'
            }
        }).then((response) => {
            console.log("success", response);
            console.log(response.data); // return json data
        }).catch((error) => {
            console.log("error", error)
        });
    }

    // 연락처 하이픈(-) 처리
    const handlerHyphenChk = (e) => {
        let newData = hyphenFomatChk(e.target.value);
        let name = e.target.name;
        if(name == "hp") hp.setInputValue(newData);
        if(name == "tel") tel.setInputValue(newData);
        if(name == "fax") fax.setInputValue(newData);
    }

    // 폼체크
    const handelFrmCheck = async () => {
        // 필드검사 (회원)
        if(memberId.value.length == 0 || memberId.value.length > 25) return errMsg("아이디를 25자 이내로 입력해 주세요.");
        if(memberName.value.length == 0 || memberName.value.length > 25) return errMsg("이름을 25자 이내로 입력해 주세요.");
        if(password.value.length < 4) return errMsg("비밀번호를 4자 이상 입력해 주세요.");
        if(password.value != passwordRe.value) return errMsg("비밀번호가 일치하지 않습니다.");
        if(birth.value.length == 0) return errMsg("생년월일을 입력해 주세요.");
        if(hp.value.length == 0) return errMsg("휴대폰번호를 입력해 주세요.");
        // 필드검사 (한의원)
        if(clinicName.value.length == 0 || clinicName.value.length > 40) return errMsg("한의원명을 40자 이내로 입력해 주세요.");
        if(repName.value.length == 0 || repName.value.length > 30) return errMsg("대표자명을 30자 이내로 입력해 주세요.");
        if(brno.value.length == 0 || brno.value.length > 13) return errMsg("사업자등록번호를 올바르게 입력해 주세요.");
        if(addr.length == 0) return errMsg("주소를 입력해 주세요.");
        if(tel.value.length == 0) return errMsg("대표전화를 입력해 주세요.");
        if(email.value.length > 0) if(!emailFormatChk(email.value)) return errMsg("이메일을 올바르게 입력해 주세요.");

        let formData = new FormData(document.forms[0]);
        // formData.append("memberId", memberId.value);
        // formData.append("password", password.value);
        // formData.append("memberName", memberName.value);
        // formData.append("birth", birth.value);
        // formData.append("hp", hp.value);
        // formData.append("clinicName", clinicName.value);
        // formData.append("repName", repName.value);
        // formData.append("brno", brno.value);
        // formData.append("addrDetail", addrDetail.value);
        // formData.append("zipCode", zipCode.value);
        // formData.append("bizType", bizType.value);
        // formData.append("tel", tel.value);
        // formData.append("fax", fax.value);
        // formData.append("email", email.value);
        // formData.append("addr", addr);
        // formData.append("lat", lat);
        // formData.append("lng", lng);
        formData.append("contractFile", contractFile);
        formData.append("bizRegFile", bizRegFile);

        await api.post('/api/signUp', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            console.log("success", response);
            console.log(response.data); // return json data
        }).catch((error) => {
            console.log("error", error)
        });
    };

    return (
        <>
            <div className="wrap_bg">
                <div className="mb_wrap">
                    <div className="box2">
                        <h1><img src="/img/common/logo_w.svg" alt="해밀한의원 원외탕전실"/><span>회원가입</span></h1>
                        <form autoComplete={"off"} encType={"multipart/form-data"}>
                            <div className="sign_form">
                                <div>
                                    <p>회원 정보</p>
                                    <div className="form_wrap">
                                        <div>
                                            <input type="text" name={"memberId"} {...memberId} placeholder="아이디"/>
                                            <input type="text" name={"memberName"} {...memberName} placeholder="이름"/>
                                        </div>
                                        <div>
                                            <input type="password" name={"password"} {...password} placeholder="비밀번호"/>
                                            <input type="password" name={"passwordRe"} {...passwordRe} placeholder="비밀번호 확인"/>
                                        </div>
                                        <div>
                                            <input type="date" name={"birth"} {...birth} data-placeholder="생년월일" required aria-required="true"/>
                                            <input type="tel" name={"hp"} {...hp} placeholder="휴대폰번호" maxLength={13} onKeyUp={handlerHyphenChk}/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p>한의원 정보</p>
                                    <div className="form_wrap">
                                        <div>
                                            <input type="text" name={"clinicName"} {...clinicName} placeholder="한의원명"/>
                                            <input type="text" name={"brno"} {...brno} placeholder="사업자등록번호"/>
                                            <input type="text" name={"addr"} {...addr} placeholder="기본주소" readOnly onFocus={() => setPopup(true)}/>
                                            <input type="hidden" name={"zipCode"} {...zipCode} placeholder="우편번호"/>
                                            <input type="hidden" name={"lat"} {...lat} placeholder="위도"/>
                                            <input type="hidden" name={"lng"} {...lng} placeholder="경도"/>
                                            {/*주소 필드 클릭시 우편번호 찾기*/}
                                            <input type="text" name={"addrDetail"} {...addrDetail} placeholder="상세주소"/>
                                        </div>
                                        <div>
                                            <input type="text" name={"repName"} {...repName} placeholder="대표자명"/>
                                            <input type="text" name={"bizType"} {...bizType} placeholder="업태"/>
                                            <input type="tel" name={"tel"} {...tel} placeholder="대표전화" maxLength={13} onKeyUp={handlerHyphenChk}/>
                                            <input type="text" name={"fax"} {...fax} placeholder="팩스번호" maxLength={13} onKeyUp={handlerHyphenChk}/>
                                        </div>
                                        <div>
                                            <input type="email" {...email} placeholder="이메일"/>
                                            <dl className="file_wrap">
                                                <dt>사업자등록증(면허증)</dt>
                                                <dd><a className="btn btn_black" onClick={() => handleClickFile("bizRegFile")}>파일첨부</a> <span id={"bizRegFileName"}>파일을 선택하세요..</span></dd>
                                                <input type={"file"} id={"bizRegFile"} onChange={handleChangeFile} style={{display:"None"}}/>
                                            </dl>
                                            <dl className="file_wrap">
                                                <dt>원외탕전실 계약서</dt>
                                                <dd><a className="btn btn_black" onClick={() => handleClickFile("contractFile")}>파일첨부</a> <span id={"contractFileName"}>파일을 선택하세요..</span></dd>
                                                <input type={"file"} id={"contractFile"} onChange={handleChangeFile} style={{display:"None"}}/>
                                            </dl>
                                            <a className="btn btn_large btn_red" onClick={handlerFileDownload}>계약서 파일 다운로드</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn_wrap">
                                    <a className="btn btn_small2 btn_sdw btn_red" onClick={handelFrmCheck}>회원가입요청</a>
                                    <a className="btn btn_small2 btn_sdw btn_gray" onClick={() => router.push("/")}>취소하기</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {popup && <SearchAddress setPopup={setPopup} oncomplete={(e) => handlerSearchCompete(e)}/>}
            </div>
        </>
    );
}

export default SignUp;