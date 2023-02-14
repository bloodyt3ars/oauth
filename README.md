# oauth
## Оглавление
* ### [OAuth](#defenition)
* ### [Как работает протокол?](#how)
* ### [Немного определений](#def)
* ### [Пример](#example)


## Что такое OAuth 2.0 <a name="defenition"></a>
OAuth 2.0 — это стандартный отраслевой протокол для авторизации. OAuth 2.0 фокусируется на простоте разработчика клиента, предоставляя определенные потоки авторизации для веб-приложений, настольных приложений, мобильных телефонов и устройств в жилых комнатах.

OAuth 2.0 — протокол авторизации, позволяющий выдать одному сервису (приложению) права на доступ к ресурсам пользователя на другом сервисе. Протокол избавляет от необходимости доверять приложению логин и пароль, а также позволяет выдавать ограниченный набор прав, а не все сразу.

## Как работает OAuth 2.0 <a name="how"></a>

Картинка взята с интернета
![image](https://user-images.githubusercontent.com/56675669/218710273-df63f373-5b54-4ae8-a391-e720a6fe4550.png)

1. Приложение запрашивает у пользователя разрешение на доступ к серверу ресурсов.
2. После получения разрешения приложение сообщает об этом авторизационному серверу, а также предоставляет ему сведения о себе.
3. Сервер авторизации проверяет подлинность разрешения и предоставленных сведений о приложении. В случае успешной проверки генерируется токен доступа.
4. Далее приложение обращается к серверу ресурсов, предоставляя токен в качестве подтверждения пройденной авторизации.
5. Сервер ресурсов проверяет действительность токена и выдает приложению доступ к запрашиваемому ресурсу.

Своими словами

1. Сайт(Приложение) просит пользователя авторизироваться.
2. Пользователя перенаправляют на страницу авторизации.
3. Пользователь разрешает доступ к своим данным аккаунта сервиса(через какое происходит регистрация, в моем случае это ВК).
4. После нас редиректит на callback URL. Это адрес, который указали при регистрации приложении на сервере авторизации. В этот URL подставляется authorization_code и client_id в GET параметры.
5. Приложение формирует POST запрос к серверу авторизации с authorization_code и client_id в качестве параметра.
6. Сервер авторизации проверяет authorization_code и client_id и возращает access_token.
7. Используя access_token приложение подверждает, что пользователь прошел авторизацию.
8. Сервер авторизации проверяет валидность токена и выдает приложению доступ к ресурсам пользователя.

## Немного определений <a name="def"></a>

### Access Tokens
Токен доступа OAuth — это токен, который клиент OAuth использует для выполнения запросов к серверу ресурсов. Обычно имеет короткий срок жизни.

### Refresh Tokens
Токен обновления OAuth — это токен, который клиент OAuth может использовать для получения нового токена доступа по истечению его времени жизни. Обычно представляется на длительный срок.

Когда токен доступа истекает, с помощью токена обновления мы получаем новый токен доступа.

### Bearer Token
Дословно переводиться как токен предъявителя. Bearer Token обычно представляет собой какое-то зашифрованное значение, созданное сервером аутентификации. Использование этого токена не требует доказательств владения. Наиболее распространенный.

### JWT
JWT рассшифровывается как JSON Web Token. Представляет собой токен состоящий из 3х частей. Header, payload и signature.

Что это значит?

В header указывается информация о токене. В payload указывается пользовательская информация. И после этого signature формируется на основе header и payload. Это означает, что мы не сможем поменять данные в header и payload. Т.к. signature перестанет совпадать и доступ будет заблокирован.

### Client id
Сервер авторизации выдает приложению клиентский идентификатор. Client id - служит для идентификации зарегистрированного приложения. Он не является секретным.

### Client sercet
Грубо говоря - это пароль нашего приложения. Сервер проверяет подлиность нашего приложения с помощью client sercet в момент запроса приложениям к ресурсам сервера.

## Пример <a name="example"></a> 

Вот так выглядит исходная страница

![image](https://user-images.githubusercontent.com/56675669/218688397-a4a23073-3244-410f-82ad-28371887097b.png)

При переходе на вкладку http://127.0.0.1:8000/oauth/ мы получаем

![image](https://user-images.githubusercontent.com/56675669/218681517-a83c6312-9edf-4535-9195-2664f9d8d6e2.png)

При нажатии на кнопку

![image](https://user-images.githubusercontent.com/56675669/218681585-65925e61-c751-46ca-adc3-257aabb63a73.png)

После редиректимся на главную страницу и получаем доступ к данным

![image](https://user-images.githubusercontent.com/56675669/218685136-adaa3840-a3c5-4c10-a113-02abd723e16d.png)

