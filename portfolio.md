---
layout: content
---

# Who are you?

<table>
  <tbody>
    <tr>
      <td style="width: 26%">
        <img id="img_portfolio" src="{{ site.baseurl }}/images/Real_jaehoonman.JPG" >
      </td>
      <td>      
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
단지 기능만을 구현하는것이 아닌, 디테일과 효율성을 고루 갖춘 기능으로 사용자, 동료, 조직, 기업의 만족을 위해 항상 고민하는 개발자입니다.</pre>
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
│               └── 2023.04~
│           └── keyword
│               └── 
│           └── name
│           └── name</div>│       └──<button class="accordion">야나두 프로모션 홍보 아웃바운드 채널 구축.</button>
<div class="accordionPanel">│           └── period
│               └── 2022.08~2023.03
│           └── keyword
│           └── name
│           └── name</div>│       └──<button class="accordion">한국에자이(Helpy) 상담 서비스 구축.</button>
<div class="accordionPanel">│           └── period
│               └── 2022.05~2022.08
│           └── keyword
│           └── name
│           └── name</div>│       └──<button class="accordion">MS Azure 연동.</button>
<div class="accordionPanel">│           └── period
│               └── 2022.03~2022.05
│           └── keyword
│           └── name
│           └── name</div>│       └──<button class="accordion">스타자동차 상담 서비스 구축.</button>
<div class="accordionPanel">│           └── period
│               └── 2021.11~2022.03
│           └── keyword
│               └── On-Premise
│               └── REST-API
│               └── CTI(Computer Telephony Integration)
│               └── SSO(Single Sign On)
│               └── IMAP / POP3 Email
│               └── SMS
│               └── Web Socket
│               └── 카카오 상담톡
│           └── name
│           └── name</div>│       └──<button class="accordion">KB증권 카카오 상담톡 서비스 채널 구축.</button>
<div class="accordionPanel">│           └── period
│               └── 2021.07~2021.10
│           └── keyword
│               └── On-Premise
│               └── REST-API
│               └── 기간계 전문 통신(Fixed Length Format) 연동.
│               └── 이중화
│               └── Web Socket
│               └── 카카오 상담톡
│           └── role
│               └── Role
│               └── Role
│               └── Role
│               └── Role
│               └── Role
│           └── name</div>│       └──<button class="accordion">상담 웹 애플리케이션 다국어 버전 개발.</button>
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
│               └── 해외 사업 진출 성공.
│               └── 2021년도 매출 달성 기여.
│           └── sample
│               └── <a id="anchor" 
                        href="https://github.com/wido1593/Multilingual"
                        target="_blank">Spring Boot 다국어 데모</a>
│               └── <a id="anchor" 
                        href="https://github.com/wido1593/Simple_Clipboard_Copy"
                        target="_blank">Massages Properties 호출 소스 생성 프로그램</a>
</div>│
├── （株式会社）Innocence＿Design
│   └── Position
│       └── Full-stack-Developer(Intern)
│   └── Project
    </pre>
</div>