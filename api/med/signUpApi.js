/**
 * 회원가입 관련 API
 */
import api from "@api/index";
import {swalMsg} from "@utils/sweetAlert";

/**
 * 중복체크
 * @param target: 중복체크 대상
 * @param inputData: 입력 데이터
 * @return count: 개수
 */
export const duplicateCheck = async (target, inputData) => {
    let apiURL = "";
    let count = 0;
    if(target == "memberId") apiURL = "/api/idCheck?id="+inputData; // 아이디중복체크
    else if(target == "brno") apiURL = "/api/brnoCheck?brno="+inputData; // 사업자번호중복체크

    await api.get(apiURL).then((response) => {
        // console.log("success", response);
        // console.log(response.data.count); // return json data
        count = response.data.count;
    }).catch((error) => {
        // console.log("error", error);
        swalMsg("오류가 발생하였습니다. 다시 시도해 주세요.");
    });

    return count;
}