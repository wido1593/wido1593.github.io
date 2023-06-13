---
layout: content
---
# Who are you?
<table>
  <tbody>
    <tr>
      <td>
        <img id="img_portfolio" src="{{ site.baseurl }}/images/Real_jaehoonman.JPG" >
      </td>
      <td style="width: 70%">      
        <pre id="pre_portfolio">
{
    name: "박재훈",
    birth: "1996.06.23",
       contact: {
        phone: "<a id="anchor" href="tel:+82)10-5058-9041">+82)10-5058-9041</a>",
        Email: "<a id="anchor" href="mailto:wido1593@gmail.com">wido1593@gmail.com</a>,
    },
    education: {
        name: "인덕대학교",
        major: "컴퓨터소프트웨어",
        date: {
            from:"2015.03",
            to:"2020.02"
        }
    },
    location: {
        Lat: "37.6352",
        Lon: "127.0094",
        district: "Gangbuk-Gu, Seoul, South Korea"
    }
}
        </pre>
      </td>
    </tr>
  </tbody>
</table>

# comment
<div> 
<pre id="pre_portfolio_lined">
성장과 만족을 향한 열망을 갖춘 3년차 백엔드 개발자입니다.

전반적인 백엔드 개발 경험을 보유하고 있으며, 문제 해결과 협업을 통해 효과적인 솔루션을 제공하는 것을 목표로 삼고 있습니다.
단지 기능만을 구현하는것이 아닌, 디테일과 효율성을 고루 갖춘 기능으로 사용자, 동료, 조직, 기업의 만족을 위해 항상 고민하는 개발자입니다.
</pre>
</div>

# I got...

#### SELECT * FROM SKILLSET WHERE TYPE = 'Web'

<table>
    <thead> 
        <tr>
            <th style="width: 20%">INDEX</th>
            <th style="width: 40%">TITLE</th>
            <th style="width: 20%">TYPE</th>
            <th style="width: 20%">LEVEL</th>
        </tr>
    </thead>  
  {% assign newIndex = 0 -%}
  {% assign skilllist = site.data.skillSet %}
  {% for skill in skilllist %}
    {% if skill.type == "Web" %}
    {% assign newIndex = newIndex | plus: 1 -%}
    <tr>
      <td>{{ newIndex }}</td>
      <td style="text-align: left">{{ skill.name }}</td>
      <td>{{ skill.type }}</td>
      <td>{{ skill.level }}</td>
    </tr>
    {% endif %}
  {% endfor %}
</table>


#### SELECT * FROM SKILLSET WHERE TYPE = 'Server'

<table>
    <thead> 
        <tr>
            <th style="width: 20%">INDEX</th>
            <th style="width: 40%">TITLE</th>
            <th style="width: 20%">TYPE</th>
            <th style="width: 20%">LEVEL</th>
        </tr>
    </thead>  
  {% assign newIndex = 0 -%}
  {% assign skilllist = site.data.skillSet %}
  {% for skill in skilllist %}
    {% if skill.type == "Server" -%}
    {% assign newIndex = newIndex | plus: 1 -%}
    <tr>
      <td>{{ newIndex }}</td>
      <td style="text-align: left">{{ skill.name }}</td>
      <td>{{ skill.type }}</td>
      <td>{{ skill.level }}</td>
    </tr>
    {% endif %}
  {% endfor %}
</table>


#### SELECT * FROM SKILLSET WHERE TYPE = 'DB'

<table>
    <thead> 
        <tr>
            <th style="width: 20%">INDEX</th>
            <th style="width: 40%">TITLE</th>
            <th style="width: 20%">TYPE</th>
            <th style="width: 20%">LEVEL</th>
        </tr>
    </thead>  
  {% assign newIndex = 0 -%}
  {% assign skilllist = site.data.skillSet %}
  {% for skill in skilllist %}
    {% if skill.type == "DB" -%}
    {% assign newIndex = newIndex | plus: 1 -%}
    <tr>
      <td>{{ newIndex }}</td>
      <td style="text-align: left">{{ skill.name }}</td>
      <td>{{ skill.type }}</td>
      <td>{{ skill.level }}</td>
    </tr>
    {% endif %}
  {% endfor %}
</table>


#### SELECT * FROM SKILLSET WHERE TYPE = 'Programming'

<table>
    <thead> 
        <tr>
            <th style="width: 20%">INDEX</th>
            <th style="width: 40%">TITLE</th>
            <th style="width: 20%">TYPE</th>
            <th style="width: 20%">LEVEL</th>
        </tr>
    </thead>  
  {% assign newIndex = 0 -%}
  {% assign skilllist = site.data.skillSet %}
  {% for skill in skilllist %}
    {% if skill.type == "Programming" -%}
    {% assign newIndex = newIndex | plus: 1 -%}
    <tr>
      <td>{{ newIndex }}</td>
      <td style="text-align: left">{{ skill.name }}</td>
      <td>{{ skill.type }}</td>
      <td>{{ skill.level }}</td>
    </tr>
    {% endif %}
  {% endfor %}
</table>


#### SELECT * FROM CERTIFICATE

<table>
    <thead> 
        <tr>
            <th style="width: 20%">INDEX</th>
            <th style="width: 40%">TITLE</th>
            <th style="width: 20%">TYPE</th>
            <th style="width: 20%">LEVEL</th>
        </tr>
    </thead>  
  {% assign newIndex = 0 -%}
    {% assign certList = site.data.certificate -%}
    {% for cert in certList -%}
    {% assign newIndex = newIndex | plus: 1 -%}
    <tr>
      <td>{{ newIndex }}</td>
      <td style="text-align: left">{{ cert.name }}</td>
      <td>{{ cert.type }}</td>
      <td>{{ cert.level }}</td>
    </tr>
  {% endfor %}
</table>

# Career
<div> 
    <pre id="pre_portfolio_lined">
Career
├── Transcosmos_Korea
│   └── Position
│       └── Back-end-Devleoper
│   └── Project
│       └──<button class="accordion">네이버톡톡 상담 채널 도입.</button>
<div class="accordionPanel">│           └── period
│               └── 2023.05~
│           └── keyword
│               └── Web Hook.
│               └── Spring Boot.
│               └── 통합 메시징 처리.
│           └── do
│               └── 기존 카카오 상담톡, 라인, 사내 자체 채팅 서비스이외 네이버톡톡 상담 채널 도입 분석.
│               └── 네이버톡톡 Web Hook 통신 모듈 설계.
│               └── 네이버 - 상담 웹 애플리케이션 상호 중계 애플리케이션 설계.
│               └── 통합 메시징 처리 모듈 설계.
│           └── outcome
│               └── 상담 채널 도입 기반 제공.
<pre id="pre_review">
> review
카카오, 라인 상담을 위해서 중계 역할을 해주는 중계 서비스 구조를 파악할 수 있었습니다.

서비스마다 요구하는 스펙과 포멧이 달랐기에 네이버톡톡 서비스만을 위한 중계 서버를 설계하였습니다. 
</pre></div>│       └──<button class="accordion">야나두 프로모션 홍보 아웃바운드 채널 구축.</button>
<div class="accordionPanel">│           └── period
│               └── 2022.11~2023.04
│           └── keyword
│               └── Query Optimization.
│               └── Cloud Service(NHN Toast)
│               └── Spring Framework.
│               └── REST-API.
│               └── Excel.
│           └── do
│               └──  대용량 데이터 조회 Query 구조 설계 및 최적화.
│               └──  CTI(Computer Telephony Integration) 자원 연동.
│               └──  야나두 기간계 연동 상담 대상자 자동 업로드 기능 개발.
│               └──  jqGrid 리스트 커스터마이징.
│               └──  엑셀 데이터 출력 기능 개발.
│               └──  Spring 기반 상담 서비스 웹 애플리케이션 개발.(NHN Cloud Server)
│               └──  PostgreSQL + MyBatis DB 연동.
│           └── outcome
│               └── 대용량 데이터 조회 시 이전 대비 약 60% 쿼리속도 개선.(3.1ms -> 1.1ms)
│               └── 서버 및 웹 애플리케이션 서비스 부하 저감.
<pre id="pre_review">
> review
분리된 테이블을 상호 Join하여 결과를 자주 조회해야하는 프로젝트였습니다.

아무리 컴퓨팅 성능이 많이 좋아졌다하여도 기능만 돌아가는 개발은 하기 싫었기에 쿼리 및 화면 처리 시 최적화에 신경을 쓰며 개발을 진행했습니다.
덕분에 쿼리 개발 능력 향상에 도움이되었습니다.

또한 지속적인 개발 요청에 기한을 맞추는 타이트한 프로젝트이기에 무조건 개발을 진행하기보다 기존 기능을 어떻게 활용할것인지, 어떠한 방향으로 진행하면 요구사항에 대응할 수 있는지, 기한 조율 등 타협 및 스케쥴링 스킬을 키울 수 있었습니다.
</pre></div>│       └──<button class="accordion">한국에자이 건강 상담 구독 서비스 'Helpy' 상담톡 구축.</button>
<div class="accordionPanel">│           └── period
│               └── 2022.09~2022.11
│           └── keyword
│               └── 1:N Web Socket 세션 관리.
│               └── Cloud Service(NHN Toast)
│               └── Spring Framework.
│               └── REST-API.
│               └── Web Socket.
│               └── 카카오 상담톡.
│           └── do
│               └── Web Socket을 이용한 실시간 카카오 상담톡.
│               └── 1:N 구조 채팅 세션 관리 기법 설계 및 인터페이스 개발.
│               └── 고객 구독 상태(서비스 미가입 / 구독권 연장 및 만료) 에 따른 안내 메시지 챗봇 개발.
│               └── Spring 기반 상담 서비스 웹 애플리케이션 개발(On-Premise).
│               └── 카카오톡 - 상담 웹 애플리케이션 메시지 교환 REST-API / Schedule 개발.
│               └── PostgreSQL + MyBatis DB 연동.
│           └── outcome
│               └── 기존 20개의 채팅 세션에 맞게 설계된 구조 변경으로 최대 100개의 채팅 세션을 한 상담사가 진행 할 수 있도록 확장.
<pre id="pre_review">
> review
구독권이 유지되는동안 계속해서 채팅 세션을 유지시켜야하며, 그로인하여 상담사 1명이 맡는 인원도 많아질 수 있는 프로젝트 특성상,
화면 인터페이스 커스터마이징 및 세션 관리 방안을 재수립하면서 효율적으로 상담을 진행할 수 있도록 구조 및 화면 구성을 설계 스킬을 향상 시킬 수 있었습니다.
</pre></div>│       └──<button class="accordion">록시땅 쿠폰 관리 사이트 리뉴얼</button>
<div class="accordionPanel">│           └── period
│               └── 2022.06~2023.09
│           └── keyword
│               └── Spring Boot.
│               └── JPA.
│               └── Salesforce API.
│           └── do
│               └── Spring Boot 기반 쿠폰 관리 사이트 개발.
│               └── 쿠폰 사용 / 만료 Salesforce API 호출 기능 개발.
│               └── 쿠폰 만료 처리 Quartz 개발.
│               └── PostgreSQL + JPA DB 연동.
│           └── outcome
│               └── Spring Framework + MyBatis 기반의 기존 프로젝트에서 Spring Boot + JPA 프로젝트 기반 수립.
<pre id="pre_review">
> review
기존 Spring Framework + MyBatis + SVN 의 구조에 익숙해졌을 때 Spring Boot + JPA + Git 구조의 프로젝트를 진행하게되어 실무 개발 능력 스코프를 넓힐 수 있었습니다.
</pre></div>│       └──<button class="accordion">Microsoft 서비스 연동 상담 웹 애플리케이션 고도화.</button>
<div class="accordionPanel">│           └── period
│               └── 2022.05~2022.06
│           └── keyword
│               └── MS Azure AD(Active Directory).
│               └── SSO.
│           └── do
│               └── MS Azure AD 연동 SSO 통합 상담사 웹 애플리케이션 로그인 기능 개발.
│           └── outcome
│               └── 상담 애플리케이션 이용자 보안성 및 편의성 증가.
<pre id="pre_review">
> review
Azure AD(Active Directory)의 Token 교환 방식으로 MS 시스템의 서비스와 구조를 파악할 수 있었으며, MS제공 라이브러리를 직접 커스텀하여 SSO 기반 구축하는 스킬을 향상 시킬 수 있었습니다.
</pre></div>│       └──<button class="accordion">스타자동차 상담 서비스 구축.</button>
<div class="accordionPanel">│           └── period
│               └── 2021.11~2022.04
│           └── keyword
│               └── SSO.
│               └── CTI(Computer Telephony Integration) 
│               └── Non-ActiveX Softphone
│               └── Web Socket.
│               └── 카카오 상담톡.
│               └── IMAP/POP3.
│               └── 고객사 기간계 연동.
│               └── On-Premise.
│               └── Spring Framework.
│               └── REST-API.
│           └── do
│               └── 스타자동차 기간계 그룹웨어 연동 SSO 로그인 기능 개발.
│               └── CTI(Computer Telephony Integration) 연동.
│               └── Web Socket을 이용한 Non-ActiveX 소프트폰 개발.
│               └── Web Socket을 이용한 실시간 카카오 상담톡.
│               └── 전화 녹취 데이터 재생 기능 개발.
│               └── 카카오 상담톡 통계 데이터 제공 API 개발.
│               └── IMAP/POP3 이메일 송/수신 연동 개발.
│               └── SMS API 연동 문자 전송 기능 개발.
│               └── Windows Server SSL 서버 구축.
│               └── 고객사 기간계 데이터(MsSQL) 연동 데이터 조회 UI 및 기능 개발.
│               └── Spring 기반 상담 서비스 웹 애플리케이션 개발(On-Premise).
│               └── 카카오톡 - 상담 웹 애플리케이션 메시지 교환 REST-API / Schedule 개발.
│               └── PostgreSQL + MyBatis DB 연동.
│           └── outcome
│               └── Web Socket 소프트폰 개발로 기존 Internet Explorer에서만 구동되는 ActiveX CTI 소프트폰의 단점 개선.
<pre id="pre_review">
> review
전화, 카카오 상담톡, 이메일을 활용한 통합상담센터의 상담 웹 애플리케이션을 구축하였습니다.

도입방안서, WBS, 아키텍처 등 설계 단계에서부터 개발, 테스트 유지보수 전체 과정에 개입하여 주도적으로 프로젝트를 진행하였습니다.
특히 기능 설계, 아키텍처 구조, WBS와 같은 문서 작성은 개발 이외의 스킬을 향상 시킬 수 있었습니다.

CTI, 통계, 녹취와 같은 다른 파트와 협업하면서 연동 지식을 쌓을 수 있었습니다.

고객 등록 자동차 정보, 수리 이력, 서비스 현황 등 이전에 고객사 자체 제작 프로그램에서만 조회할 수 있는 정보를 고객사 기간계 데이터 연동하여 사용자가 간편하고 효율적으로 업무에 집중할 수 있도록 사용자 맞춤 페이지 및 기능을 제작하였습니다.

유지보수 단계에 이슈 발생 시 신속하게 원익 파악 및 해결을 하며 트러블슈팅 스킬을 향상 시킬 수 있었습니다.
</pre></div>│       └──<button class="accordion">KB증권 회원제 자산관리 서비스 'Prime CLUB' 카카오 상담톡 서비스 구축.</button>
<div class="accordionPanel">│           └── period
│               └── 2021.07~2021.11
│           └── keyword
│               └── 기간계 전문 통신(Fixed Length Format) 연동.
│               └── 이중화.
│               └── Web Socket.
│               └── 카카오 상담톡.
│               └── On-Premise.
│               └── Spring Framework.
│               └── REST-API.
│           └── do
│               └── Web Socket을 이용한 실시간 카카오 상담톡.
│               └── 상담사 배분 로직 최적화 및 평등 배분 로직 개발.
│               └── KB증권 기간계 연동 전문(Fixed Length Format) 데이터 교환 기능 개발.
│               └── Spring 기반 상담 서비스 웹 애플리케이션 개발(On-Premise).
│               └── 카카오톡 - 상담 웹 애플리케이션 메시지 교환 REST-API / Schedule 개발.
│               └── PostgreSQL + MyBatis DB 연동.
│           └── outcome
│               └── <a id="anchor"
                        href="https://www.newsquest.co.kr/news/articleView.html?idxno=205830"
                        target="_blank">KB증권 회원제 자산관리 서비스 'Prime CLUB' 구독자 166만명 돌파.(2023.04 기준)</a>
│               └── 채팅 상담사 배분 시 한 상담사에게 많은 건이 배분되는 로직을 개선하여 상담사 불만 해소.
<pre id="pre_review">
> review
보안이 중요시되는 기업에 On-Premise 서비스를 제공하는 프로젝트였습니다.

내/외부망, DMZ, Proxy, Routing, 방화벽 설정, 이중화 등 현업에서의 서버의 구조와 보안을 배울 수 있었습니다.

직접 Class Diagram, Sequence Diagram을 그려가며 구조와 흐름을 파악하는 스킬을 향상 시킬 수 있었습니다.

직접 개발한 상담톡 배분 로직의 볼륨이 커지면서 유지보수와 재활용 등의 목적으로 모듈화, 객체화 등 최적화를 위한 구조를 고려하며 효율적인 개발 연습을 할 수 있었습니다.
</pre></div>│       └──<button class="accordion">상담 웹 애플리케이션 다국어 버전 개발.</button>
<div class="accordionPanel">│           └── period
│               └── 2021.02~2021.07
│           └── keyword
│               └── Spring Framework.
│               └── LocaleResolver.
│               └── Properties Resource.
│           └── do
│               └── Spring 기반 웹 애플리케이션 Locale 별 다국어 처리.(Cookie 저장)
│               └── 한국어 / 영어 / 일본어 언어 Messages Properties화.
│               └── Massages Properties 호출 소스 생성 프로그램 개발.
│           └── outcome
│               └── <a id="anchor"
                        href="https://www.mk.co.kr/news/business/10062452"
                        target="_blank">CXpert 솔루션 PowerFront V2 출시로 해외 사업 진출 성공.</a>
│               └── 2021년도 매출 달성 기여.
│           └── sample
│               └── <a id="anchor" 
                        href="https://github.com/wido1593/Multilingual"
                        target="_blank">Spring Boot 다국어 데모</a>
│               └── <a id="anchor" 
                        href="https://github.com/wido1593/Simple_Clipboard_Copy"
                        target="_blank">Massages Properties 호출 소스 생성 프로그램</a>
<pre id="pre_review">
> review
방대한 양의 텍스트들을 추출하고, Messages Properties로 지정, 페이지 렌더링 시 Locale에 따라 나라별 언어를 호출하는 간단하지만 번거로운 프로젝트였습니다.

동료들과 협업하면서 조금씩 모양을 갖춰가는 과정에서 협업의 중요함과 보람을 많이 느꼈습니다.

Messages Properties로 모든 텍스트를 Key=Value의 형태로 추출하고, 페이지 호출 시 사용하는 코드를 클릭 한 번으로 생성해 주는 기능을 제작하여 원활한 작업이 될  수 있도록 지원하였습니다.
</pre></div>│
├── （株式会社）Innocence＿Design
│   └── Position
│       └── Full-stack-Developer(Intern)
│   └── Project
│       └──<button class="accordion">지역 단체 체육회 홍보 사이트, 식료품점 홍보 사이트 제작.</button>
<div class="accordionPanel">│           └── period
│               └── 2019.09~2019.12
│           └── keyword
│               └── PHP.
│               └── HTML/CSS/JS/Bootstrap.
│               └── Maria DB.
│           └── do
│               └── PHP  프레임 워크를 이용 백엔드 개발.
│               └── HTML / CSS / JS 를 이용한 프론트엔드 개발
│               └── 사내 자체 Linux 서버 구축.
│               └── MariaDB 데이터 베이스 구축.
│           └── outcome
│               └── Dynamic Web인프라 구축.
<pre id="pre_review">
> review
개발자로서 처음 실무를 맡아본 프로젝트였습니다.

일본 오사카 디자인회사에서 3개월 정도 인턴으로 일을 하면서 실무는 물론, 문화를 배울 수 있었습니다.

퍼블리셔 위주의 정적으로 제작되는 사이트에 PHP와 DB를 접목해 동적 웹 프로젝트의 기반을 잡았습니다.
</pre></div>
</pre>
</div>