import graphene

import fishes.schema


class Query(fishes.schema.Query, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
