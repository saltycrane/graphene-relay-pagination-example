from django.contrib import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView

from pagination_ex_api.schema import schema


urlpatterns = [
    path("admin/", admin.site.urls),
    # disable CSRF per graphene docs:
    # https://docs.graphene-python.org/projects/django/en/latest/tutorial-plain/#creating-graphql-and-graphiql-views
    path("graphql/", csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schema))),
]
