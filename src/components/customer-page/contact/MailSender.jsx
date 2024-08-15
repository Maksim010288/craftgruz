import email_js from '@emailjs/browser';

function sendEmail(point_of_departure, destination, weight, name, phone, email) {
    const infoSendMessage = {
        serviceId: "service_zwg13et",
        templateId: "template_lrk5m1d",
        publicKey: "LddzjoFggsghM3M4g"
    }

    const message = {
        from_name: name,
        email: email,
        message:
            "Відпрвка: " + point_of_departure +
            "\nПрибуття: " + destination +
            "\nВага: " + weight +
            "\nТелефон: " + phone
    }

    email_js.send(`${infoSendMessage.serviceId}`, `${infoSendMessage.templateId}`, message,
        {publicKey: `${infoSendMessage.publicKey}`,});
}