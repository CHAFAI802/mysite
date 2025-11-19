from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from .models import Contact
from .serializers import ContactSerializer
from django.core.mail import send_mail
from django.conf import settings

class ContactCreateView(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        contact = serializer.save()
        
        # Email automatique à l'utilisateur
        send_mail(
            subject="Nous avons bien reçu votre message",
            message=f"Bonjour {contact.name},\n\nVotre message a été reçu. Nous vous contacterons prochainement.",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[contact.email],
            fail_silently=False,
        )

        # Email de notification pour toi (admin)
        send_mail(
            subject="Nouveau message reçu",
            message=f"Nom: {contact.name}\nEmail: {contact.email}\nMessage:\n{contact.message}",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=False,
        )
