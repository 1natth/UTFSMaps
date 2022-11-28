"""UTFSMaps URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import include, re_path
from UTFSMaps.views import nosotros, ed_f, ed_b, ed_c, ed_e
from django.conf import settings
from django.conf.urls.static import static

from libreria.views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('libreria.urls')),
    path('edificio_a/',nosotros),
    path('edificio_f/',ed_f),
    path('edificio_b/',ed_b),
    path('edificio_c/',ed_c),
    path('edificio_e/', ed_e)
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL , document_root = settings.STATICFILES_DIRS[0])

