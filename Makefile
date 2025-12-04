
PIP = .venv/bin/pip3

BEDROCK = ".bedrock"
RLS_ASSETS = ".release_assets"
TLISTFILE = ".tlist"
LANGS = "minecraft_langs.jsonc"
INTERACTS = "interact_texts.jsonc"

# ---
# Main
# ---

all: assets
	yarn build

init:
	yarn install
	python -m venv .venv
	$(PIP) install -r requirements.txt

# ---
# Assets (.bedrock)
# ---

assets: base_assets extra_textures interact

# Textures
extra_textures: tlist dev_version base_assets
	python ./.scripts/build_textures.py $(TLISTFILE) $(RLS_ASSETS) $(BEDROCK)

tlist:
	node ./.scripts/build_tlist.cjs $(RLS_ASSETS) $(TLISTFILE)

# Langs
interact: dev_version base_assets
	node .scripts/build_lang.cjs $(LANGS) $(INTERACTS) $(BEDROCK)

# ---
# Base
# ---

base_assets:
	rm -rf $(BEDROCK)
	mkdir -p $(BEDROCK)
	cp -r .assets/* $(BEDROCK)

dev_version:
	node .scripts/dev_version.cjs