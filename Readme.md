# Личный проект «Мишка»

[![Project check][check-image]][check-url]

* Студент: [Диана Павлова](https://up.htmlacademy.ru/adaptive/28/user/2189703).
* Наставник: [Сергей Артёмов](https://htmlacademy.ru/profile/firefoxic).

---

В корне проекта находятся только его конфиги. А также [Contributing.md](Contributing.md) — полезное руководство по внесению изменений.

**Исходные файлы вёрстки должны лежать в `source/`.**

Собирается проект в `build/`.

---

## Установка зависимостей проекта

Сложная сборка в этом проекте не заведётся без дополнительных инструментов — зависимостей. Поэтому их необходимо установить.

### 1. Терминал

Для установки зависимостей понадобится терминал. В Linux и macOS он уже есть, а в Windows лучше установить _git-bash_, который идёт в комплекте с самим [Git](https://git-scm.com/download/windows).

### 2. Node.js

Зависимости работают в среде _node.js_, которую тоже нужно установить, но лучше не с помощью установщика с официального сайта, а через менеджер версий ноды. Есть разные менеджеры, но проще всего установить и использовать [_volta_](https://volta.sh/).

Для установки _volta_ в Linux и macOS в терминале выполни:

```shell
curl https://get.volta.sh | bash
```

В Windows проще скачать и запустить [установщик](https://github.com/volta-cli/volta/releases/download/v1.1.1/volta-1.1.1-windows-x86_64.msi).

После установки _volta_ перезапусти (или просто открой новый) терминал и выполни установку _node.js_ свежей LTS версии (на данный момент 18.15.0):

```shell
volta install node
```

После этого в терминале в директории проекта запусти:

```shell
node -v
```

Это проверка версии _node.js_, но так как в проекте для _volta_ указана необходимая версия 16.19.1, _volta_ сначала запустит установку этой версии и только после этого выдаст её номер.

После этого любые npm-команды будут выполняться в требуемой проекту версии (16.19.1), а вне этого проекта будет запускаться свежая версия (18.15.0).

### 3. Зависимости

Вместе с нодой нам стал доступен её менеджер пакетов — _npm_. Он нам нужен в первую очередь для установки зависимости проекта (но не только).

Для этого в терминале, находясь в директории проекта, выполни:

```shell
npm ci
```

> #### Правило трёх «не» после установки зависимостей
>
> * **Не** обращай внимание на предупреждения во время установки.
> * **Не** запускай предлагаемую команду `npm audit` — это только всё сломает.
> * **Не** обновляй сам _npm_, как бы он не просил об этом.

После установки зависимостей можно запускать сборку для разработки:

```shell
npm start
```

При этом запустится и локальный сервер в папке `build/`, в которую собирается проект из папки `source/`, а в брауезере откроется разрабатываемый сайт и будет обновляться при обновлении файлов в проекте.

---

<a href="https://htmlacademy.ru/intensive/adaptive"><img align="left" width="60" height="60" alt="HTML Academy" src="https://raw.githubusercontent.com/htmlacademy-adaptive/2189703-mishka-28/master/source/icons/htmlacademy.svg"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[HTML и CSS. Адаптивная вёрстка и автоматизация](https://htmlacademy.ru/intensive/adaptive)» от [HTML Academy](https://htmlacademy.ru).

[check-image]: https://github.com/htmlacademy-adaptive/2189703-mishka-28/workflows/Project%20check/badge.svg?branch=master
[check-url]: https://github.com/htmlacademy-adaptive/2189703-mishka-28/actions
