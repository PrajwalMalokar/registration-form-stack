FROM python:3.11-slim

WORKDIR /app    

ADD requirements.txt .

RUN pip install -r requirements.txt

ADD . .

EXPOSE 5000

RUN mkdir -p data

ENTRYPOINT [ "python" ]

CMD ["app.py"]