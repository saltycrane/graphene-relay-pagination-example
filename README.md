# Graphene Relay Artsy Pagination Example

This is an example implementation of the [Artsy Engineering GraphQL pagination API](https://artsy.github.io/blog/2020/01/21/graphql-relay-windowed-pagination/) for [Relay](https://relay.dev/) using [Graphene](https://graphene-python.org/), [Django](https://www.djangoproject.com/), and Python ported from the [TypeScript code in `artsy/metaphysics`](https://github.com/artsy/metaphysics/blob/11bcc29569e3a9bd9a8f9b2f0a31af1e65e88986/src/schema/v2/fields/pagination.ts) and [`relay-cursor-paging`](https://github.com/darthtrevino/relay-cursor-paging/blob/177eca6975ef7cd602caf2f92edbeed00cabf3b9/src/getPagingParameters.ts).

## Graphene GraphQL API server

- Install and set up
    ``` sh
    $ cd graphene-api
    $ python3 -m venv venv
    $ source venv/bin/activate
    $ pip install -r requirements.txt
    $ docker-compose up -d
    $ ./bin/resetdb
    $ ./manage.py migrate
    $ ./manage.py loaddata fishes
    $ ./manage.py runserver
    ```

- Go to http://127.0.0.1:8000/graphql/ in the browser

- Run the following query:
    ``` graphql
    {
      allFishes(first: 5) {
        pageCursors {
          previous {
            cursor
            isCurrent
            page
          }
          first {
            cursor
            isCurrent
            page
          }
          last {
            cursor
            isCurrent
            page
          }
          around {
            cursor
            isCurrent
            page
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            id
            name
            description
          }
        }
      }
    }
    ```

### TODO

- use `Fish.objects.count()` to get total_records
- improve db query performance using approach from `DjangoConnectionField`

### Relevant code links

#### TypeScript
- https://github.com/artsy/metaphysics/blob/master/src/schema/v2/fields/pagination.ts
- https://github.com/artsy/metaphysics/blob/master/src/lib/helpers.ts#L90-L104
- https://github.com/darthtrevino/relay-cursor-paging/blob/v0.2.0/src/getPagingParameters.ts

#### Python
- https://github.com/graphql-python/graphene/blob/v2.1.8/graphene/relay/connection.py
