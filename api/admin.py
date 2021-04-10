from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from api.models import Todo, User

# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Todo)