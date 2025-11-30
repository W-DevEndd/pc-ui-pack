
PIP = .venv/bin/pip3

BEDROCK = ".bedrock"
RLS_ASSETS = ".release_assets"
TLISTFILE = ".tlist"

all: rls_assets
	node .scripts/dev_version.js false
	yarn build

init:
	yarn install
	python -m venv .venv
	$(PIP) install -r requirements.txt

assets:
	rm -rf $(BEDROCK)
	mkdir -p $(BEDROCK)
	cp -r .assets/* $(BEDROCK)

tlist:
	node ./.scripts/build_tlist.cjs $(RLS_ASSETS) $(TLISTFILE)

rls_assets: assets tlist
	python ./.scripts/build_textures.py $(TLISTFILE) $(RLS_ASSETS) $(BEDROCK)