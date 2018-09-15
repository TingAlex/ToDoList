from rest_framework import serializers
from todos.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'priority', 'message', 'finish', 'start_at', 'end_at')
