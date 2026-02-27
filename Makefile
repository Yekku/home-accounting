.PHONY: help dev dev-build dev-down dev-logs \
       prod prod-build prod-down prod-logs \
       install install-server install-client \
       server client build \
       seed seed-docker \
       clean clean-docker clean-all \
       mongo-shell status

# ——————————————————————————————————————————
# Docker Development
# ——————————————————————————————————————————

dev: ## Start all services in development mode
	docker-compose up

dev-build: ## Build and start all services (rebuilds images)
	docker-compose up --build

dev-down: ## Stop all development services
	docker-compose down

dev-logs: ## Tail logs from all dev services
	docker-compose logs -f

# ——————————————————————————————————————————
# Docker Production
# ——————————————————————————————————————————

prod: ## Start all services in production mode
	docker-compose -f docker-compose.prod.yml up -d

prod-build: ## Build and start production (rebuilds images)
	docker-compose -f docker-compose.prod.yml up -d --build

prod-down: ## Stop all production services
	docker-compose -f docker-compose.prod.yml down

prod-logs: ## Tail logs from all production services
	docker-compose -f docker-compose.prod.yml logs -f

# ——————————————————————————————————————————
# Local Development (without Docker)
# ——————————————————————————————————————————

install: install-server install-client ## Install all dependencies

install-server: ## Install server dependencies
	cd server && npm install

install-client: ## Install client dependencies
	cd client && npm install --include=dev

server: ## Start backend in dev mode (requires local MongoDB)
	cd server && npm run dev

client: ## Start Angular dev server with proxy
	cd client && npx ng serve --proxy-config proxy.conf.json

build: ## Build Angular app for production
	cd client && npx ng build --configuration production

# ——————————————————————————————————————————
# Database
# ——————————————————————————————————————————

seed: ## Seed database with demo data (local MongoDB)
	cd server && npm run seed

seed-docker: ## Seed database with demo data (Docker MongoDB)
	docker exec -it ha-server node src/seeds/index.js

mongo-shell: ## Open MongoDB shell in the running container
	docker exec -it ha-mongo mongosh home_accounting

# ——————————————————————————————————————————
# Cleanup
# ——————————————————————————————————————————

clean: ## Remove node_modules from server and client
	rm -rf server/node_modules client/node_modules

clean-docker: ## Stop containers and remove volumes
	docker-compose down -v
	docker-compose -f docker-compose.prod.yml down -v

clean-all: clean clean-docker ## Full cleanup (node_modules + Docker volumes)
	rm -rf client/dist client/.angular

# ——————————————————————————————————————————
# Info
# ——————————————————————————————————————————

status: ## Show status of Docker containers
	docker-compose ps

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
