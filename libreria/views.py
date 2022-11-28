from django.shortcuts import render
from django.http import HttpResponse
from django.template import Template, Context
from .models import Producto
# Create your views here.

def inicio(request):
    doc = open('C:/Users/natha/OneDrive/Escritorio/Pagina.html')
    plt = Template(doc.read())
    doc.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)
def nosotros(request):
    return render(request, 'paginas/nosotros.html')
def home(request):
    productos = Producto.objects.all()
    data = {
        'productos': productos
    }
    return render(request, 'paginas/home.html', data)
