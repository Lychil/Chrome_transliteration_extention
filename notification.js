const NOTIFICATIONS = {
    SUCCESS_TRANSPILE: "Транслитерация выполнена и текст добавлен в буфер обмена.",
    ERROR_TRANSPILE: "При транслитерации произошла ошибка, попробуйте снова.",
    ERROR_NO_TEXT: "Текст для транслитерации не выделен."
};

const showNotification = (message, isOk) => {
    const notification = document.createElement("div");
    notification.textContent = message;
    Object.assign(notification.style, {
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        background: isOk ? "#4caf50" : "#AA0000",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "16px",
        zIndex: "10000",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
        animation: "fadeOut 2s forwards",
    });

    // Анимация скрытия через CSS
    const style = document.createElement("style");
    style.textContent = `
        @keyframes fadeOut {
            0% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
        style.remove();
    }, 3000);
};
