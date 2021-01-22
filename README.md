# Graphene Relay Artsy Pagination Example

## Graphene GraphQL API server

This is an example GraphQL pagination API for [Relay](https://relay.dev/) using [Graphene](https://graphene-python.org/) and [Django](https://www.djangoproject.com/). It augments the Relay [Connection](https://relay.dev/graphql/connections.htm) type with additional metadata which can be used for an Amazon-style, discrete-paged, pagination UI (as opposed to an infinite scroll UI).

This API was designed by Artsy Engineering. Read the excellent article: [Effortless Pagination with GraphQL and Relay? Really!](https://artsy.github.io/blog/2020/01/21/graphql-relay-windowed-pagination/) This repo is example implementation of Artsy API in Graphene and Python. I ported the [TypeScript code in `artsy/metaphysics`](https://github.com/artsy/metaphysics/blob/11bcc29569e3a9bd9a8f9b2f0a31af1e65e88986/src/schema/v2/fields/pagination.ts) and [`relay-cursor-paging`](https://github.com/darthtrevino/relay-cursor-paging/blob/177eca6975ef7cd602caf2f92edbeed00cabf3b9/src/getPagingParameters.ts) to Python for demonstration purposes.

For a vanilla Graphene Relay pagination API, which works well with an infinite scroll UI, see [my basic pagination example](https://github.com/saltycrane/graphene-relay-pagination-example/tree/basic-example).

### Usage

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
      allFishes(first: 5, orderBy: "name") {
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
            iconUrl
            description
            name
            price
          }
        }
      }
    }
    ```

#### Generate GraphQL schema

``` sh
$ ./manage.py graphql_schema --schema pagination_ex_api.schema.schema --out ../schema.graphql
```

### Database notes

Data is stored in a PostgreSQL database running in Docker. It is seeded with fixture data. Django is configured to log SQL queries to the console and show that SQL queries use `COUNT`, `LIMIT`, and `OFFSET`. Example:

``` sql
SELECT COUNT(*) AS "__count" FROM "fishes_fish";
SELECT "fishes_fish"."id", "fishes_fish"."description", "fishes_fish"."icon_url", "fishes_fish"."name", "fishes_fish"."price" FROM "fishes_fish" ORDER BY "fishes_fish"."name" ASC LIMIT 5 OFFSET 5;
```

### Interesting code in this repo

- https://github.com/saltycrane/graphene-relay-pagination-example/blob/artsy-example/graphene-api/fishes/schema.py
- https://github.com/saltycrane/graphene-relay-pagination-example/blob/artsy-example/graphene-api/artsy_relay_pagination/fields.py
- https://github.com/saltycrane/graphene-relay-pagination-example/blob/artsy-example/graphene-api/artsy_relay_pagination/pagination.py

### Relevant code links in other repos

#### TypeScript

- https://github.com/artsy/metaphysics/blob/production--2021-01-22--15-05-38/src/schema/v2/fields/pagination.ts
- https://github.com/artsy/metaphysics/blob/production--2021-01-22--15-05-38/src/lib/helpers.ts#L90-L104
- https://github.com/darthtrevino/relay-cursor-paging/blob/v0.2.0/src/getPagingParameters.ts
- https://github.com/graphql/graphql-relay-js/blob/v0.5.4/src/connection/arrayconnection.js

#### Python
- https://github.com/graphql-python/graphene-django/blob/v2.15.0/graphene_django/filter/fields.py
- https://github.com/graphql-python/graphene-django/blob/v2.15.0/graphene_django/fields.py#L132-L177
- https://github.com/graphql-python/graphql-relay-py/blob/v2.0.1/graphql_relay/connection/arrayconnection.py#L30-L104

## React Relay Next.js webapp

### Usage

- Install
  ``` sh
  $ cd react-relay-webapp
  $ npm install
  $ npm run devserver
  ```

- Go to http://127.0.0.1:3000 in the browser
