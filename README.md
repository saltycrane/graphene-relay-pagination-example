# graphene-relay-basic-pagination-example

A basic example GraphQL pagination API for [Relay](https://relay.dev/) using [Graphene](https://graphene-python.org/) and [Django](https://www.djangoproject.com/).

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
                    description
                    iconUrl
                    name
                    price
                }
            }
        }
    }
    ```
