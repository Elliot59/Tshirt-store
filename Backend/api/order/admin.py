from django.contrib import admin

from api.order.models import Order
from .models import Order
# Register your models here.
admin.site.register(Order)