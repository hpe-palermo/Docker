login-git:
	@git config --global user.email "hpalermoemerick@gmail.com"
	@git config --global user.name "hpe-palermo"

install: backend-install web-install

backend-install:
	cd backend && npm install
	@echo "Dependências do backend instaladas!"

web-install:
	cd web && npm install
	@echo "Dependências do frontend instaladas!"

