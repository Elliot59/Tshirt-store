from django.urls import path, include
from . import views

urlpatterns = [
    path('gettoken/<str:id>', views.generate_token, name='token.generate'),
    path('process/<str:id>', views.process_payment, name='payment.process'),

]
