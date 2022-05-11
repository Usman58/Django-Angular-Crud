from django.shortcuts import render
from .models import Student
from rest_framework.response import Response
from rest_framework.views import APIView
import json
from .serializers import StudentSerializer
class getUsers(APIView):
    def get(self,request):
        users=Student.objects.all()
        serializer=StudentSerializer(users,many=True)
        return Response(serializer.data)
class getUser(APIView):
    def get(self,request,pk):
        user=Student.objects.get(id=pk)
        serializer=StudentSerializer(user)
        return Response(serializer.data)
class createUser(APIView):
    def post(self,request):
        user = StudentSerializer(data=request.data)
        print(request.data)
        if user.is_valid():
            user.save()
            return Response(user.data)
        else:
            return Response("Not added successfully")
class updateUser(APIView):
    def put(self,request,pk):
        user = Student.objects.get(id=pk)
        data=StudentSerializer(instance=user,data=request.data)
        print(request.data)
        print(data)
        if data.is_valid():
            data.save()
            return Response(data.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
class deleteUser(APIView):
    def delete(self,request,pk):
        user = Student.objects.get(id=pk)
        if user:
            user.delete()
            return Response("Successfully deleted")
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
