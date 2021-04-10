from django.shortcuts import render
from rest_framework import viewsets
from api.models import Todo
from api.serializers import TodoSerializer
from rest_framework import permissions

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all().order_by('create_date')
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user).all().order_by('create_date')    
    
    def perform_create(self, todo):
        user = None
        if self.request and hasattr(self.request, "user"):
            user = self.request.user
        todo.save(user=user)