React 렌더링 성능 측정
- React Develoment Tools 이용
- Profiler 적용
- 단일 컴포넌트 vs 하위 컴포넌트 분할 + React.memo의 렌더링 성능 비교

결과
- 단일 컴포넌트(ListOne) 보다 ListTwo의 렌더링 속도가 24.9ms에서 0.1ms로 개선된것을 확인하였다.

알게된 점
React.memo 및 적절한 기능을 이용해 렌더링 속도를 개선할 수 있고 다양한 방법에 대해 더 알아보자.

Optimizing Performance 공식 문서(https://reactjs.org/docs/optimizing-performance.html)
