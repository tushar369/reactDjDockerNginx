from django.shortcuts import render, HttpResponse
# Create your views here.

def homeview(request):
    return HttpResponse('This is homepage')