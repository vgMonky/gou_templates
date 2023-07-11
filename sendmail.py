
#!/usr/bin/env python3

import smtplib


sender_email = "victorgou.design@gmail.com"
rec_email = "victorgou.design@gmail.com"
password = "tixbxljsovrjcxjv"
print("email login succesfull")

subject = "New GOU form petition"
body = "...form data here..."

message = f'Subject: {subject}\n\n{body}'

print(message)

server = smtplib.SMTP('smtp.gmail.com',587)
server.starttls()
server.login(sender_email, password)
server.sendmail(sender_email,rec_email,message)

print("Email has been sended to",rec_email)
