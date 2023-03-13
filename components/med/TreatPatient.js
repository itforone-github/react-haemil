/**
 * 2.2.1 환자관리
 * TODO:기능작업필요
 */
import {useEffect} from "react";
import {useRouter} from "next/router";
import Layout from "./layout/Layout";

const TreatPatient = () => {
    const router = useRouter();

    useEffect(() => {
        $(function () {
            $(".past_list").css("display", "none");
            $(".past_list:first").addClass("selected")
            $(".past_btn").click(function () {
                if ($("+.past_list", this).css("display") == "none") {
                    $(".past_list").slideUp(0);
                    $("+.past_list", this).slideDown(0);
                    $(".past_btn").removeClass("selected");
                    $(this).addClass("selected");
                }
            }).mouseover(function () {
                $(this).addClass("over")
            }).mouseout(function () {
                $(this).removeClass("over")
            })
            // $("dt").click().mouseover().mouseout()
        });
    }, []);

    return (
        <>
            <Layout id={"TreatPatient"} title={"환자 관리"} desc={"신규 환자 등록, 기존 환자 정보 수정이 가능합니다."} pageId={1}>
                <section className="t_patient">
                    <div className="register">
                        <div className="box2">
                            <div className="box_title bg_red">
                                <strong>환자 등록</strong>
                                <div className="title_btn">
                                    <a className="btn btn_small btn_white">등록하기</a>
                                </div>
                            </div>
                            <div className="form">
                                <dl>
                                    <dt><label>차트번호</label></dt>
                                    <dd>
                                        <input type="text" placeholder="차트번호"/>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><label>이름*</label></dt>
                                    <dd>
                                        <input type="text" placeholder="이름"/>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><label>주민등록번호*</label></dt>
                                    <dd>
                                        <p className="flex">
                                            <input type="text" placeholder="주민번호 앞자리"/>
                                            <input type="text" placeholder="주민번호 뒷자리"/>
                                        </p>
                                        <p className="ref">주민번호 앞자리 필수</p>
                                        <p className="ref">주민번호는 최초 1회만 수집 가능합니다.</p>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><label>주소</label></dt>
                                    <dd>
                                        <input type="text" placeholder="기본주소"/>
                                        <input type="text" placeholder="상세주소"/>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><label>휴대폰 번호*</label></dt>
                                    <dd>
                                        <input type="text" placeholder="휴대폰 번호"/>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><label>기타 연락처</label></dt>
                                    <dd>
                                        <input type="text" placeholder="기타 연락처"/>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>체질선택</dt>
                                    <dd className="circle">
                                        <input type="radio" id="type4" name="type" checked/><label htmlFor="type4">없음</label>
                                        <input type="radio" id="type1" name="type"/><label htmlFor="type1">태양인</label>
                                        <input type="radio" id="type2" name="type"/><label htmlFor="type2">태음인</label>
                                        <input type="radio" id="type3" name="type"/><label htmlFor="type3">소양인</label>
                                        <input type="radio" id="type4" name="type"/><label htmlFor="type4">소음인</label>
                                    </dd>
                                </dl>
                                <textarea placeholder="처방메모를 입력하세요. (탕전실에는 전달되지 않습니다.)"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="area_top">
                            <div className="total">
                                <h3>간편 환자 등록</h3>
                                <p>현재 총 <span className="red">4</span>명 </p>
                                <div className="search">
                                    <select name="search">
                                        <option value="">이름</option>
                                        <option value="">휴대폰번호</option>
                                        <option value="">생년월일</option>
                                        <option value="">차트번호</option>
                                    </select>
                                    <input className="search-bar" type="search" placeholder="검색어를 입력하세요"/>
                                    <button type="button" className="btn_search"><i className="fa-light fa-magnifying-glass"></i></button>
                                </div>
                            </div>
                            <span className="btn_wrap">
                            <button type="button" className="btn btn_gray2 btn_sdw">엑셀 다운</button>
                            <button type="button" className="btn btn_whiteline btn_sdw">선택 삭제</button>
                        </span>
                        </div>
                        <div className="box2">
                            <div className="table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th><input type="checkbox" name="checkbox"/></th>
                                        <th>No.</th>
                                        <th>차트번호</th>
                                        <th>이름</th>
                                        <th>생년월일</th>
                                        <th>연락처</th>
                                        <th>주소지</th>
                                        <th>체질구분</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="past_btn">
                                        <td><input type="checkbox" name="checkbox"/></td>
                                        <td>1</td>
                                        <td>00000001</td>
                                        <td>김환자</td>
                                        <td>1990-01-01</td>
                                        <td>010-0000-0000</td>
                                        <td>부산시 해운대구 센텀동로</td>
                                        <td>소양인</td>
                                        <td>
                                            <button type="button" className="btn btn_mini btn_whiteline" data-toggle="modal" data-target="#patientmodal01">수정</button>
                                            <button type="button" className="btn btn_mini btn_redline">삭제</button>
                                        </td>
                                    </tr>
                                    <tr className="past_list">
                                        <td colSpan="9">
                                            {/*과거처방내역*/}
                                            <table className="">
                                                <thead>
                                                <tr>
                                                    <th className="" rowSpan="2">번호</th>
                                                    <th className="" rowSpan="2">주문일</th>
                                                    <th className="" rowSpan="1">주문상태</th>
                                                    <th className="" rowSpan="1">주문번호</th>
                                                    <th className="" rowSpan="2">수량</th>
                                                    <th className="" rowSpan="2">주문금액</th>
                                                </tr>
                                                <tr>
                                                    <th className="" rowSpan="1">처방방식</th>
                                                    <th className="" colSpan="1">상품/처방명</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="" rowSpan="2">8862</td>
                                                    <td className="" rowSpan="2">23-02-08</td>
                                                    <td className="" rowSpan="1"><span className="state">주문접수</span></td>
                                                    <td className="" colSpan="1"><span className="txt_blue txt_under"><a onClick={() => router.push("/pxPrescribe1Done")}>202302081123-1</a></span>
                                                    </td>
                                                    <td scope="col" rowSpan="2" className="">1</td>
                                                    <td className="" rowSpan="2">119,400원</td>
                                                </tr>
                                                <tr>
                                                    <td className="" rowSpan="1">탕전처방</td>
                                                    <td className="" rowSpan="1">맞춤처방</td>
                                                </tr>
                                                <tr>
                                                    <td className="" rowSpan="2">8862</td>
                                                    <td className="" rowSpan="2">23-02-08</td>
                                                    <td className="" rowSpan="1"><span className="state">주문접수</span></td>
                                                    <td className="" colSpan="1"><span className="txt_blue txt_under"><a onClick={() => router.push("/pxPrescribe1Done")}>202302081123-1</a></span>
                                                    </td>
                                                    <td scope="col" rowSpan="2" className="">1</td>
                                                    <td className="" rowSpan="2">119,400원</td>
                                                </tr>
                                                <tr>
                                                    <td className="" rowSpan="1">탕전처방</td>
                                                    <td className="" rowSpan="1">맞춤처방</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr className="past_btn">
                                        <td><input type="checkbox" name="checkbox"/></td>
                                        <td>1</td>
                                        <td>00000001</td>
                                        <td>김환자</td>
                                        <td>1990-01-01</td>
                                        <td>010-0000-0000</td>
                                        <td>부산시 해운대구 센텀동로</td>
                                        <td>소양인</td>
                                        <td>
                                            <button type="button" className="btn btn_mini btn_whiteline" data-toggle="modal" data-target="#patientmodal01">수정</button>
                                            <button type="button" className="btn btn_mini btn_redline">삭제</button>
                                        </td>
                                    </tr>
                                    <tr className="past_list">
                                        <td colSpan="9">
                                            <div className="empty">과거처방내역이 없습니다.</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="b-pagination-outer">
                                <ul id="border-pagination">
                                    <li><a className="" href="#">«</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#" className="active">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">6</a></li>
                                    <li><a href="#">7</a></li>
                                    <li><a href="#">»</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default TreatPatient;