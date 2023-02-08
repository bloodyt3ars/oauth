from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', include('frontend.urls')),
    path('', include('social_django.urls', namespace='social')),
    path('accounts/profile/', RedirectView.as_view(url='http://127.0.0.1:8000/'))
]
