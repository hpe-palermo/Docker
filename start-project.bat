@echo off

REM Configuração global do Git
git config --global user.email "hpalermoemerick@gmail.com"
git config --global user.name "hpe-palermo"

echo Configuracao do Git concluida.

@REM Instalação dos pacotes do backend
cd ./backend
npm install

echo Pacotes do backend instalados com sucesso.

@REM Instalação dos pacotes do backend
cd ../web
npm install

@REM echo Pacotes do frontend instalados com sucesso.
