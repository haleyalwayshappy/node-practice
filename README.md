# node-practice
node.js 공부 + .gitignore에 대해서 공부한다.


## nvm 설치....과정...

트러블 슈팅을 리뷰해보려한다.

### 문제

이전에 이미 sass를 사용하고 싶어서 node 를 설치했던 이력이 있고 오늘은 node.js 를 제대로 공부해 볼 생각에 동영상 강의를 틀어 설치하는 방법 부터 강의를 듣고 있었다. 

node.js 를 특정 버전이 아닌 버전관리자를 통해서 설치를 하려고 nvm 설치를 실행하였다.

[https://github.com/nvm-sh/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file](https://github.com/nvm-sh/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) ->  README.md -> Install & Update Script 로 이동하면 아래와 같은 코드가 있다.

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`

터미널을 통해 사용하고자 하는 폴더 위치에서 복사 붙여넣기를 하고 실행을 시키면 정상적으로 nvm이 설치된다. 설치가 된것을 확인하려면 `nvm ls` 또는 `nvm --version` 통해서 확인하면 되는데,

이때부터 시작되었다. 나의 불행은..,.

`zsh: command not found: nvm` 

이라는 문구와 함께 nvm이 설치가 된건지 아닌지를 모르는 상황이 되었다. 능숙한 개발자라면 이런상황에 당황하지 않고 터미널에 쓰여있는 영어를 읽으며 문제 해결을 하겠지만 내 눈에 보이는 영어는 'already update' 정도.... 이미 노드가 설치 되어있다는거같은데.... 알겠는데 그래서 왜 nvm은 실행이 안되는거냐고... 

전에도 이래서 그때는 그냥 nvm 설치를 안하고 바로 node를 설치했었다. 하지만 이제는 왜 안되는지 궁금해졌다. 이미 node.js 가 깔려있어서라면 헉....지금 글 쓰다가 느낀건데 이미 node.js가 있으니까 nvm을 설치할 필요가없어서 그런건가...>?이건 내 뇌피셜이니까 일단 내가 했던 실패담들을 서술하겠다..

다음에 또 이런 실패를 겪을테니... 두번다시 당하지 않으리라 ...

### vi /.zshrc 을 통한 해결 방법

일단 구글링으로 `zsh: command not found: nvm` 를 검색하면 zsh탓이라면서 vi /.zshrc 로 이동후 뭐 변경을 해주라~~호롤롤로 같은 글들이 있다. 그 짓만 두시간을 했다. 왜인지 수정을 해도 저장이 안되는데 진짜 이거 똑같은 내용쓰다가 열이 너무 받았다. 그러다 안되겠어서
최초의 깃허브 주소로 다시 이동해 꼼꼼히 글을 읽으니 trouble shooting 에 대비한 글들이 있었다.

### 설치페이지 원문에 있는 trouble shooting 
터미널 껏다가 켜보라는 말이 최초에 있다. 응.,. 해봤지 임마!!!

그후의 글을 잘 읽어보니 zsh / bash / ksh 에 대한 문제시 환경변수 를 바꾸는 해결책이있었다. ← 이게 구글링에서 제일 많이 나오는 해결책 내가 1번으로 해본 거...

이것도 난 안됐으니까 그러면 다음 줄을 보자 

"Troubleshooting on macOS" 엌ㅋㅋㅋㅋㅋㅋ 그러치 리눅스에서 해결이 안되면 맥의 문제로 가봐야지

`
Since OS X 10.9, /usr/bin/git has been preset by Xcode command line tools, which means we can't properly detect if Git is installed or not. You need to manually install the Xcode command line tools before running the install script, otherwise, it'll fail. (see #1782) 
`

라는 글이 있는데 뭐,,뭐라고?~?!! 

번역 돌리면 

`
OS X 10.9부터 / usr / bin / git은 Xcode 명령 줄 도구에 의해 사전 설정되었으므로 Git의 설치 여부를 제대로 감지 할 수 없습니다. 설치 스크립트를 실행하기 전에 Xcode 명령 줄 도구를 수동으로 설치해야합니다. 그렇지 않으면 실패합니다. (# 1782 참조)
`

설치하래 ㅇㅇ 그래서 설치했음

 근데 이걸 설치하는 와중에 느낀게 위에 적었듯이 내가 이미 node.js를 nvm을 통하지 않고 설치했기때문에 nvm이 필요없어서 깔리지 않는게 아닐까? 라는 생각이 들었음 뇌피셜인데 솔직히 그럴듯함 
뭔가 다시한번 해보자라는 마음에 처음으로 돌아갔다.
다시 `curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh) | bash` 를 실행하고 영어를 다시 읽어보았다.

ㅎ,,, 이미 npm통해서 설치되었다고.... 

내가 서칭을 좀 잘못한거 아닐까 싶어서  nvm is already installed in를 구글링했더니 나랑 비슷한 사람들이 많았다. 하지만 결국 답은 돌고 돌아 vi ~/.zshrc로 가서 수정을 하라고 하길래 하 진짜 한번만 더 속아보자 하고 

`
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
`

를 복붙했다. 근데 계속 하면서 궁금했던게 원래 저장이 :wq!였던거같은데 왜 터미널은 자꾸 qa!를 하라고 하는거지? 라는 의문이 또 들었고... vim 저장후 종료를 검색했더니 이게...내가 진짜 바보같이... qa! (그냥 취소 하고 종료할게)를 계속하니 zhsrc 파일에 변경한게 저장이안됐던거고 ..... 난 결국 세시간동안 헛짓거리를 한거다.,,.. 그시간에 다른걸했다면...

### 내가 실패했던 이유
 
너무 열받는다....

결국  나는 vim/vi 언어를 몰라서 이렇게 해맸던거지..



## 정리 [이것만 봐도 됨]

- [https://github.com/nvm-sh/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file](https://github.com/nvm-sh/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) ->  README.md -> Install & Update Script 로 이동하면 아래와 같은 코드가 있다.

- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`

- 터미널을 통해 사용하고자 하는 폴더 위치에서 복사 붙여넣기를 하고 실행을 시키면 정상적으로 nvm이 설치된다. 
  설치가 된것을 확인하려면 `nvm ls` 또는 `nvm --version` 통해서 확인하면 되는데,

nvm 설치를 하다가 `zsh: command not found: nvm` 가 뜬다면 쫄지 말고 나의 터미널 환경이 무엇인지 체크한다음 [zsh / bash / ksh] 내 터미널 환경에 해당하는 이동언어를 사용하고 

(나같은경우는) vi ~/.zhsrc  → i[nsert]를 누른다음 

`export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm` 를 입력해주고 

:wq! 를 해주면... 끝..

터미널 한번 종료했다가 다시 열어서 잘 설치 되었는지 확인 nvm ls 
버젼이 뜨면 성, 공, 


결론 vim 언어를 몰라서 개 고생을 한 나였다.

공부 열심히 하자,,


이제 그 다음 

## nvm 을 통해 node.js설치 후 

1. `npm init -y` 을 통해 프로젝트 시작
: package.json이 생긴다.

1. `npm install parcel-bundler -D` 를 실행해 패키지를 설치한다.

1. node_modules 폴더가 생겼고 그 안에 parcel-bundler 와 더불어 여러 폴더들이 생성 되었다.
    필요할 수 있는 패키지들이 전부 생성되었다. 


1. 이번엔 `npm install lodash` 를 입력해 lodash 패키지를 설치한다.

(package.json 을 보면 내가 설치한 내역들이 나온다. 
  node modules를 삭제를 한다고 해도 터미널에 npm install 이라고 적으면 package.json에 의해 다시 생성된다.)
(package-lock.json 파일은 자동으로 설정되는 파일. **지워지면 안된다!**)

#### `npm install [설치할 패키지]` 뒤에 -D가 붙고 안붙고의 차이
- -D : 개발용 의존성 패키지 설치 -> 개발 할때만 도움을 받는 용도 
- 붙이지 않았을 때 :일반 의존성 설치 -> 실제 웹사이트에서 동작할 때의 용도 


### package.json 변경 하여 터미널을 통해 웹사이트를 여는 방법
#### parcel bundler 를 설치한 이유
 Open with Live Server 보다 터미널을 통해 웹사이트를 여는것이 좋다. 그를 설정하기 위한 방법

 package.json 으로 가면 `"scripts" : { ---  }` 위치에 test 코드가 있다.
 그 부분을 지우고 `"scripts" : { ---  }` 란에 `"dev":"parcel index.html"` 을 입력해준다. _"실행할 이름":"실행할 파일"_

저장 후 터미널에 가서 `npm run dev' 라고 입력하면 
`Server running at [웹사이트 주소 보통 http://localhost:1234]`

이 방법은 개발 용으로 쓰이고 
같은곳에 쉼표, 를 쓴 다음 아랫줄에
`"build":"parcel build index.html"`
를 적은 다음  터미널에 'npm run build' 라고 입력하면
dist 폴더 (배포를 위한 파일)가 생성된다. 
dist 폴더는 난독화 되어있는 파일로 구성되어있다. (이유 : 배포용이라 용량을 최소화 한 압축버젼)


## .gitignore 를  쓰는 방법
node.js는 굳이 버젼관리를 할 필요없는 파일들이 좀 있다.
지워지거나 없어진다해도 npm install로 다시 설치가 충분히 가능하기 때문이다. 
따라서 올리는 시간과 용량을 줄이기 위해서 .gitignore를 사용할 때가 있다.

물론 commit 할 때 마다 삭제하고 commit을 하는 법도 있겠지만 얼마나 귀찮은 짓인가?!
필요없는 파일/폴더는 
- .cache/
- dist/
- node_modules/