# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from todos.models import Todo
from todos.serializers import TodoSerializer
from rest_framework import generics

# Create your views here.


class TodoListCreate(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class TodoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
