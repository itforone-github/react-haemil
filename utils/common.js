/*공통함수*/
import Swal from "sweetalert2";

/**
 * 전화번호 하이픈(-)
 * @param number: 입력 전화번호
 */
export const hyphenFomatChk = (number) => {
    let newNumber;
    number = number.replace(/-/g, "");
    if(number.length === 8) newNumber = number.replace(/^(\d{4})(\d{4})$/, `$1-$2`); // 0000-0000
    else if(number.length === 10 && number.startsWith("02")) newNumber = number.replace(/^(\d{2})(\d{3,4})(\d{3,4})$/, `$1-$2-$3`); // 02-0000-0000
    else newNumber = number.replace(/^(\d{3})(\d{3,4})(\d{3,4})$/, `$1-$2-$3`); // 000-0000-0000

    return newNumber;
};

/**
 * 이메일 형식 체크
 * @param email: 입력 이메일
 */
export const emailFormatChk = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * 유효성검사 에러메세지
 * @param msg: 에러메세지
 */
export const errMsg = (msg) => {
    Swal.fire({
        html: msg,
        confirmButtonText: '확인'
    });

    return false;
}