import React, { useEffect } from 'react';

const KakaoMapMain = () => {
    useEffect(() => {
        const mapScript = document.createElement('script');
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&libraries=services&autoload=false`;
        document.head.appendChild(mapScript);

        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById('map');
                const mapOption = {
                    center: new window.kakao.maps.LatLng(35.5446, 128.4923), // 지도의 중심좌표
                    level: 5, // 지도의 확대 레벨
                };
                const map = new window.kakao.maps.Map(mapContainer, mapOption);
                const mapTypeControl = new window.kakao.maps.MapTypeControl();
                map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);

                const geocoder = new window.kakao.maps.services.Geocoder();

                // 주소로부터 좌표를 얻는 함수
                const searchAddrToCoord = (address) => {
                    geocoder.addressSearch(address, (result, status) => {
                        if (status === window.kakao.maps.services.Status.OK) {
                            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                            console.log(`Address: ${address}, Latitude: ${result[0].y}, Longitude: ${result[0].x}`);
                            // 여기서 위경도 데이터를 사용할 수 있습니다.
                        }
                    });
                };

                // 주소로 좌표 검색
                searchAddrToCoord('경상남도 창녕군 창녕읍 군청길 1');
            });
        };
        mapScript.addEventListener('load', onLoadKakaoMap);
    }, []);

    return (
        <div id="map" className="w-auto h-full rounded shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]"></div>
    );
}

export default KakaoMapMain;
