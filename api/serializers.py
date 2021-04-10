from api.models import Todo
from rest_framework import serializers


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ['id', 'user_id', 'title', 'create_date', 'start_date', 'end_date', 'text', 'status']
    