Furniture ERP (PWA) — v1.0
Сборка от: 2025-08-17

Содержимое: index.html, manifest.json, service-worker.js, initial_data.json (встроено в index.html).
Открывайте index.html прямо в браузере на ПК. Для телефона — разместите папку на GitHub Pages/Netlify/Cloudflare Pages и добавьте сайт на экран Домой.

Повторены сценарии:
- Создание инвойса по Order ID (IssueDate=сегодня, DueDate=+21 день, сумма из поля Total/Amount).
- Удаление Hardware в PO (1 — выделенная строка; 2 — все Hardware по Order ID).
- Назначение менеджера через всплывающий выбор (берётся из листа Managers или из существующих значений).
- Фильтры статусов для Orders, KPI.

Данные сохраняются в LocalStorage, экспорт/импорт — во вкладке Импорт/Экспорт.