# import viewsets
from rest_framework import viewsets

# import local data
from .serializers import EmployeeSerializer
from .models import EmployeeModel


# create a viewset
class EmployeeViewSet(viewsets.ModelViewSet):
    # define queryset
    queryset = EmployeeModel.objects.all()

    # specify serializer to be used
    serializer_class = EmployeeSerializer
