from django.db import migrations
from api.user.models import CustomUser

class Migration(migrations.Migration):
    def seed_data(apps, schema_editior):
        user = CustomUser(name='elliot', 
                            email='elliot.59@outlook.com', 
                            is_staff = True, 
                            is_superuser=True, 
                            phone='01537593433', 
                            sex='Male')

        user.set_password('25795')
        user.save()

    dependencies = [

    ]

    operations = [
        migrations.RunPython(seed_data)
    ]