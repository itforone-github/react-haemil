/**
 * 회원가입 관련 API
 */
import Api from "@api/index";
import {swalMsg} from "@utils/sweetAlert";
import {errMsg} from "@utils/common";

/**
 * 중복체크
 * @param target: 중복체크 대상
 * @param inputData: 입력 데이터
 * @return count: 개수
 */
export const duplicateCheck = async (target, inputData) => {
    let URL = "";
    let count = 0;
    if(target == "memberId") URL = "/api/idCheck?id="+inputData; // 아이디중복체크
    else if(target == "brno") URL = "/api/brnoCheck?brno="+inputData; // 사업자번호중복체크

    await Api.get(URL).then((response) => {
        // console.log("success", response.data);
        count = response.data.count;
    }).catch((error) => {
        // console.log("error", error.data);
        swalMsg(errMsg);
    });

    return count;
}