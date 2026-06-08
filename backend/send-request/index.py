import json
import os
import smtplib
from email.mime.text import MIMEText
from email.header import Header


def handler(event: dict, context) -> dict:
    '''
    Принимает заявку с сайта и отправляет её на почту компании.
    Args: event с httpMethod, body (name, phone, service, message)
    Returns: HTTP-ответ с результатом отправки
    '''
    method = event.get('httpMethod', 'GET')

    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': {**cors, 'Access-Control-Max-Age': '86400'}, 'body': ''}

    if method != 'POST':
        return {'statusCode': 405, 'headers': cors, 'body': json.dumps({'error': 'Method not allowed'})}

    body = json.loads(event.get('body') or '{}')
    name = str(body.get('name', '')).strip()
    phone = str(body.get('phone', '')).strip()
    service = str(body.get('service', '')).strip()
    message = str(body.get('message', '')).strip()

    if not name or not phone:
        return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'Имя и телефон обязательны'})}

    smtp_host = (os.environ.get('SMTP_HOST') or '').strip()
    smtp_user = (os.environ.get('SMTP_USER') or '').strip()
    smtp_password = (os.environ.get('SMTP_PASSWORD') or '').replace(' ', '').strip()
    notify_email = (os.environ.get('NOTIFY_EMAIL') or '').strip()

    if not all([smtp_host, smtp_user, smtp_password, notify_email]):
        return {'statusCode': 500, 'headers': cors, 'body': json.dumps({'error': 'Почта не настроена'})}

    text = (
        f'Новая заявка с сайта СМК «Основа»\n\n'
        f'Имя: {name}\n'
        f'Телефон: {phone}\n'
        f'Тип работ: {service or "не указан"}\n'
        f'Сообщение: {message or "—"}\n'
    )

    msg = MIMEText(text, 'plain', 'utf-8')
    msg['Subject'] = Header('Новая заявка с сайта', 'utf-8')
    msg['From'] = smtp_user
    msg['To'] = notify_email

    try:
        with smtplib.SMTP_SSL(smtp_host, 465) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, [notify_email], msg.as_string())
    except Exception as e:
        print(f'SMTP error: {type(e).__name__}: {e}')
        return {
            'statusCode': 500,
            'headers': {**cors, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Не удалось отправить заявку'}, ensure_ascii=False),
        }

    return {
        'statusCode': 200,
        'headers': {**cors, 'Content-Type': 'application/json'},
        'body': json.dumps({'success': True, 'message': 'Заявка отправлена'}),
    }