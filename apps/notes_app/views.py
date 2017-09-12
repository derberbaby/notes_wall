from django.shortcuts import render, redirect, HttpResponse
from .models import Note
from django.core.urlresolvers import reverse
from django.contrib import messages
import json

# Create your views here.
def index(request):
    context = {
        'notes': Note.objects.all().order_by('-created_at')
    }
    return render(request, 'notes_app/index.html', context)

def insert(request):
    result = Note.objects.insert(request.POST.copy())
    if isinstance(result, list):
        message = {'error': 'true',
        'result': result }
    else:
        note = Note.objects.get(id=result)
        message = {'error': 'false',
        'title': note.title,
        'description': note.description }
    return HttpResponse(json.dumps(message), content_type="application/json")

def delete(request, id):
    Note.objects.get(id=id).delete()
    return redirect('/')

def update(request, id):
    pass
