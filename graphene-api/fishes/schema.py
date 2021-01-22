from graphene import ObjectType, relay
from graphene_django import DjangoObjectType

from artsy_relay_pagination.fields import ArtsyConnection, ArtsyDjangoConnectionField
from fishes.models import Fish


class FishNode(DjangoObjectType):
    class Meta:
        model = Fish
        interfaces = (relay.Node,)
        connection_class = ArtsyConnection


class Query(ObjectType):
    fish = relay.Node.Field(FishNode)
    all_fishes = ArtsyDjangoConnectionField(FishNode)
