from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Message
from .forms import MessageForm

@csrf_exempt
def index(request):
    if request.method == "POST":
        listLen = request.body
        json_data = json.loads(listLen)

        if json_data['typeWebhook'] == 'incomingMessageReceived':
            makeRecord("incoming", json_data['messageData']['textMessageData']['textMessage'])
            s4 = json_data['messageData']['textMessageData']['textMessage']
            with open('answer.txt', 'w') as f:
                f.write(s4)

        if json_data['typeWebhook'] == 'outgoingMessageReceived':
            makeRecord("outgoing", json_data['messageData']['textMessageData']['textMessage'])

        if json_data['typeWebhook'] == 'outgoingAPIMessageReceived':
            makeRecord("outgoing", json_data['messageData']['extendedTextMessageData']['text'])
        print(json_data)

    return render(request, 'index.html')

def about(request):
    return HttpResponse("<h2>Hello world</h2>")

def makeRecord(type, text):
    data = {
        "type": type,
        "text": text
    }
    form = MessageForm(data)
    form.save()
