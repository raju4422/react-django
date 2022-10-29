from django.db import models


class EmployeeModel(models.Model):
    name = models.CharField(max_length=200)
    department = models.TextField()
    salary = models.FloatField(null=True, blank=True, default=0)

    def __str__(self):
        return self.name
