from __future__ import unicode_literals

from django.db import models
from django.contrib import messages

# Create your models here.
class NoteManager(models.Manager):
    def insert(request, data):
        messages = []

        if len(data['title']) == 0:
            messages.append('You suck, y u no give title')

        if len(data['description']) == 0:
            messages.append('Add a message!')

        if len(messages) > 0:
            return messages
        else:
            new_note = Note.objects.create(title=data['title'], description=data['description'])
            return new_note.id

class Note(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = NoteManager()
