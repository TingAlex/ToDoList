from django.conf.urls import url
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^api/todo/$', views.TodoListCreate.as_view()),
    url(r'^api/todo/(?P<pk>[0-9]+)/', views.TodoDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
