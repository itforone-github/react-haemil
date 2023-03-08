/*다음주소검색*/
import DaumPostcode from "react-daum-postcode";

const SearchAddress = (props) => {
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') extraAddress += data.bname;
            if (data.buildingName !== '') extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        props.setPopup(false);
        props.oncomplete(fullAddress);
    }

    return (
        <div>
            <DaumPostcode onComplete={handleComplete}/>
            <button type="button" onClick={() => props.setPopup(false)}>닫기</button>
        </div>
    );
}

export default SearchAddress;