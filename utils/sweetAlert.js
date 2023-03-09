/*sweetAlert2*/
import Swal from "sweetalert2";
import Router from "next/router";

// 알림메세지
export const swalMsg = (msg) => {
    return Swal.fire({
        html: msg,
        confirmButtonText: '확인'
    });
}

// 알림메세지 확인 후 페이지 이동
export const swalMsgUrl = (msg, url) => {
    return Swal.fire({
        html: msg,
        confirmButtonText: '확인',
        didClose: () => {
            if (url !== "") {
                Router.replace(url).then(r => {});
            }
        }
    });
}

// 컨펌메세지
export const swalConfirm = (msg) => {
    return Swal.fire({
        html: msg,
        confirmButtonText: '확인',
        denyButtonText: '취소',
        showDenyButton: true
    }).then((result) => {
        if(result.isConfirmed) {}
        else {}
    });
}