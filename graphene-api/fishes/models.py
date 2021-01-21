from django.db import models


class Fish(models.Model):
    description = models.TextField()
    icon_url = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    price = models.IntegerField()
