from collections import Iterable

from graphene import Boolean, Field, Int, List, ObjectType, String
from graphene.relay import Connection, ConnectionField, PageInfo
from graphql_relay import connection_from_list

from .helpers import convert_connection_args_to_page_options
from .pagination import create_page_cursors


class PageCursor(ObjectType):
    cursor = String()
    is_current = Boolean()
    page = Int()


class PageCursors(ObjectType):
    around = List(PageCursor)
    first = Field(PageCursor)
    last = Field(PageCursor)
    previous = Field(PageCursor)


class ArtsyConnection(Connection):
    class Meta:
        abstract = True

    page_cursors = Field(PageCursors)


class ArtsyConnectionField(ConnectionField):
    @classmethod
    def resolve_connection(cls, connection_type, args, resolved):
        # start from graphene.relay.connection.ConnectionField (v2.1.8)
        # https://github.com/graphql-python/graphene/blob/v2.1.8/graphene/relay/connection.py#L140-L157
        if isinstance(resolved, connection_type):
            return resolved
        assert isinstance(resolved, Iterable), (
            "Resolved value from the connection field have to be iterable or instance of {}. "
            'Received "{}"'
        ).format(connection_type, resolved)
        connection = connection_from_list(
            resolved,
            args,
            connection_type=connection_type,
            edge_type=connection_type.Edge,
            pageinfo_type=PageInfo,
        )
        connection.iterable = resolved
        # end from graphene.relay.connection.ConnectionField (v2.1.8)

        page_options = convert_connection_args_to_page_options(args)
        # TODO: use Fish.objects.count() to get total_records
        # TODO: improve db query performance using approach from DjangoConnectionField
        total_records = 80
        page_cursors = create_page_cursors(page_options, total_records)
        connection.page_cursors = page_cursors

        return connection
