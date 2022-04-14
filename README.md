# next.js 주요기능

- 클라ㅇ언트로 html을 보내기전에 렌더링가능 -개발 중 저장되는 자동 새로고침 hot reloading
  -automatice routing : pages 폴더에 있는 파일은 해당 파일 이름으로 라우팅 된다 ,

# getInitialProps

- 일반적으로 React 는 CSR 즉 useffect로 컴포넌트가 마운트되고 나서 하는 경우가 많다
- 이과정에서 서버에서 미리 처리하도록 도와주는것이 getInitialPorps

## getInitialProps 장점

- 속도가빨라진다 미리데이터를 받아오고 브라우저는 렌더링만 준비 되면 되기때문에
- 코드 상의 처리가 깔끔해진다

## pre rendering

- nextjs는 모든페이지를 pre-render 한다 즉 nextjs가 client-side javasScript로 모든작업을 수행하는대신 미리 각 페이지에 대해서 html을 만들어두는것을 의미함
  -getInitialProps가 ( getStaticProps, getServerSideProps, getStaticPaths) 로 분리

# getStaticProps ?

- 빌드시에 딱 한번만 호출 됨 그리고 static file 에서 빌드되서 => 이후 수정이 불가능함 SSG개념 ()
  api

```
{
  revalidate
}
```

# getServerSideProps

-page가 요청받을때마다 호출되어 pre-rendering 함. 미리 렌더링

# getStaticPaths

-어떤 path들에 대해서 정적 페이지를 생성 할지 정하는

fallback ?
빌드 타임에 생성해놓지 않은 path로 요청이 들어온 경우 어떻게 할지 정하는 boolean 또는 'blocking'

-false?
=> getStaticProps가 반환하지않는 모든 path에 대해서 404 페이지를 반환한다

> 적은 숫자의 path만 프리렌더링 해야하는경우
> 새로운 페이지가 추가 될 일이 많지 않은경우
> => 자주 추가 된다면 추가될때마다 빌드해야함

true ?이면

404 페이지를 반환하지않고 페이지의 fallback 버전을 먼저 보여줌
