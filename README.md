# NextJS Practice

### Pre-Rendering
- ReactJS와 다르게 미리 렌더링하여, HTML 코드를 static 상태로 받와서 표출

### Hydration
- ReactJS를 FrontEnd 안에서 실행하는 것

### Routing
- pages 폴더 안에 파일들로 라우팅
- `index.tsx` (default)
- 파일명 == 라우팅 주소 (ex: localhost:3000/temp) `temp.tsx`
- `import Link from "next/link"` a태그 대신 Link 사용

### useRouter
- route 할 때 사용하는 데이터들 관리 가능
- `useRouter().push`로 데이터 전달 가능 (파라미터 : pathname, query) (Link에도 똑같이 적용 가능)

### CSS
- `[filename].module.css` 패턴
  - 여러 className 적용 시 백틱으로 띄어쓰기 적용하거나, 배열에 join을 하기도 함
- style 태그
  - `<style jsx>{``}</style>` 안에 css 적용
  - `<style jsx global></style>` global을 사용하면 전체 적용 (현재 페이지 한정)

### Global
- `src > pages > _app.tsx`
  - 라우팅 시, Component를 props로 받아와서 _app 파일을 거쳐서 페이지를 표출

### SEO
- `import Head from "next/head"` SEO에 사용할 title 부분은 Head를 사용
  - title 태그 내에 여러 노드사용이 지양되어 백틱을 사용해 한 문자열로 통일

### Type
- `Primitive Type` : string, number ...
- `Reference Type` : String, Number ... (데이터 타입으로 사용하는 것을 지양)

### Redirects / Rewrites
- Setting in `next.config.js`
  - redirects : source로 접속하면 destination으로 접속하면서 redireting한 주소 노출
  - rewrites : source로 접속하면 destination으로 접속하지만 기존 주소 노출

### getServerSideProps
- server에서 실행되는 함수 (Server Side Rendering 사용시)
