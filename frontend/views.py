from django.shortcuts import render


def index(request):
    return render(request, 'frontend/index.html')


def oauth(request):
    return render(request, 'frontend/oauth.html')
