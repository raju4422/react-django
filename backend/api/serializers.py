# import serializer from rest_framework
from rest_framework import serializers

# import model from models.py
from .models import EmployeeModel


# Create a model serializer
class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    # specify model and fields
    class Meta:
        model = EmployeeModel
        fields = ('name', 'department', 'salary')