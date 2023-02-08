from django.db import models


class Vacancies(models.Model):
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    salary = models.IntegerField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title
