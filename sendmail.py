

import smtplib
from email.message import EmailMessage

sender_email = "victorgou.design@gmail.com"
rec_email = "victorgou.design@gmail.com"
password = "tixbxljsovrjcxjv"

msg = EmailMessage()
msg['Subject'] = "New GOU form petition"
msg['From'] = sender_email
msg['To'] = rec_email
msg.set_content("...form data here...")

print(msg)

server = smtplib.SMTP('smtp.gmail.com',587)
server.starttls()
server.login(sender_email, password)
print("email login succesfull")

server.send_message(msg)
print("Email has been sended from",sender_email, "to", rec_email)
