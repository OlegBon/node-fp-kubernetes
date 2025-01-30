# CBS Node Final Project

## Опис

Цей проект є фінальним завданням для курсу з Node.js. Метою проекту є створення повноцінного веб-додатку, що дозволяє користувачам реєструватися, логінитися, переглядати список користувачів та виконувати інші дії.

## Функціонал

- Реєстрація користувачів
- Авторизація користувачів
- Перегляд списку зареєстрованих користувачів
- Очищення бази даних користувачів
- Вихід із системи

## Використані технології

- Node.js
- Express.js
- React.js
- Redux Toolkit
- Axios
- React Router

## Вимоги до середовища

- Kubernetes
- Docker

## Інсталяція

1. Клонування репозиторію:
   ```sh
   git clone https://github.com/OlegBon/node-fp-kubernetes.git
   ```
2. Перехід до директорії проекту:

   ```sh
   cd node-fp-kubernetes
   ```

## Запуск проекту у Kubernetes

1. Створення образів Docker та завантаження їх до Docker Hub:

   ```sh
   docker build -t olegbon/node-fp-backend:latest -f backend/Dockerfile .
   docker push olegbon/node-fp-backend:latest

   docker build -t olegbon/node-fp-frontend:latest -f frontend/Dockerfile .
   docker push olegbon/node-fp-frontend:latest

   docker build -t olegbon/node-fp-database:latest -f database/Dockerfile .
   docker push olegbon/node-fp-database:latest
   ```

2. Застосування конфігураційних файлів Kubernetes:
   ```sh
   kubectl apply -f namespace.yaml
   kubectl apply -f configmap.yaml
   kubectl apply -f backend-deployment.yaml
   kubectl apply -f backend-service.yaml
   kubectl apply -f database-deployment.yaml
   kubectl apply -f database-service.yaml
   kubectl apply -f frontend-deployment.yaml
   kubectl apply -f frontend-service.yaml
   ```

## Файлова структура

```text
node-fp-kubernetes/
│
├── .gitignore
├── backend-deployment.yaml
├── backend-service.yaml
├── configmap.yaml
├── database-deployment.yaml
├── database-service.yaml
├── frontend-deployment.yaml
├── frontend-service.yaml
├── LICENSE
├── namespace.yaml
└── README.md
└── README.md
```

## Структура проекту

### Backend

- `config/`: Конфігураційні файли проекту.
  - `config.js`: Основні конфігурації.
  - `db.js`: Налаштування бази даних.
- `controllers/`: Контролери для обробки запитів.
  - `authController.js`: Контролер для аутентифікації.
  - `userController.js`: Контролер для управління користувачами.
- `middleware/`: Проміжні програмні засоби.
  - `authMiddleware.js`: Проміжний засіб для аутентифікації.
- `models/`: Моделі бази даних.
  - `index.js`: Індексація моделей.
  - `User.js`: Модель користувача.
- `routes/`: Маршрути для API.
  - `authRoutes.js`: Маршрути для аутентифікації.
  - `userRoutes.js`: Маршрути для користувачів.
- `tests/`: Тестування.
  - `authMiddleware.test.js`: Тести для authMiddleware.
  - `tokenUtils.test.js`: Тести для utils/tokenUtils.
- `utils/`: Утиліти та допоміжні модулі.
  - `tokenUtils.js`: Функції для роботи з токенами.
- `babel.config.js`: Конфігурація Babel.
- `jest.config.js`: Конфігурація Jest.
- `package.json`: Залежності та налаштування проекту.
- `server.js`: Основний файл сервера.

### Frontend

- `public/`: Публічні файли, доступні з фронтенду.
- `src/`: Вихідний код клієнтської частини.
  - `__mocks__/`: Моки для тестування.
    - `axios.js`: Мок для axios.
  - `components/`: Компоненти React.
    - `AppRoutes.js`: Маршрутизація додатку.
    - `InputField.js`: Компонент вводу.
    - `LoadingSpinner.js`: Компонент індикатора завантаження.
    - `ProtectedRoute.js`: Компонент захищеного маршруту.
    - `UserList.js`: Компонент списку користувачів.
  - `data/`: Сховища даних та зменшувачі Redux.
    - `reducers/`: Зменшувачі для Redux.
      - `UserList.js`: Зменшувач для списку користувачів.
    - `store/`: Сховище Redux.
      - `store.js`: Конфігурація сховища.
  - `pages/`: Сторінки додатку.
    - `Error.js`: Сторінка помилки.
    - `Login.js`: Сторінка входу.
    - `Logout.js`: Сторінка виходу.
    - `Register.js`: Сторінка реєстрації.
    - `Users.js`: Сторінка користувачів.
  - `utils/`: Утиліти та допоміжні модулі.
    - `fetchUsers.js`: Функція для отримання користувачів.
    - `registerUser.js`: Функція для реєстрації користувачів.
    - `verifyToken.js`: Функція для перевірки токенів.
  - `App.js`: Основний компонент додатку.
  - `index.css`: Основні стилі додатку.
  - `index.js`: Вхідна точка додатку.
  - `logo.svg`: Лого додатку.
- `babel.config.js`: Конфігурація Babel.
- `config-overrides.js`: Налаштування перевизначень.
- `jest.config.js`: Конфігурація Jest.
- `package.json`: Залежності та налаштування проекту.

## Маршрути API

### Аутентифікація

- `POST /auth/register` - Реєстрація нового користувача
- `POST /auth/login` - Вхід користувача
- `GET /auth/verify-token` - Перевірка токену користувача
- `POST /auth/logout` - Вихід користувача

### Користувачі

- `GET /users` - Отримати всіх користувачів (потрібен токен)
- `POST /users/clear` - Очистити базу даних (потрібен токен)

## Автори

- [Oleg Bon](https://github.com/OlegBon)

## Ліцензія

Цей проект ліцензовано відповідно до ліцензії MIT. Див. файл [LICENSE](./LICENSE) для деталей.
