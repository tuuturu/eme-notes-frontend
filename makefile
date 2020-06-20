

run: .env
	@docker-compose up -d
	@npm run serve

.env:
	@echo "VUE_APP_BASE_URL=http://localhost:8080" > .env
	@echo "VUE_APP_UPSTREAM_URL=http://localhost:4554/api/notes-service" >> .env
	@echo "VUE_APP_GATEKEEPER_URL=http://localhost:4554" >> .env
	@echo "" >> .env
	@echo "GATEKEEPER_DISCOVERY_URL=" >> .env
	@echo "GATEKEEPER_CLIENT_ID=" >> .env
	@echo "GATEKEEPER_CLIENT_SECRET=" >> .env
