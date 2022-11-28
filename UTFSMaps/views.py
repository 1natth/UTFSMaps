from django.shortcuts import render
from django.http import HttpResponse
from django.template import Template, Context

# Create your views here.

def nosotros(request):
    doc = open('C:/Users/natha/OneDrive/Escritorio/django/UTFSMaps/libreria/templates/paginas/ed_a.html')
    plt = Template(doc.read())
    doc.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)

def ed_f(request):
    doc = open('C:/Users/natha/OneDrive/Escritorio/django/UTFSMaps/libreria/templates/paginas/ed_f.html')
    plt = Template(doc.read())
    doc.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)

def ed_b(request):
    doc = open('C:/Users/natha/OneDrive/Escritorio/django/UTFSMaps/libreria/templates/paginas/ed_b.html')
    plt = Template(doc.read())
    doc.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)

def ed_c(request):
    doc = open('C:/Users/natha/OneDrive/Escritorio/django/UTFSMaps/libreria/templates/paginas/ed_c.html')
    plt = Template(doc.read())
    doc.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)

def ed_e(request):
    doc = open('C:/Users/natha/OneDrive/Escritorio/django/UTFSMaps/libreria/templates/paginas/ed_e.html')
    plt = Template(doc.read())
    doc.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)