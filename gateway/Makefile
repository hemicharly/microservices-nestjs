build:
	docker compose -f compose.yml build

install:
	docker compose -f yarn.cli.yml run --rm yarn install

generate-index:
	docker compose -f yarn.cli.yml run --rm yarn generate-index

dev:
	docker compose -f compose.yml up

lint-format:
	docker compose -f yarn.cli.yml run --rm yarn lint:fix &&\
	docker compose -f yarn.cli.yml run --rm yarn format:fix
