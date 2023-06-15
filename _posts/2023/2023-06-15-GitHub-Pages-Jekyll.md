---
layout: post_GitHubPages
title:	"[GitHub Page] GitHub Pages Jekyll로 테마 설정하기."
date:	2023-06-15 12:00:00
categories:
- blog
tags:
- Git
---

Jekyll(지킬)은 선호하는 마크업 언어를 이용하여 블로그와 같은 정적 웹 사이트 레이아웃을 작성할 수 있는 일종의 템플릿이라 보면 된다.

Ruby 기반으로 제작된 프로그램이며, GitHub에서 공식적으로 채택한 녀석이기에 전 세계적으로 한몫하는 머기업 프로그램이다.

이를 사용하기 위해서는

-   Ruby 2.5.0 이상
-   Ruby Gems
-   GCC and Make

가 기본적으로 요구된다.

설치를 진행해 보자.

macOS 기준으로 진행될 것이니 다른 OS는 [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/) 의 내용을 참고하도록 하자.

패키지 설치는 Homebrew로 진행할 것이며 혹여 설정이 안 된 인원이 있다면

[2022.02.11 - \[응용프로그램\] - \[Mac OS\] Homebrew의 개념과 설치.](https://jaehoonman.tistory.com/7)
를 참고하도록 하자.

Jekyll에선 기본적으로 macOS에는 Ruby가 설치되어 있다는데, chruby를 통해 Ruby를 설치를 권장한다.

이는 환경 변수 설정, 안정화 등 Ruby 설치에 도움이 되는 녀석이니 일단 말 듣자 ㅎㅎ

자 이제 터미널을 켜보자.


Homebrew로 chruby를 다운로드하자.

```
brew install chruby ruby-install xz
```

이후 Jekyll을 사용할 수 있는 안정화된 Ruby 버전을 다운 받아보자.

```
ruby-install ruby 3.1.3
```

불안하게 콘솔 올라가고 뭐 막 설치하고…

암튼 다 되면 환경설정을 위해

```
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby ruby-3.1.3" >> ~/.zshrc
```

zsh 에서 chruby를 사용할 수 있도록 환경설정을 해주고 chruby에서 사용할 ruby 버전을 명시해 주자.

(참고로 터미널 쉘을 bash로 사용한다면 .zshrc 대신 .bash\_profile를 넣어 커맨드를 실행하자.)

이제 터미널을 껐다가 다시 켜서

```
ruby -v
```

를 입력했을 때 정상적으로 버전이 나오는지 확인하자.

![]({{ site.baseurl }}/images/posts/2023/github_pages/Jekyll/1.png)

이렇게까지 다 설치했다면 Ruby뿐이 아니라 위에서 설명한 Ruby Gem, GCC, Make 가 다 설치되어 있을 것이다.

```
gem -v
gcc -v
g++ -v
make -v
```

의 커맨드로 설치가 되었는지 확인해 보자.

이후

```
gem install jekyll bundler
```

의 커맨드로 jekyll와 bundler를 설치해 주자.

여기서 bundler는 Ruby 프로젝트의 \[종속성 관리 / 빌드 에러 방지 / 개발 환경 일관성 관리\] 를 해준다.

설치가 완료되었다면 github pages에 올리기 전에 로컬에서 먼저 확인할 수 있도록 환경을 구성해 두자.

이전에 git과 연동해 둔 디렉터리가 있을 것이다.

여길 활용 하여 jekyll 프로젝트를 생성하도록 하자.

```
jekyll new [git init 한 디렉터리][--force]
```

이래카면 아마도 뭐 이미 파일이 있어서 안되는데용 하고 에러 뱉을 텐데 필자는 그냥 끝에 “—force” 옵션을 넣어서 무시했다.

생성한 위치로 cd 를 통하여 이동한 뒤

```
bundle exec jekyll serve [--livereload]
```

를 하여 jekyll 프로젝트를 실행하자.

참고로 “—livereload” 옵션을 주면 소스 변경될 때마다 알아서 자동 리로드해준다.

이제 [http://localhost:4000](http://localhost:4000) 로 접근했을 때 이전에 우리가 만들어둔 index.html의 내용이 나오면 jekyll 프로젝트는 성공적으로 생성이 되고, bundler를 통하여 빌드까지 마친 것이다.

![]({{ site.baseurl }}/images/posts/2023/github_pages/Jekyll/2.png)

근데 우리 이거 하려고 이 고생한 거 아니다.

예쁘게 템플릿 써야 된다. 좀만 더 해보자.

이제 적용하고 싶은 jeykll 테마를 골라야 되는데 구글에 “jeykll theme” 라고 치면 사이트가 몇 개 나올 것이다.

필자는 구글에 검색했을 때 맨 처음 나오는 [http://jekyllthemes.org/](http://jekyllthemes.org/) 를 통하여 Clyell라는 테마를 사용하겠다.

![]({{ site.baseurl }}/images/posts/2023/github_pages/Jekyll/3.png)

상세 보기로 들어가면 Homepage | Download | Demo | License 의 버튼들이 있다.

-   github에 공유한 정보를 보고 싶다면 Homepage
-   소스를 다운 받고싶다면 Download (없는 것들도 있는데 이는 Homepage로 들어가서 Git Repository - clone해서 로컬로 가져오면 된다.)
-   데모 체험을 위해서 Demo
-   라이선스 관련 정보를 보고 싶다면 License

이것저것 정보를 찾아보고 체험해 봤다면 이제 Download를 통해 소스 패키지를 다운받자.

clyell 같은 경우는 zip파일로 제공하기에 압축해제를 하고 나오는 소스를 우리 블로그 디렉터리 경로에다가 넣어주자.

![]({{ site.baseurl }}/images/posts/2023/github_pages/Jekyll/5.png)

이후 터미널에서 다시

```
bundle exec jekyll serve
```

를 시켜보고 [http://localhost:4000](http://localhost:4000) 에 접근해 보자

(ctrl + c 로 서버 중단이 가능하다.)

![]({{ site.baseurl }}/images/posts/2023/github_pages/Jekyll/6.png)

???

실행하자마자 무서운 404 페이지가 떴다.

이유는 파일 중에 \_config.yml라는 녀석의 옵션 값을 보면 알 수 있다.

\_config.yml은 이름에서부터 알 수 있듯이 jekyll 프로젝트의 전체적인 설정을 담당하는 파일이다.

내용을 보자면

```
# Site settings
title: "gjuniioor"
bye_message: "Thx!"
baseurl: "/clyell/"
url: "https://gjuniioor.github.io"
disqus: gjuniioor

# Header settings
nick: "gjuniioor"
mail:
    domain: "protonmail"
    ext: "ch"
source_code:
    server: "github.com"
    nick: "gjuniioor"
blog:
    server: "wordpress.com"
    nick: "gjuniioor"
fingerprint_key: "5E12 9ABC C2A9 564B C048  2DF9 D327 0D10 BC71 CF75"

# Build settings
markdown: kramdown
permalink: /:categories/:title/
```

와 같이 되어있는데 사이트 세팅 / 헤더 설정 / 빌드 설정 등등 사용자의 정보에 맞게 수정해 주면 된다.

일단 baseurl을 보면 “/clyell/” 이라고 되어있는데 이를 상위 도메인에다가 넣어보자.

[http://localhost:4000/clyell/](http://localhost:4000/clyell/) 과 같이.

![]({{ site.baseurl }}/images/posts/2023/github_pages/Jekyll/7.png)

Demo를 통해 봤던 화면이 노출되는 것을 확인하였다.

이제 사용자 입맛에 맞게 수정한 뒤에 github로 push 한다면.

![]({{ site.baseurl }}/images/posts/2023/github_pages/Jekyll/8.png)

이렇게 GitHub Pages의 도메인을 통해서도 해당 테마가 적용된 것을 확인할 수 있다.

다음에는 커스터마이징하여 본인만의 GithHub Pages 를 작성해 보도록 하자.

Ref.

[https://jekyllrb.com/](https://jekyllrb.com/)

[https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)