# otus-js-3

* server.js, log.js

Запустить локально тестовый Web Server. Два файла - log.js и server.js. Проект запускается командой `node server`.

 В файле log.js нужно создать и экспортировать экземпляр EventEmitter. Этот объект должен иметь listener на событие 'request', который будет выводить в консоль параметры аргумента - объекта request (например, url запроса).

Внутри server.js нужно импортировать объект log из log.js и запустить простейший web server. На каждый запрос к серверу на объекте log нужно триггерить событие 'request' с параметром - объектом запроса.

* promisify.js

Написать функцию promisify
Написать функцию promisify, которая будет работать с callback функциями библиотек Node.
Возможные callback функции:
- default - вызывается с ошибкой или результатом
- single - только с ошибкой

Примеры API с callbacks:

```
// default
fs.readFile('/etc/passwd', (err, data) => {
if (err) throw err
console.log(data)
})

// single
fs.access('/etc/passwd', fs.constants.R_OK,
(err) => {
console.log(err ? 'no access!' : 'read')
})
```