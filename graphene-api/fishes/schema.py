from graphene import ObjectType, relay
from graphene_django import DjangoConnectionField, DjangoObjectType

from fishes.models import Fish


class FishNode(DjangoObjectType):
    class Meta:
        model = Fish
        interfaces = (relay.Node,)


class Query(ObjectType):
    fish = relay.Node.Field(FishNode)
    all_fishes = DjangoConnectionField(FishNode)
