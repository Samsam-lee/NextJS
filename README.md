# NextJS Practice

### Routing
- pages 폴더 안에 파일들로 라우팅
- `index.tsx` (default)
- 파일명 == 라우팅 주소 (ex: localhost:3000/temp) `temp.tsx`
- `import Link from "next/link"` a태그 대신 Link 사용

### useRouter
- route 할 때 사용하는 데이터들 관리 가능

### Pre-Rendering
- ReactJS와 다르게 미리 렌더링하여, HTML 코드를 static 상태로 받와서 표출

### Hydration
- ReactJS를 FrontEnd 안에서 실행하는 것

### CSS
- `[filename].module.css` 패턴
  - 여러 className 적용 시 백틱으로 띄어쓰기 적용하거나, 배열에 join을 하기도 함
- style 태그
  - `<style jsx>{``}</style>` 안에 css 적용
  - `<style jsx global></style>` global을 사용하면 전체 적용 (현재 페이지 한정)

### Global
- `src > pages > _app.tsx`
  - 라우팅 시, Component를 props로 받아와서 _app 파일을 거쳐서 페이지를 표출
