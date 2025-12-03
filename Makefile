
PIP = .venv/bin/pip3

BEDROCK = ".bedrock"
RLS_ASSETS = ".release_assets"
TLISTFILE = ".tlist"
LANGS = "minecraft_langs.jsonc"
INTERACTS = "interact_texts.jsonc"

all: rls_assets
# 	node .scripts/dev_version.js false
	yarn build

# dev: assets
# 	node .scripts/dev_version.js true
# 	yarn build

init:
	yarn install
	python -m venv .venv
	$(PIP) install -r requirements.txt

rls_assets: assets tlist
	python ./.scripts/build_textures.py $(TLISTFILE) $(RLS_ASSETS) $(BEDROCK)

assets:
	rm -rf $(BEDROCK)
	mkdir -p $(BEDROCK)
	cp -r .assets/* $(BEDROCK)

tlist:
	node ./.scripts/build_tlist.cjs $(RLS_ASSETS) $(TLISTFILE)

interact:
	node .scripts/build_lang.cjs $(LANGS) $(INTERACTS) $(BEDROCK)

dev_version:
	node .scripts/