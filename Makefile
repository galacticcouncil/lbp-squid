process: migrate
	@node -r dotenv/config lib/processor.js


build:
	@npm run build

build-processor-image:
	@docker build . --target processor -t squid-processor

build-query-node-image:
	@docker build . --target query-node -t query-node

build-images: build-processor-image build-query-node-image

serve:
	@npx squid-graphql-server --subscriptions


migrate:
	@npx squid-typeorm-migration apply


codegen:
	@npx squid-typeorm-codegen


typegen:
	@npx squid-substrate-typegen typegen.json


up:
	@docker-compose up -d


down:
	@docker-compose down

restart:
	rm -rf db/migrations/*.js
	rm -rf src/model/generated
	npx squid-substrate-typegen typegen.json
	docker-compose down
	sleep 1
	docker-compose up -d
	sleep 2
	npx squid-typeorm-codegen
	npm run build
	npx squid-typeorm-migration generate || true
	npx squid-typeorm-migration apply
	node -r dotenv/config lib/processor.js

.PHONY: build serve process migrate codegen typegen up down
