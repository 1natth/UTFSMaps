from msilib.schema import Class
from django.contrib import admin
from .models import Marca, Producto
# Register your models here.

class ProductoAdmin(admin.ModelAdmin):
    list_display = ["nombre", "marca","imagen"]
    list_editable = ["imagen"]
    search_fields = ["nombre"]
    list_filter = ["marca", "nombre"]


admin.site.register(Marca)
admin.site.register(Producto, ProductoAdmin)