/*메인*/
import Layout from "med/components/Layout";
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <>
            <Layout id="Main">
                <section className="treat main">
                    <div className="tm_register">
                        <h3>간편 환자등록(테스트)</h3>
                        <div className="box1">
                            <div className="form">
                                <label>이름</label><input type="text" placeholder="이름"/>
                                <label>주민등록번호</label><input type="text" placeholder="주민등록번호"/>
                                <label>연락처</label><input type="text" placeholder="연락처"/>
                                <label>주소</label><input type="text" placeholder="주소"/>
                            </div>
                            <Link className="btn btn_middle btn_red">등록</Link>
                        </div>
                    </div>
                    <div className="tm_real_time">
                        <div className="box2">
                            <div className="box_title">
                                <strong>실시간 진료 명단</strong>
                                <div className="title_btn">
                                    <span>7명</span>
                                    <Link className="arrow on"><img alt="" src="/img/common/arrow_left.svg"/></Link>
                                    <Link className="arrow off"><img alt="" src="/img/common/arrow_right.svg"/></Link>
                                    <Link className="btn btn_small btn_white">직접접수</Link>
                                </div>
                            </div>
                            <div className="list">
                                <ul>
                                    <li>
                                        <strong className="patient_name">김환자</strong>
                                        <p>
                                            <span className="state ing">진료중</span>
                                            {/*진료중일 때 class : ing, 대기중일 때 class : standby*/}
                                            <Link className="btn btn_mini btn_line">완료</Link>
                                        </p>
                                    </li>
                                    <li>
                                        <strong className="patient_name">이환자</strong>
                                        <p>
                                            <span className="state standby">대기중</span>
                                            <Link className="btn btn_mini btn_line">호출</Link>
                                        </p>
                                    </li>
                                    <li>
                                        <strong className="patient_name">박환자</strong>
                                        <p>
                                            <span className="state standby">대기중</span>
                                            <Link className="btn btn_mini btn_line">호출</Link>
                                        </p>
                                    </li>
                                    <li>
                                        <strong className="patient_name">정환자</strong>
                                        <p>
                                            <span className="state standby">대기중</span>
                                            <Link className="btn btn_mini btn_line">호출</Link>
                                        </p>
                                    </li>
                                    <li>
                                        <strong className="patient_name">강환자</strong>
                                        <p>
                                            <span className="state standby">대기중</span>
                                            <Link className="btn btn_mini btn_line">호출</Link>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tm_today">
                        <div className="box2">
                            <div className="box_title bg_red">
                                <strong>금일 진료 예약건</strong>
                                <div className="title_btn">
                                    <span>7명</span>
                                    <Link className="arrow on"><img alt="" src="/img/common/arrow_left.svg"/></Link>
                                    <Link className="arrow off"><img alt="" src="/img/common/arrow_right.svg"/></Link>
                                    <Link className="btn btn_small btn_white">직접접수</Link>
                                </div>
                            </div>
                            <div className="list">
                                <ul>
                                    <li>
                                        <p>
                                            <strong className="patient_name">김환자</strong>
                                            <span className="birth">1990-01-30</span>
                                        </p>
                                        <p>
                                            <span className="time">11:00</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong className="patient_name">김환자</strong>
                                            <span className="birth">1990-01-30</span>
                                        </p>
                                        <p>
                                            <span className="time">11:00</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong className="patient_name">김환자</strong>
                                            <span className="birth">1990-01-30</span>
                                        </p>
                                        <p>
                                            <span className="time">11:00</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong className="patient_name">김환자</strong>
                                            <span className="birth">1990-01-30</span>
                                        </p>
                                        <p>
                                            <span className="time">11:00</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong className="patient_name">김환자</strong>
                                            <span className="birth">1990-01-30</span>
                                        </p>
                                        <p>
                                            <span className="time">11:00</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tm_request">
                        <h3>진료 예약 요청</h3>
                        <div className="box1">
                            <ul className="list">
                                <li>
                                    <p>김환자</p>
                                    <p>
                                        <span className="date_time">2022-11-02 11:00</span>
                                        <Link className="btn btn_mini btn_line">확인</Link>
                                    </p>
                                </li>
                                <li>
                                    <p>김환자</p>
                                    <p>
                                        <span className="date_time">2022-11-02 11:00</span>
                                        <Link className="btn btn_mini btn_line">확인</Link>
                                    </p>
                                </li>
                                <li>
                                    <p>김환자</p>
                                    <p>
                                        <span className="date_time">2022-11-02 11:00</span>
                                        <Link className="btn btn_mini btn_line">확인</Link>
                                    </p>
                                </li>
                                <li>
                                    <p>김환자</p>
                                    <p>
                                        <span className="date_time">2022-11-02 11:00</span>
                                        <Link className="btn btn_mini btn_line">확인</Link>
                                    </p>
                                </li>
                                <li>
                                    <p>김환자</p>
                                    <p>
                                        <span className="date_time">2022-11-02 11:00</span>
                                        <Link className="btn btn_mini btn_line">확인</Link>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="latest">
                    <h3>최근 진료 리뷰</h3>
                    <div className="box2">
                        <div className="table">
                            <table>
                                <thead>
                                <tr>
                                    <th>작성일</th>
                                    <th>구분</th>
                                    <th>작성내용</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>2022-10-31</td>
                                    <td>예약인증</td>
                                    <td>언제나 친절하고 과잉 진료 없이 원하는 통증만 딱 잡아주십니다 약 떨어질 쯤에 미리 연락주셔서 편하게 예약 잡았어요</td>
                                </tr>
                                <tr>
                                    <td>2022-10-31</td>
                                    <td>예약인증</td>
                                    <td>언제나 친절하고 과잉 진료 없이 원하는 통증만 딱 잡아주십니다 약 떨어질 쯤에 미리 연락주셔서 편하게 예약 잡았어요</td>
                                </tr>
                                <tr>
                                    <td>2022-10-31</td>
                                    <td>예약인증</td>
                                    <td>언제나 친절하고 과잉 진료 없이 원하는 통증만 딱 잡아주십니다 약 떨어질 쯤에 미리 연락주셔서 편하게 예약 잡았어요</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Main;
