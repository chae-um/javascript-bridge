# 도메인 구현

[x] Deck

- [x] `WeakDeck`은 `trampled` 호출 시 `X`를 반환한다.
- [x] `HardDeck`은 `trampled` 호출 시 `O`를 반환한다.

[x] Stack

- [x] `through`는 입력받은 `lane`의 `stack`을 `trampled`한다.

[x] Bridge

- [x] `cross` 호출시 입력받은 `lane`을 `through`한다.
- [x] `isCompleted` 호출시 완료 여부를 반환한다.

[x] Bridge 예외 처리

- [x] `stacks`에 `length`가 3~20이 아닌 값이 들어올 시 에러가 발생한다.
- [ ] `cross` 호출시 입력받은 `lane`이 스택에 없으면 에러가 발생한다.

[x] BridgeMaker

- [x] `makeBridge` 호출시 입력받은 `size`만큼 `generateRandomNumber`를 활용하여 `Bridge`의 조건을 생성한다.

[x] BridgeGame

- [x] 생성시 입력받은 `size`를 기반으로 `Bridge`를 생성한다.
- [x] `move` 호출시 입력받은 `lane`을 생성된 `bridge`에 `cross`한다.
- [x] `retry` 호출시 `Bridge`를 초기화한다.
- [x] `isCompleted` 호출시 완료 여부를 반환한다.

[x] 재시작 예외 처리

- [x] 재시작 코드에 `R`이나 `Q`가 아닌 값이 들어올 시 에러가 발생한다.
