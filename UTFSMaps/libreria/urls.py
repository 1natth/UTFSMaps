from django.urls import URLPattern, path
from . import views
from .views import home

urlpatterns = [
    path('', home, name='home')
]