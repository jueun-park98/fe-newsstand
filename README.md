# 기본화면 기능 목록

## 1. 기본화면 영역 분리
- [x] 기본 상단 영역
  - [x] 뉴스 스탠드 텍스트 출력
  - [x] 로고 출력
  - [ ] 현재 날짜를 현재시각으로 설정 후 텍스트로 출력

- [ ] 최신뉴스 자동롤링 영역
  - [x] 한 플렉스 박스 안에 두개의 엘리먼트를 위치하고 각 엘리먼트마다 다음을 출력
    - [x] 언론사 이름
    - [x] 뉴스 제목
  - [ ] 실제 최신뉴스로 크롤링 

- [ ] 전체 언론사 영역

## 2. 전체 언론사 영역 세부 기능
- [x] 전체 언론사, 내가 구독한 언론사, 리스트 뷰 아이콘, 그리드 뷰 아이콘 출력
- [x] 그리드 뷰 아이콘 파란색으로 표시
- [x] 가로 930px, 세로 388px 영역에 6*4 셀을 포함하는 테이블을 그리드로 구현
- [ ] 테이블 셀마다 언론사 로고 출력
- [ ] 그리드 좌우에 화살표 표시
  - [ ] 페이지 수는 4를 넘지 않도록 구현
  - [ ] 첫 페이지에는 좌측 화살표, 마지막 페이지에는 우측 화살표는 미표시

## 3. 최신뉴스 웹 크롤링 (선택사항)
- [ ] 뉴스들을 크롤링하여 최신뉴스 자동롤링 영역 안에 언론사 이름, 뉴스 제목 형식으로 출력
- [ ] 크롤링한 뉴스들의 수는 각 엘리먼트마다 5개로 설정
- [ ] 5초마다 다음 뉴스를 롤링
- [ ] 좌우 엘리먼트는 1초 간격으로 롤링되도록 설정