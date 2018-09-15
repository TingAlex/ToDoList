# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Todo(models.Model):
    priority = models.IntegerField()
    message = models.CharField(max_length=300)
    finish = models.BooleanField(default=False)
    start_at = models.DateTimeField()
    end_at = models.DateTimeField()

    class Meta:
        ordering = ('start_at',)

    def __str__(self):
        return self.message
