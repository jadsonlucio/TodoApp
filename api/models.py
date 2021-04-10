from datetime import datetime
from django.db import models
from django.contrib.auth.models import AbstractUser
from enum import Enum

# Create your models here.

def get_curr_date():
    return datetime.now().date()

class TODOStatus(Enum):
    TODO = 0
    DOING = 1
    DONE = 2

class User(AbstractUser):
    email = models.EmailField(null=False, blank=False)

    def __str__(self):
        return f'usuario: {self.username}'

class Todo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    title = models.CharField(max_length=255)
    create_date = models.DateField(default=get_curr_date)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    status = models.PositiveIntegerField(
        choices=[(todo.value, todo.name) for todo in TODOStatus],
        default=TODOStatus.TODO.value
    )
