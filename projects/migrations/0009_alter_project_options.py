# Generated by Django 3.2.5 on 2021-08-22 12:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0008_auto_20210815_1647'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='project',
            options={'ordering': ['-vote_rotio', '-vote_total', 'title']},
        ),
    ]
