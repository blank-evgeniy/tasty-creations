# Tasty Creations - веб-приложение о рецептах на Next.js

### :pushpin: Открыть сайт: https://tasty-creations-coral.vercel.app/


:heavy_exclamation_mark: **Первая загрузка данных с сервера может длиться около минуты в связи с использованием бесплатного хостинга для бэкенда**

![tasty-creations-coral vercel app_(Nest Hub Max) (1)](https://github.com/user-attachments/assets/344532ce-7476-4c47-81c4-8cf02ef0d69a)

###  API разработанный мною на Express.js, MongoDB: https://github.com/blank-evgeniy/tasty-creations-backend

## :wrench: Используемые технологии:

- TypeScript
- Next.js
- React Query
- Axios
- Framer Motion
- React Hook Form

## :star: Особенности проекта:

- Авторизация с помощью JWT-токена и cookie
- Сохранение рецептов в книгу полльзователя
- Использование React Query для кэширования запросов, также использование HydrationBoundary для работы SSR
- Axios instance с interceptors для удобной работы с api
- Приватные роуты при помощи Next.js middleware
- Валидация формы регистрации и входа в акканунт
- Анимации переходов страниц и появления компонентов при помощи Framer Motion
