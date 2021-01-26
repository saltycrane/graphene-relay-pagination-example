from django_filters import FilterSet, OrderingFilter
from graphene import ObjectType, relay
from graphene_django import DjangoObjectType

from artsy_relay_pagination.fields import ArtsyConnection, ArtsyConnectionField
from fishes.models import Fish


class FishFilter(FilterSet):
    class Meta:
        model = Fish
        fields = {"name": ["exact", "contains"], "price": ["lt", "gt"]}

    order_by = OrderingFilter(fields=("name", "price"))


class FishNode(DjangoObjectType):
    class Meta:
        model = Fish
        interfaces = (relay.Node,)
        connection_class = ArtsyConnection


class Query(ObjectType):
    fish = relay.Node.Field(FishNode)
    all_fishes = ArtsyConnectionField(FishNode, filterset_class=FishFilter)
